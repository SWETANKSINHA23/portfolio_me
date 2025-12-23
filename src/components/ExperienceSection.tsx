import { motion } from "framer-motion";
import {
    Briefcase,
    MapPin,
    Calendar,
    CheckCircle,
    ExternalLink,
    Award,
    Cloud,
    Users,
    Zap,
    TrendingUp,
    Globe,
    Building,
} from "lucide-react";

const responsibilities = [
    {
        text: "Architected a scalable serverless web application using AWS S3, Lambda, DynamoDB, API Gateway, CloudFront, and AWS WAF, boosting deployment efficiency by 25% at Gokboru Tech Pvt. Ltd.",
        metric: "25%",
    },
    {
        text: "Engineered event-driven REST APIs using AWS Lambda and API Gateway, improving response latency by 20% while enhancing system elasticity and fault tolerance",
        metric: "20%",
    },
    {
        text: "Strengthened security and global content delivery with AWS WAF and CloudFront, reducing latency and boosting user engagement by 30%",
        metric: "30%",
    },
];

const technologies = [
    "AWS Lambda",
    "AWS S3",
    "DynamoDB",
    "API Gateway",
    "CloudFront",
    "AWS WAF",
    "Serverless Architecture",
    "REST APIs",
    "Event-Driven Design",
    "Cloud Security",
];

const metrics = [
    {
        value: "25%",
        label: "Deployment Efficiency Boost",
        icon: TrendingUp,
        color: "text-primary",
    },
    {
        value: "20%",
        label: "Improved Response Latency",
        icon: Zap,
        color: "text-secondary",
    },
    {
        value: "30%",
        label: "Increased User Engagement",
        icon: Users,
        color: "text-accent",
    },
];

const experienceData = [
    {
        title: "Serverless Web Application Development using AWS Services",
        role: "AWS Cloud Developer Trainee",
        company: "Gokboru Tech",
        type: "Pvt. Ltd.",
        duration: "Jun 2024 - Jul 2024",
        location: "Remote",
        description: "Completed intensive professional training program focused on AWS serverless architecture and cloud-native application development. Gained hands-on experience building scalable, event-driven applications using the complete AWS serverless ecosystem including Lambda, DynamoDB, S3, API Gateway, CloudFront, and security services.",
    }
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                        Professional Landscape
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Building expertise through hands-on learning and real-world projects
                    </p>
                </motion.div>

                {/* Featured Experience Card - Gokboru Tech */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="bg-card border-l-4 border-l-primary border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 max-w-5xl mx-auto"
                >
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8 relative z-10">
                        {/* Company Logo with AWS Icons Cluster */}
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 border border-primary/20">
                            <Cloud className="w-10 h-10 text-primary" />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                                    <Award size={12} />
                                    Professional Training
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium">
                                    <Globe size={12} />
                                    Remote
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2 tracking-tight">
                                {experienceData[0].title}
                            </h2>
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                                <span className="flex items-center gap-1.5">
                                    <Briefcase size={16} className="text-primary" />
                                    {experienceData[0].role}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Building size={16} />
                                    <span className="text-foreground font-medium">{experienceData[0].company}</span>
                                    <span className="text-muted-foreground text-xs">{experienceData[0].type}</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Calendar size={16} />
                                    {experienceData[0].duration}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={16} />
                                    {experienceData[0].location}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-muted/30 border border-border rounded-xl p-6 mb-8 relative z-10">
                        <p className="text-muted-foreground leading-relaxed">
                            {experienceData[0].description}
                        </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-8 relative z-10">
                        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            Key Responsibilities & Achievements
                        </h3>
                        <ul className="space-y-4">
                            {responsibilities.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 group"
                                >
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <CheckCircle size={14} className="text-primary" />
                                    </span>
                                    <span className="text-muted-foreground leading-relaxed">
                                        {item.text.split(item.metric).map((part, i, arr) => (
                                            <span key={i}>
                                                {part}
                                                {i < arr.length - 1 && (
                                                    <span className="text-primary font-semibold">{item.metric}</span>
                                                )}
                                            </span>
                                        ))}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8 relative z-10">
                        <h3 className="text-lg font-semibold text-foreground mb-4">
                            Technologies & Skills Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.03 }}
                                    viewport={{ once: true }}
                                    className="px-3 py-1.5 rounded-full bg-card border border-primary/20 text-foreground text-sm font-medium hover:bg-primary/10 hover:border-primary/40 transition-all cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Metrics Panel */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-8 relative z-10">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center hover:bg-primary/10 hover:border-primary/20 transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-1">
                                    {metric.value}
                                </div>
                                <div className="text-sm text-muted-foreground">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certificate Button */}
                    <motion.a
                        href="https://drive.google.com/file/d/13iDUpEtml--CYtthw_Yq24ymhclQdYTW/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all relative z-10"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Award size={18} />
                        View Certificate
                        <ExternalLink size={14} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
