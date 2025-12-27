import { motion } from "framer-motion";
import { Award, ExternalLink, Database, Cloud, Brain, Code, GraduationCap, BookOpen, Eye, BarChart3 } from "lucide-react";
import { useState } from "react";


// Technology icon URLs from Simple Icons CDN
const techIcons: Record<string, { icon: string; color: string }> = {
  // Languages
  "Python": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg", color: "#3776AB" },
  "Java": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openjdk.svg", color: "#ED8B00" },
  "SQL": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg", color: "#4479A1" },
  "JavaScript": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg", color: "#F7DF1E" },
  // Frameworks & Libraries
  "HTML": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg", color: "#E34F26" },
  "CSS": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg", color: "#1572B6" },
  "Tailwind CSS": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg", color: "#06B6D4" },
  "React.js": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg", color: "#61DAFB" },
  "Next.js": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg", color: "#FFFFFF" },
  "TensorFlow": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg", color: "#FF6F00" },
  "Scikit-learn": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/scikitlearn.svg", color: "#F7931E" },
  "YOLOv8": { icon: "", color: "#8B5CF6" }, // Use Lucide Eye icon
  "Pandas": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pandas.svg", color: "#150458" },
  "NumPy": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/numpy.svg", color: "#013243" },
  "Matplotlib": { icon: "", color: "#11557C" }, // Use Lucide BarChart icon
  // Databases & Tools
  "MongoDB": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg", color: "#47A248" },
  "Supabase": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg", color: "#3ECF8E" },
  "Google Sheets": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlesheets.svg", color: "#34A853" },
  "Docker": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg", color: "#2496ED" },
  "Git": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg", color: "#F05032" },
  "GitHub": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", color: "#FFFFFF" },
  "AWS (EC2, S3, Lambda)": { icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg", color: "#FF9900" },
};

// Get background color class for each tech
const getTechBgClass = (name: string): string => {
  const bgMap: Record<string, string> = {
    "Python": "bg-blue-500/20",
    "Java": "bg-orange-500/20",
    "SQL": "bg-blue-500/20",
    "JavaScript": "bg-slate-400/20",
    "HTML": "bg-orange-500/20",
    "CSS": "bg-blue-500/20",
    "Tailwind CSS": "bg-cyan-500/20",
    "React.js": "bg-cyan-400/20",
    "Next.js": "bg-white/15",
    "TensorFlow": "bg-orange-600/20",
    "Scikit-learn": "bg-orange-500/20",
    "YOLOv8": "bg-purple-500/20",
    "Pandas": "bg-purple-900/30",
    "NumPy": "bg-blue-900/30",
    "Matplotlib": "bg-blue-500/20",
    "MongoDB": "bg-green-500/20",
    "Supabase": "bg-green-400/20",
    "Google Sheets": "bg-green-500/20",
    "Docker": "bg-blue-500/20",
    "Git": "bg-orange-500/20",
    "GitHub": "bg-white/15",
    "AWS (EC2, S3, Lambda)": "bg-orange-500/20",
  };
  return bgMap[name] || "bg-primary/20";
};

// Tech Icon Component with fallback
const TechIcon = ({ name, size = "sm" }: { name: string; size?: "sm" | "md" }) => {
  const [hasError, setHasError] = useState(false);
  const tech = techIcons[name];
  const iconSizeClass = size === "md" ? "w-5 h-5 md:w-6 md:h-6" : "w-4 h-4 md:w-5 md:h-5";
  const containerSizeClass = size === "md" ? "w-8 h-8 md:w-9 md:h-9" : "w-6 h-6 md:w-7 md:h-7";
  const bgClass = getTechBgClass(name);

  // Wrapper with background for visibility
  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div
      className={`${containerSizeClass} ${bgClass} rounded-full flex items-center justify-center`}
      style={{ boxShadow: `0 0 10px ${tech?.color || '#6366f1'}20` }}
    >
      {children}
    </div>
  );

  if (!tech) {
    return (
      <IconWrapper>
        <span
          className={`${iconSizeClass} rounded-full flex items-center justify-center text-[10px] font-bold`}
          style={{ color: '#6366f1' }}
        >
          {name.charAt(0)}
        </span>
      </IconWrapper>
    );
  }

  // Special cases for icons without SVG URLs - use Lucide icons
  if (name === "YOLOv8") {
    return (
      <IconWrapper>
        <Eye className={iconSizeClass} style={{ color: tech.color }} />
      </IconWrapper>
    );
  }
  if (name === "Matplotlib") {
    return (
      <IconWrapper>
        <BarChart3 className={iconSizeClass} style={{ color: "#61DAFB" }} />
      </IconWrapper>
    );
  }

  if (hasError || !tech.icon) {
    return (
      <IconWrapper>
        <span
          className={`text-[10px] font-bold`}
          style={{ color: tech.color }}
        >
          {name.charAt(0)}
        </span>
      </IconWrapper>
    );
  }

  // Determine if we need to invert or apply special filters
  const needsInvert = ["Next.js", "GitHub", "Pandas", "NumPy"].includes(name);
  const filterStyle = needsInvert
    ? "invert(1) brightness(1.2)"
    : "brightness(1.2) saturate(1.2)";

  return (
    <IconWrapper>
      <img
        src={tech.icon}
        alt={`${name} logo`}
        className={iconSizeClass}
        style={{ filter: filterStyle }}
        onError={() => setHasError(true)}
        loading="lazy"
      />
    </IconWrapper>
  );
};

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
      "Next.js",
      "TensorFlow",
      "Scikit-learn",
      "YOLOv8",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      "MongoDB",
      "Supabase",
      "Google Sheets",
      "Docker",
      "Git",
      "GitHub",
      "AWS (EC2, S3, Lambda)",
    ],
  },
];

