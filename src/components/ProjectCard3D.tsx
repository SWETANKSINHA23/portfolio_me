import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import gsap from 'gsap';

interface ProjectCard3DProps {
    project: {
        title: string;
        description: string;
        tags: string[];
        metric: string;
        date: string;
        github: string;
        live: string;
        image: string;
        imageAlt: string;
        gradientOverlay: string;
        fallbackGradient: string;
    };
    index: number;
}

// Image component helper
const ProjectImage = ({
    src,
    alt,
    fallbackGradient
}: {
    src: string;
    alt: string;
    fallbackGradient: string;
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <>
            {isLoading && !hasError && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            {hasError && (
                <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`}>
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/20 blur-3xl" />
                </div>
            )}
            {!hasError && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setHasError(true);
                        setIsLoading(false);
                    }}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                />
            )}
        </>
    );
};

export const ProjectCard3D = ({ project, index }: ProjectCard3DProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const shadowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Reduced tilt for better usability
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.4,
            ease: 'power2.out',
            transformPerspective: 1000,
            transformStyle: 'preserve-3d',
        });

        // Shadow shift
        if (shadowRef.current) {
            gsap.to(shadowRef.current, {
                x: -rotateY * 1.5,
                y: -rotateX * 1.5,
                opacity: 0.6,
                duration: 0.4,
                ease: 'power2.out',
            });
        }

        // Parallax content
        if (contentRef.current) {
            gsap.to(contentRef.current, {
                z: 50,
                x: rotateY * 0.5,
                y: rotateX * 0.5,
                duration: 0.4,
            });
        }
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;

        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)',
        });

        if (shadowRef.current) {
            gsap.to(shadowRef.current, {
                x: 0,
                y: 0,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
            });
        }

        if (contentRef.current) {
            gsap.to(contentRef.current, {
                z: 0,
                x: 0,
                y: 0,
                duration: 0.8,
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="perspective-1000" // Tailwind perspective utility if available, else style
            style={{ perspective: '1000px' }}
        >
            <div className="relative w-full h-full">
                {/* Dynamic Shadow */}
                <div
                    ref={shadowRef}
                    className="absolute inset-4 bg-primary/20 blur-2xl rounded-2xl opacity-0 transition-opacity pointer-events-none -z-10"
                />

                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/30 transition-all bg-card/40 backdrop-blur-xl border border-white/5 relative transform-style-3d h-full flex flex-col"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Front Layer: Image */}
                    <div className="aspect-video relative overflow-hidden transform-style-3d" style={{ transform: 'translateZ(0px)' }}>
                        <ProjectImage
                            src={project.image}
                            alt={project.imageAlt}
                            fallbackGradient={project.fallbackGradient}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradientOverlay} z-10 transition-opacity duration-300`} />

                        {/* Metric Badge (Floating) */}
                        <div
                            className="absolute top-4 right-4 z-20"
                            style={{ transform: 'translateZ(30px)' }}
                        >
                            <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm shadow-lg">
                                {project.metric}
                            </span>
                        </div>

                        {/* Project Number */}
                        <div className="absolute bottom-4 left-4 z-20" style={{ transform: "translateZ(20px)" }}>
                            <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                                <span className="text-lg font-bold text-primary">
                                    {index + 1}
                                </span>
                            </div>
                        </div>

                        {/* Hover Overlay Actions */}
                        <div
                            className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-30"
                            style={{ transform: 'translateZ(40px)' }}
                        >
                            <a
                                href={project.live}
                                className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:scale-110 transition-transform"
                                aria-label="View Details"
                            >
                                <ExternalLink size={20} />
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-muted text-foreground shadow-lg hover:scale-110 transition-transform"
                                aria-label="View Code"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Middle Layer: Content */}
                    <div
                        ref={contentRef}
                        className="p-6 flex-1 flex flex-col relative bg-card/50"
                        style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
                    >
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <Calendar size={12} />
                            {project.date}
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {project.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                            {project.description}
                        </p>

                        {/* Back Layer: Tech Stack (Floating more) */}
                        <div
                            className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-white/5"
                            style={{ transform: 'translateZ(10px)' }}
                        >
                            {project.tags.slice(0, 4).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded-full bg-muted/80 text-xs font-medium text-muted-foreground border border-white/5"
                                >
                                    {tag}
                                </span>
                            ))}
                            {project.tags.length > 4 && (
                                <span className="px-2 py-0.5 rounded-full bg-muted/80 text-xs font-medium text-muted-foreground border border-white/5">
                                    +{project.tags.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
