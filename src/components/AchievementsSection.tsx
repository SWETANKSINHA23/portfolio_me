import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Code, Crown, Shield } from "lucide-react";
import { useState } from "react";

interface Achievement {
  title: string;
  date: string;
  organization: string;
  badge: "gold" | "silver" | "bronze" | "ongoing";
  badgeLabel: string;
  badgeEmoji: string;
  image: string;
  imageAlt: string;
  fallbackGradient: string;
  accentColor: string;
  credentialId?: string;
  stats?: string;
  projectName?: string;
  projectIcon?: string;
  projectContext?: string;
  techStack?: string[];
  description?: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: "AIU International Anveshan Winner",
    date: "March 2025",
    organization: "Association of Indian Universities",
    badge: "gold",
    badgeLabel: "WINNER",
    badgeEmoji: "👑",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400&h=300&fit=crop&q=80",
    imageAlt: "Agricultural Digital Marketplace Platform",
    fallbackGradient: "from-slate-600/40 via-gray-500/30 to-slate-600/40",
    accentColor: "border-l-slate-500",
    projectName: "AgriConnect Platform",
    projectIcon: "🌾",
    projectContext: "Agricultural Digital Marketplace",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description: "Built agricultural marketplace connecting farmers, customers, and vendors",
    link: "https://happenings.lpu.in/lpu-innovators-triumphed-at-aiu-international-anveshan-2025-pioneering-solutions-for-a-better-future/",
  },
  {
    title: "Cognitia'25 Winner (LPU)",
    date: "February 2025",
    organization: "Lovely Professional University",
    badge: "gold",
    badgeLabel: "1ST PLACE",
    badgeEmoji: "🔥",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400&h=300&fit=crop&q=80",
    imageAlt: "Intelligent Foundry Monitoring System",
    fallbackGradient: "from-gray-600/40 via-slate-500/30 to-zinc-600/40",
    accentColor: "border-l-slate-500",
    projectName: "MoltenSight AI",
    projectIcon: "🔥",
    projectContext: "Industrial IoT Monitoring System",
    techStack: ["Python", "IoT Sensors", "ML", "Real-time Analytics"],
    description: "AI-powered molten metal monitoring for smart foundries",
    link: "https://drive.google.com/drive/folders/13Ob9pawiy7DzxuK9_SHw58BdMmuLi_2A?usp=sharing",
  },
  {
    title: "Smart India Hackathon Finalist",
    date: "December 2024",
    organization: "Ministry of Education, Govt. of India",
    badge: "silver",
    badgeLabel: "FINALIST",
    badgeEmoji: "⚡",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop&q=80",
    imageAlt: "Smart Electricity Demand Prediction System",
    fallbackGradient: "from-blue-600/40 via-cyan-500/30 to-blue-700/40",
    accentColor: "border-l-blue-400",
    projectName: "SmartGrid Forecaster",
    projectIcon: "⚡",
    projectContext: "Predictive Energy Analytics",
    techStack: ["Next.js", "Python", "scikit-learn", "Flask"],
    description: "AI-driven electricity demand forecasting for smart grid optimization",
    link: "https://drive.google.com/file/d/1nREgEnkO8Lw8LdnbPq25e6HIAF35_kUj/view?usp=sharing",
  },
  {
    title: "Hack Verse 2024 Winner",
    date: "March 2024",
    organization: "Linux Socials",
    badge: "gold",
    badgeLabel: "WINNER",
    badgeEmoji: "🐳",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop&q=80",
    imageAlt: "Containerized AI Dashboard Application",
    fallbackGradient: "from-blue-600/40 via-purple-500/30 to-blue-700/40",
    accentColor: "border-l-orange-500",
    credentialId: "HV24/333",
    projectName: "ContainerAI Dashboard",
    projectIcon: "🐳",
    projectContext: "AI-Powered Containerized Dashboard",
    techStack: ["Docker", "Streamlit", "LangChain", "Python"],
    description: "Built containerized AI dashboard using Docker, LangChain, and Streamlit",
    link: "https://drive.google.com/file/d/1DFhK164XXmAjvxYpYINYfkTNn5s5OaJw/view?usp=sharing",
  },
  {
    title: "Cipher Thon 2.0 Finalist",
    date: "February 2024",
    organization: "CipherSchools",
    badge: "silver",
    badgeLabel: "FINAL ROUND",
    badgeEmoji: "🔐",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop&q=80",
    imageAlt: "Cipher Thon 2.0 Final Round Qualifier",
    fallbackGradient: "from-gray-600/40 via-slate-500/30 to-gray-700/40",
    accentColor: "border-l-gray-400",
    link: "https://drive.google.com/file/d/1SJkMjKyI2-SQ2cpTb95D80G4KZcuJDU6/view?usp=sharing",
  },
  {
    title: "250+ LeetCode Problems",
    date: "Ongoing",
    organization: "LeetCode",
    badge: "ongoing",
    badgeLabel: "250+ SOLVED",
    badgeEmoji: "🔥",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=300&fit=crop&q=80",
    imageAlt: "LeetCode Problem Solving Achievement",
    fallbackGradient: "from-slate-600/40 via-gray-500/30 to-zinc-700/40",
    accentColor: "border-l-slate-600",
    stats: "Easy: 100+ | Medium: 120+ | Hard: 30+",
    link: "https://leetcode.com/",
  },
];