interface Certification {
  title: string;
  org: string;
  date: string;
  category: string;
  color: string;
  accentBar: string;
  image: string;
  imageAlt: string;
  fallbackGradient: string;
  certText: string;
  icon: typeof Code;
  animation: "tilt" | "shine" | "glow" | "zoom" | "flip";
  logoColor: string;
  logoBg: string;
  logoGlow: string;
  logoText?: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: "Oracle Java SE 8 Programmer",
    org: "Oracle",
    date: "Oct 2025",
    category: "Programming",
    color: "from-red-500 to-red-600",
    accentBar: "bg-red-600",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop&q=80",
    imageAlt: "Oracle Java SE 8 Programmer Certification",
    fallbackGradient: "from-red-600/40 via-red-500/30 to-orange-600/40",
    certText: "CERTIFIED PROGRAMMER",
    icon: Code,
    animation: "tilt",
    logoColor: "text-red-500",
    logoBg: "bg-red-500/20",
    logoGlow: "shadow-red-500/40",
    logoText: "ORACLE",
    link: "https://drive.google.com/file/d/1VAKMugHfaM8jg9I1-eFgLWH_GiVXf9nX/view?usp=sharing",
  },
  {
    title: "Oracle MySQL 8.0 DBA",
    org: "Oracle",
    date: "Jun-Jul 2025",
    category: "Database",
    color: "from-orange-500 to-red-500",
    accentBar: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop&q=80",
    imageAlt: "Oracle MySQL Database Administrator Certification",
    fallbackGradient: "from-orange-600/40 via-red-500/30 to-orange-700/40",
    certText: "DATABASE ADMINISTRATOR",
    icon: Database,
    animation: "shine",
    logoColor: "text-blue-500",
    logoBg: "bg-blue-500/20",
    logoGlow: "shadow-blue-500/40",
    logoText: "MySQL",
    link: "https://drive.google.com/file/d/1RYDOUH-fNWRyzYY4lO10mfhmqc1BWUMU/view?usp=sharing",
  },
  {
    title: "Cloud Computing",
    org: "IIT Kharagpur",
    date: "Jan-Apr 2025",
    category: "Cloud",
    color: "from-blue-500 to-cyan-500",
    accentBar: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80",
    imageAlt: "IIT Kharagpur Cloud Computing Certification",
    fallbackGradient: "from-blue-600/40 via-cyan-500/30 to-blue-700/40",
    certText: "CLOUD COMPUTING",
    icon: GraduationCap,
    animation: "zoom",
    logoColor: "text-blue-600",
    logoBg: "bg-blue-600/20",
    logoGlow: "shadow-blue-600/40",
    logoText: "IIT",
    link: "https://drive.google.com/file/d/1MsWgaLr7E1Dx7YN0KyHL32vyMuXKsgcp/view?usp=sharing",
  },
  {
    title: "Complete Data Science, ML, DL, NLP",
    org: "Udemy",
    date: "Jun-Jul 2025",
    category: "Data Science",
    color: "from-purple-500 to-pink-500",
    accentBar: "bg-purple-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80",
    imageAlt: "Udemy Complete Data Science Certification",
    fallbackGradient: "from-purple-600/40 via-pink-500/30 to-purple-700/40",
    certText: "DATA SCIENCE CERTIFICATE",
    icon: BookOpen,
    animation: "flip",
    logoColor: "text-purple-500",
    logoBg: "bg-purple-500/20",
    logoGlow: "shadow-purple-500/40",
    logoText: "U",
    link: "https://drive.google.com/file/d/1hruNJlLkWSHYmoNhHlyoxJ2h8xwykkwx/view?usp=sharing",
  },
  {
    title: "Generative AI with LLMs",
    org: "Coursera",
    date: "Dec 2024-Jan 2025",
    category: "AI",
    color: "from-blue-500 to-teal-500",
    accentBar: "bg-gradient-to-r from-blue-500 to-green-500",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop&q=80",
    imageAlt: "Coursera Generative AI with LLMs Certification",
    fallbackGradient: "from-blue-600/40 via-green-500/30 to-teal-600/40",
    certText: "VERIFIED CERTIFICATE",
    icon: Award,
    animation: "zoom",
    logoColor: "text-blue-600",
    logoBg: "bg-blue-600/20",
    logoGlow: "shadow-blue-600/40",
    logoText: "C",
    link: "https://drive.google.com/file/d/1qy27OhLZ0EPFpv8cuDkyc-pUdSuQj2En/view?usp=sharing",
  },
];

