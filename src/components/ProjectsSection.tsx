import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const projects = [
  {
    title: "Hindi-English Code-Mix Language Identification",
    description:
      "Advanced NLP system using LSTM (97.83% accuracy) and BERT (94.71%) for language identification in code-mixed datasets",
    tags: ["LSTM", "BERT", "CRF", "SVM", "TensorFlow", "Keras", "Hugging Face"],
    metric: "97.83% Accuracy",
    date: "Feb 2025 - Mar 2025",
    github: "https://github.com/SWETANKSINHA23/Sequence-Labeling-for-Language-ID-in-Hindi-English-Code-Mix",
    live: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop&q=80",
    imageAlt: "NLP Language Identification Neural Network Visualization",
    gradientOverlay: "from-blue-500/20 via-purple-500/10 to-background/90",
    fallbackGradient: "from-blue-600/30 via-purple-500/20 to-indigo-900/40",
  },
  {
    title: "AI-Driven Electricity Demand Forecasting - Delhi",
    description:
      "Multi-horizon forecasting system with Random Forest/XGBoost achieving 89-96% accuracy with interactive Next.js dashboard",
    tags: ["Next.js", "TypeScript", "Python", "Flask", "scikit-learn", "MongoDB", "ApexCharts"],
    metric: "89-96% Accuracy",
    date: "Sep 2024 - Dec 2024",
    github: "https://github.com/SWETANKSINHA23/electricity-demand-model-2024",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
    imageAlt: "Electricity Demand Forecasting Dashboard with Real-time Analytics",
    gradientOverlay: "from-emerald-500/20 via-teal-500/10 to-background/90",
    fallbackGradient: "from-emerald-600/30 via-teal-500/20 to-green-900/40",
  },
  {
    title: "EZ Parkade - AI Vehicle Detection System",
    description:
      "YOLOv8-based vehicle detection pipeline reducing parking violations by 15% with real-time analytics",
    tags: ["Python", "YOLOv8", "Supabase", "Roboflow", "Google Sheets"],
    metric: "70% Detection Accuracy",
    date: "Oct 2023 - Dec 2023",
    github: "https://github.com/SWETANKSINHA23",
    live: "#",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&h=500&fit=crop&q=80",
    imageAlt: "YOLOv8 Vehicle Detection System with Real-time Analytics",
    gradientOverlay: "from-violet-500/20 via-purple-500/10 to-background/90",
    fallbackGradient: "from-violet-600/30 via-purple-500/20 to-indigo-900/40",
  },
];

// Image component with loading state and fallback
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
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* Fallback gradient on error */}
      {hasError && (
        <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient}`}>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/20 blur-3xl" />
        </div>
      )}

      {/* Actual image */}
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
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${isLoading ? 'opacity-0' : 'opacity-100'
            }`}
        />
      )}
    </>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-gradient-radial from-brand-cyan/5 via-transparent to-transparent -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Recent <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/30 transition-all"
            >
              {/* Project Image/Header */}
              <div className="aspect-video relative overflow-hidden">
                {/* Project Image with Loading State */}
                <ProjectImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackGradient={project.fallbackGradient}
                />

                {/* Gradient Overlay - Always visible */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradientOverlay} z-10`} />

                {/* Metric Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
                    {project.metric}
                  </span>
                </div>

                {/* Project Number */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <span className="text-lg font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-30">
                  <motion.a
                    href={project.live}
                    className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View Details"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted text-foreground shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View Code"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Date */}
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

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View Details
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                  >
                    View Code
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/projects">
            <motion.span
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold glow-cyan cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ExternalLink size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