const badgeStyles = {
  gold: {
    bg: "bg-gradient-to-r from-slate-500 to-zinc-500",
    text: "text-slate-100",
    glow: "shadow-lg shadow-slate-500/30",
    icon: Crown,
    emoji: "👑",
  },
  silver: {
    bg: "bg-gradient-to-r from-slate-300 to-gray-400",
    text: "text-gray-800",
    glow: "shadow-lg shadow-gray-400/30",
    icon: Medal,
    emoji: "🥈",
  },
  bronze: {
    bg: "bg-gradient-to-r from-orange-400 to-orange-600",
    text: "text-orange-900",
    glow: "shadow-lg shadow-orange-500/30",
    icon: Award,
    emoji: "🥉",
  },
  ongoing: {
    bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
    text: "text-blue-900",
    glow: "shadow-lg shadow-blue-500/30",
    icon: Code,
    emoji: "🔥",
  },
};

const statsData = [
  { emoji: "🏆", value: "5", label: "Major Wins", color: "text-slate-200" },
  { emoji: "🥈", value: "2", label: "National Finals", color: "text-slate-300" },
  { emoji: "💻", value: "250+", label: "Problems Solved", color: "text-orange-400" },
  { emoji: "🎓", value: "6", label: "Certifications", color: "text-blue-400" },
];

// Achievement Image Component with loading state
const AchievementImage = ({
  src,
  alt,
  fallbackGradient,
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
          <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-secondary/20 blur-2xl" />
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
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${isLoading ? "opacity-0" : "opacity-100"
            }`}
        />
      )}
    </>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full filter blur-[150px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Recognition & <span className="gradient-text">Awards</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Celebrating excellence in hackathons, competitions, and continuous learning
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              className="glass-panel rounded-xl p-4 text-center group hover:border-primary/30 transition-all"
            >
              <span className="text-2xl mb-2 block">{stat.emoji}</span>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const badgeStyle = badgeStyles[achievement.badge];
            const IconComponent = achievement.badge === "gold" ? Trophy :
              achievement.badge === "silver" ? Medal :
                achievement.badge === "ongoing" ? Code : Shield;

            return (
              <motion.a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`glass-panel rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-l-4 cursor-pointer block ${achievement.accentColor}`}
              >
                {/* Image Container */}
                <div className="h-36 relative overflow-hidden">
                  <AchievementImage
                    src={achievement.image}
                    alt={achievement.imageAlt}
                    fallbackGradient={achievement.fallbackGradient}
                  />

                  {/* Gradient Overlay - reduces on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-60" />

                  {/* Icon Overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className={`w-14 h-14 rounded-xl bg-background/20 backdrop-blur-md flex items-center justify-center ${badgeStyle.glow}`}>
                      <IconComponent className={`w-7 h-7 ${achievement.badge === "gold" ? "text-slate-200" :
                        achievement.badge === "silver" ? "text-slate-300" :
                          achievement.badge === "ongoing" ? "text-gray-400" : "text-gray-400"
                        }`} />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${badgeStyle.bg} ${badgeStyle.text} ${achievement.badge === "gold" ? "animate-pulse" : ""}`}>
                      <span>{achievement.badgeEmoji}</span>
                      {achievement.badgeLabel}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 bg-background/50 backdrop-blur-sm">
                  <h3 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {achievement.title}
                  </h3>

                  {/* Project Name Badge */}
                  {achievement.projectName && (
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                        <span>{achievement.projectIcon}</span>
                        {achievement.projectName}
                      </span>
                    </div>
                  )}

                  {/* Project Context */}
                  {achievement.projectContext && (
                    <p className="text-sm text-primary/80 font-medium mb-1">
                      {achievement.projectContext}
                    </p>
                  )}

                  {/* Description */}
                  {achievement.description && (
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {achievement.description}
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground mb-2">
                    {achievement.organization}
                  </p>

                  {/* Tech Stack */}
                  {achievement.techStack && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {achievement.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 rounded text-[10px] bg-secondary/50 text-muted-foreground border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {achievement.date}
                    </span>
                    {achievement.credentialId && (
                      <span className="text-xs text-primary font-mono">
                        {achievement.credentialId}
                      </span>
                    )}
                  </div>

                  {achievement.stats && (
                    <div className="mt-2 pt-2 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">
                        {achievement.stats}
                      </span>
                    </div>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;