// Certificate Image Component
const CertificateImage = ({
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
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-secondary/20 blur-2xl" />
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
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isLoading ? "opacity-0" : "opacity-100"
            }`}
        />
      )}
    </>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full filter blur-[180px] -translate-x-1/2" />

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
            Skills & Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* 3D Constellations */}


        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>

              {"skills" in category && Array.isArray(category.skills) && (
                <>
                  {typeof category.skills[0] === "object" ? (
                    // Render progress bars for skills with levels
                    <div className="space-y-4">
                      {(category.skills as Array<{ name: string; level: number }>).map(
                        (skill, skillIndex) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1.5">
                              <div className="flex items-center gap-2">
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 3 }}
                                  transition={{ duration: 0.2 }}
                                  className="flex-shrink-0"
                                >
                                  <TechIcon name={skill.name} size="md" />
                                </motion.div>
                                <span className="text-sm font-medium text-foreground">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    // Render tags for skills without levels
                    <div className="flex flex-wrap gap-2">
                      {(category.skills as string[]).map((skill, skillIndex) => {
                        const tech = techIcons[skill];
                        return (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: categoryIndex * 0.1 + skillIndex * 0.03,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default flex items-center gap-1.5 group"
                            style={{
                              borderColor: tech?.color ? `${tech.color}30` : undefined,
                              borderWidth: tech?.color ? '1px' : undefined,
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <TechIcon name={skill} size="sm" />
                            </motion.div>
                            {skill}
                          </motion.span>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="w-5 h-5 text-primary" />
            Recent Certifications
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;

            return (
              <motion.a
                key={`${cert.title}-${cert.org}`}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  rotateX: cert.animation === "tilt" ? 3 : 0,
                  rotateY: cert.animation === "tilt" ? 3 : 0,
                }}
                style={{ perspective: 1000 }}
                className={`block glass-panel rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 relative ${cert.animation === "glow" ? "hover:shadow-pink-500/20" : "hover:shadow-primary/10"
                  }`}
              >
                {/* Logo Container - Top Centered */}
                <div className="relative pt-6 pb-2 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 md:w-16 md:h-16 rounded-full ${cert.logoBg} border-2 border-current/30 flex items-center justify-center shadow-lg ${cert.logoGlow} group-hover:shadow-xl transition-all duration-300`}
                  >
                    {cert.logoText ? (
                      <span className={`text-sm font-bold ${cert.logoColor}`}>
                        {cert.logoText}
                      </span>
                    ) : (
                      <IconComponent className={`w-7 h-7 ${cert.logoColor}`} />
                    )}
                  </motion.div>

                  {/* Fallback Icon in corner */}
                  <div className="absolute top-3 right-3">
                    <IconComponent className={`w-4 h-4 ${cert.logoColor} opacity-50`} />
                  </div>
                </div>

                {/* Accent Bar */}
                <motion.div
                  className={`h-0.5 mx-4 ${cert.accentBar} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "calc(100% - 2rem)" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />

                {/* Card Body */}
                <div className="p-4 pt-3 relative">
                  <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2 text-center">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 text-center">{cert.org}</p>

                  {/* Certificate Badge */}
                  <div className="flex justify-center mb-3">
                    <span className="text-[10px] font-serif tracking-wider text-muted-foreground uppercase border border-border/50 px-2 py-0.5 rounded">
                      {cert.certText}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                    <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${cert.color} text-xs text-white font-medium`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Link Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} className="text-muted-foreground" />
                  </div>
                </div>

                {/* Shine Effect */}
                {cert.animation === "shine" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  </div>
                )}

                {/* Hover Glow Border */}
                {cert.animation === "glow" && (
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-pink-500/50" />
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
