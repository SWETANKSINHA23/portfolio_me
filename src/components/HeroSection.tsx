import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Download,
  Mail,
  Code,
  FileCode,
  Cloud,
  Brain,
  Monitor,
  Database,
  Container,
  Cpu,
  GitBranch,
  Github,
  Linkedin,
} from "lucide-react";
import AnimatedText from "./AnimatedText";
import TechCard from "./TechCard";
import FloatingOrbs from "./three/features/FloatingOrbs";
import { Canvas } from "@react-three/fiber";

const professionTitles = [
  "AI/ML Engineer",
  "Data Scientist",
  "Cloud Computing Enthusiast",
  "Data Science Practitioner",
];

const techStack = [
  { icon: Code, name: "Python", level: "Advanced", description: "Primary Language" },
  { icon: FileCode, name: "JavaScript", level: "Intermediate", description: "Full Stack" },
  { icon: Cloud, name: "AWS", level: "Intermediate", description: "Cloud Solutions" },
  { icon: Brain, name: "Machine Learning", level: "Advanced", description: "AI/ML Models" },
  { icon: Monitor, name: "React.js", level: "Intermediate", description: "Frontend Framework" },
  { icon: Database, name: "MongoDB", level: "Intermediate", description: "NoSQL Database" },
  { icon: Container, name: "Docker", level: "Intermediate", description: "Containerization" },
  { icon: Cpu, name: "TensorFlow", level: "Advanced", description: "Deep Learning" },
  { icon: GitBranch, name: "Git", level: "Advanced", description: "Version Control" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* 3D Floating Orb Network */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <FloatingOrbs />
        </Canvas>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Welcome Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="badge-primary">
                <span>👋</span>
                Hi there! Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-4"
            >
              <span className="text-foreground">I'm </span>
              <span className="gradient-text">Swetank</span>
            </motion.h1>

            {/* Animated Profession Text */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground mb-6 h-10"
            >
              <AnimatedText texts={professionTitles} />
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Computer Science Engineering student at Lovely Professional University,
              specializing in AI/ML and data science. Passionate about building
              intelligent systems, cloud-native applications, and solving complex algorithmic
              problems. Winner of multiple national hackathons including Smart India Hackathon
              Finalist and AIU International Anveshan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Rocket size={18} />
                View Projects
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1m331RJafHMtObYHZRPZY2vpAgaHb7QAc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium transition-all duration-200 hover:bg-white/10 hover:border-white/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Metrics Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <strong className="text-foreground">250+</strong> LeetCode Problems
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <strong className="text-foreground">4</strong> Hackathon Wins
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <strong className="text-foreground">3</strong> Major Projects
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">Find me on:</span>
              {[
                { icon: Github, href: "https://github.com/SWETANKSINHA23", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/swetank23", label: "LinkedIn" },
                { icon: Mail, href: "mailto:swetank23may@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="p-2.5 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Tech Stack Grid */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:max-w-none">
              {techStack.map((tech, index) => (
                <TechCard
                  key={tech.name}
                  icon={tech.icon}
                  name={tech.name}
                  level={tech.level}
                  description={tech.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;