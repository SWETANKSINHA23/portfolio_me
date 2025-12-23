import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle, Calendar, Rocket, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

interface ProjectMetric {
  label: string;
  value: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  achievements: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  categories: Array<{ icon: LucideIcon; label: string }>;
  demoUrl?: string;
  githubUrl: string;
  featured?: boolean;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  date,
  achievements,
  techStack,
  metrics,
  categories,
  demoUrl,
  githubUrl,
  featured,
  index,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass-panel rounded-2xl overflow-hidden group hover:border-primary/30 transition-all relative"
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            Featured
          </span>
        </div>
      )}

      {/* Project Header/Image Area */}
      <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/30 blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/30 blur-2xl" />
        </div>

        {/* Category Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground"
            >
              <cat.icon size={12} className="text-primary" />
              {cat.label}
            </span>
          ))}
        </div>

        {/* Date Badge */}
        <div className="absolute bottom-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs text-muted-foreground">
            <Calendar size={12} />
            {date}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {demoUrl && (
            <motion.a
              href={demoUrl}
              className="p-3 rounded-full bg-primary text-primary-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket size={20} />
            </motion.a>
          )}
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted text-foreground"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Key Achievements - Collapsible */}
        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors mb-2"
          >
            <CheckCircle size={16} className="text-primary" />
            Key Achievements
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            className="overflow-hidden"
          >
            <ul className="space-y-1.5 pl-6">
              {achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Metrics Panel */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-muted/50 rounded-lg p-2.5 text-center"
            >
              <div className="text-sm font-bold text-primary">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-transparent transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 6 && (
            <span className="px-2 py-0.5 rounded-full bg-secondary/50 text-xs font-medium text-muted-foreground">
              +{techStack.length - 6} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {demoUrl ? (
            <motion.a
              href={demoUrl}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Rocket size={16} />
              View Demo
            </motion.a>
          ) : (
            <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted text-muted-foreground font-medium text-sm cursor-not-allowed">
              <Rocket size={16} />
              Demo N/A
            </span>
          )}
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border hover:border-primary/50 text-foreground font-medium text-sm transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={16} />
            Source Code
            <ExternalLink size={12} />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
