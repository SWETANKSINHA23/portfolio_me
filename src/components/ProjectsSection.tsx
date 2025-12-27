import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { ProjectCard3D } from "./ProjectCard3D";

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
            <ProjectCard3D key={project.title} project={project} index={index} />
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
