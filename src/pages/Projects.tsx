import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, Search, X, Brain, Code, Cloud, Eye, MessageSquare, Folder, Github } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import type { LucideIcon } from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { id: "all", label: "All Projects", icon: Folder },
  { id: "ai-ml", label: "AI & Machine Learning", icon: Brain },
  { id: "data-science", label: "Data Science", icon: Code },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "nlp", label: "NLP", icon: MessageSquare },
  { id: "cv", label: "Computer Vision", icon: Eye },
];

const projects = [
  {
    id: 1,
    title: "Hindi-English Code-Mix Language Identification",
    description:
      "Advanced NLP system using deep learning for language identification in code-mixed datasets. Developed and trained LSTM achieving 97.83% accuracy and BERT achieving 94.71% accuracy. Also implemented CRF (94.23%) and SVM (82.84%) models using handcrafted features including TF-IDF, prefixes, suffixes, and context windows.",
    date: "Feb 2025 - Mar 2025",
    achievements: [
      "97.83% accuracy with LSTM model",
      "Implemented 4 different models (LSTM, BERT, CRF, SVM)",
      "Designed complete NLP pipeline with preprocessing",
      "Handcrafted features including TF-IDF and context windows",
    ],
    techStack: [
      "LSTM",
      "BERT",
      "CRF",
      "SVM",
      "TensorFlow",
      "Keras",
      "Hugging Face",
      "Python",
      "NLP",
    ],
    metrics: [
      { label: "LSTM Accuracy", value: "97.83%" },
      { label: "BERT Accuracy", value: "94.71%" },
      { label: "Models Trained", value: "4" },
    ],
    categories: [
      { icon: Brain, label: "AI/ML" },
      { icon: MessageSquare, label: "NLP" },
    ],
    categoryIds: ["ai-ml", "nlp"],
    githubUrl: "https://github.com/SWETANKSINHA23/Sequence-Labeling-for-Language-ID-in-Hindi-English-Code-Mix",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Driven Electricity Demand Forecasting System",
    description:
      "Built an intelligent electricity demand forecasting system for Delhi region using Random Forest and XGBoost models achieving 89-96% accuracy across short, mid, and long-term predictions. Designed a multi-horizon framework with interactive Next.js & TypeScript interface featuring Tailwind CSS and ApexCharts for real-time dashboards. Integrated time-series models via Flask API with Node.js backend using Prisma & MongoDB.",
    date: "Sep 2024 - Dec 2024",
    achievements: [
      "89-96% accuracy across multiple time horizons",
      "Interactive real-time forecasting dashboards",
      "25% improved scalability during demand simulations",
      "Multi-horizon framework for short/mid/long-term predictions",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Python",
      "Flask",
      "scikit-learn",
      "MongoDB",
      "Tailwind CSS",
      "ApexCharts",
      "Node.js",
      "Prisma",
      "Random Forest",
      "XGBoost",
    ],
    metrics: [
      { label: "Accuracy Range", value: "89-96%" },
      { label: "Scalability", value: "+25%" },
      { label: "Horizons", value: "3" },
    ],
    categories: [
      { icon: Brain, label: "AI/ML" },
      { icon: Code, label: "Data Science" },
    ],
    categoryIds: ["ai-ml", "data-science"],
    githubUrl: "https://github.com/SWETANKSINHA23/electricity-demand-model-2024",
    featured: true,
  },
  {
    id: 3,
    title: "YOLOv8-Based Vehicle Detection System",
    description:
      "Innovated a YOLOv8n-based vehicle detection pipeline achieving 70% accuracy, resulting in 15% reduction in parking violations and improved real-time traffic analytics. Incorporated Supabase and Google Sheets to streamline backend data tracking, enhancing system scalability. Optimized traffic data analysis with Python and Roboflow, improving enforcement efficiency and data processing speed by 20%.",
    date: "Oct 2023 - Dec 2023",
    achievements: [
      "70% detection accuracy with YOLOv8n",
      "15% reduction in parking violations",
      "20% improved data processing speed",
      "Real-time traffic analytics integration",
    ],
    techStack: [
      "Python",
      "YOLOv8",
      "Supabase",
      "Roboflow",
      "Google Sheets",
      "Computer Vision",
      "Real-time Analytics",
    ],
    metrics: [
      { label: "Accuracy", value: "70%" },
      { label: "Violations ↓", value: "15%" },
      { label: "Speed ↑", value: "20%" },
    ],
    categories: [
      { icon: Brain, label: "AI/ML" },
      { icon: Eye, label: "Computer Vision" },
    ],
    categoryIds: ["ai-ml", "cv"],
    githubUrl: "https://github.com/SWETANKSINHA23",
    featured: true,
  },
];

const additionalProjects = [
  {
    id: 4,
    title: "AWS Serverless Web Application",
    description:
      "Designed and deployed a fully serverless web application using AWS services including Lambda, API Gateway, DynamoDB, and S3 for static hosting.",
    techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFormation"],
    categoryIds: ["cloud"],
    githubUrl: "https://github.com/SWETANKSINHA23",
  },
  {
    id: 5,
    title: "LeetCode Solutions Repository",
    description:
      "Comprehensive collection of 250+ solved problems covering data structures, algorithms, and system design patterns with detailed explanations.",
    techStack: ["Python", "Java", "Data Structures", "Algorithms", "Dynamic Programming"],
    categoryIds: ["data-science"],
    githubUrl: "https://github.com/SWETANKSINHA23",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "all" ||
        project.categoryIds.includes(activeCategory);

      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchLower)
        ) ||
        project.achievements.some((achievement) =>
          achievement.toLowerCase().includes(searchLower)
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const clearFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full filter blur-[180px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full filter blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="gradient-text">Projects</span>
              <span className="text-foreground"> & Work</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              AI/ML Systems | Data Science Applications | Cloud Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="pb-8 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel rounded-2xl p-6"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter size={16} />
                Filter by:
              </div>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon size={14} />
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, tech stack, or keywords..."
                className="w-full pl-12 pr-12 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Active Filters Info */}
            {(activeCategory !== "all" || searchQuery) && (
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 relative">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  achievements={project.achievements}
                  techStack={project.techStack}
                  metrics={project.metrics}
                  categories={project.categories}
                  githubUrl={project.githubUrl}
                  featured={project.featured}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <motion.button
                onClick={clearFilters}
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-16 bg-secondary/5 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              More Projects & <span className="gradient-text">Contributions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-xl p-6 group hover:border-primary/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
