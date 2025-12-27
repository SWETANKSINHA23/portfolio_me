import { motion } from "framer-motion";
import {
  Trophy, Medal, Award, Code, Crown, ExternalLink,
  GraduationCap, BookOpen, Target, Zap, CheckCircle,
  Calendar, MapPin, Star
} from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { TrophyShowcase } from "@/components/TrophyShowcase";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const statsData = [
  { icon: Trophy, label: "Hackathon Wins & Finals", value: "5", color: "from-slate-400 to-slate-500" },
  { icon: Medal, label: "National Finalist", value: "1", color: "from-slate-300 to-slate-400" },
  { icon: Code, label: "Problems Solved", value: "250+", color: "from-primary to-cyan-400" },
  { icon: Award, label: "Major Certifications", value: "6", color: "from-purple-400 to-purple-600" },
];

const hackathonAchievements = [
  {
    title: "AIU International Anveshan",
    status: "Winner",
    statusType: "gold" as const,
    date: "March 2025",
    description: "Won international research and innovation competition hosted by Association of Indian Universities",
    category: "AI/ML Innovation",
    icon: Trophy,
    organization: "Association of Indian Universities",
  },
  {
    title: "Cognitia'25 - LPU Intra University Techfest",
    status: "Winner",
    statusType: "gold" as const,
    date: "February 2025",
    description: "Secured first place in Lovely Professional University's technical fest, competing with students across departments",
    category: "Technical Innovation",
    icon: Trophy,
    organization: "Lovely Professional University",
  },
  {
    title: "Smart India Hackathon 2024",
    status: "Finalist",
    statusType: "silver" as const,
    date: "December 2024",
    description: "Selected as finalist in India's biggest hackathon organized by Ministry of Education, Government of India. Competed with thousands of teams nationwide",
    category: "National Level Competition",
    icon: Medal,
    organization: "Ministry of Education, Govt. of India",
  },
  {
    title: "Hack Verse 2024",
    status: "Winner",
    statusType: "gold" as const,
    date: "March 2024",
    description: "Won open-source focused hackathon organized by Linux Socials community, demonstrating expertise in containerization and AI application development",
    category: "Hackathon Victory",
    icon: Trophy,
    organization: "Linux Socials",
    credentialId: "HV24/333",
    skills: ["Docker", "Streamlit", "LangChain"],
  },
  {
    title: "Cipher Thon 2.0",
    status: "Final Round Qualifier",
    statusType: "silver" as const,
    date: "February 2024",
    description: "Qualified for final round of Cipher Thon 2.0, a national-level coding and cybersecurity competition",
    category: "Competitive Programming",
    icon: Medal,
    organization: "CipherSchools",
  },
];

const certifications = [
  {
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "October 2025",
    skills: ["Object-Oriented Programming (OOP)", "Java Exception Handling", "Java API Utilization", "Lambda Expressions (Java 8)"],
    logo: "Oracle",
    credentialId: "322844837OCAJSE8",
    accentColor: "border-red-500/30 hover:border-red-500/50",
    iconBg: "from-red-500/20 to-red-600/20 border-red-500/20",
  },
  {
    title: "Oracle Certified Professional, MySQL 8.0 Database Administrator",
    issuer: "Oracle Corporation",
    date: "Jun 2025 - Jul 2025",
    skills: ["Database administration", "Query optimization", "Backup/recovery"],
    logo: "Oracle",
    accentColor: "border-red-500/30 hover:border-red-500/50",
    iconBg: "from-red-500/20 to-red-600/20 border-red-500/20",
  },
  {
    title: "Cloud Computing - IIT Kharagpur",
    issuer: "IIT Kharagpur",
    date: "Jan 2025 - Apr 2025",
    skills: ["Cloud architecture", "Virtualization", "Distributed systems"],
    logo: "IIT",
    accentColor: "border-blue-500/30 hover:border-blue-500/50",
    iconBg: "from-blue-500/20 to-cyan-500/20 border-blue-500/20",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    date: "January 2025",
    skills: ["Generative AI", "Large Language Models", "LLM Applications"],
    logo: "DeepLearning.AI",
    accentColor: "border-pink-500/30 hover:border-pink-500/50",
    iconBg: "from-pink-500/20 to-purple-500/20 border-pink-500/20",
  },
  {
    title: "Complete Data Science, Machine Learning, DL, NLP",
    issuer: "Udemy",
    date: "Jun 2025 - Jul 2025",
    skills: ["End-to-end data science", "ML models", "Deep learning", "NLP"],
    logo: "Udemy",
    accentColor: "border-purple-500/30 hover:border-purple-500/50",
    iconBg: "from-purple-500/20 to-purple-600/20 border-purple-500/20",
  },
  {
    title: "Generative AI with LLMs",
    issuer: "Coursera",
    date: "Dec 2024 - Jan 2025",
    skills: ["Large Language Models", "Prompt engineering", "Fine-tuning"],
    logo: "Coursera",
    accentColor: "border-green-500/30 hover:border-green-500/50",
    iconBg: "from-green-500/20 to-teal-500/20 border-green-500/20",
  },
];

const leetcodeStats = {
  total: 250,
  easy: 100,
  medium: 120,
  hard: 30,
  topics: ["Arrays", "Dynamic Programming", "Trees", "Graphs", "Backtracking", "Strings", "Hash Tables"],
};

const academicAchievements = [
  {
    title: "B.Tech Computer Science & Engineering",
    institution: "Lovely Professional University",
    score: "GPA: 7.5/10",
    icon: GraduationCap,
  },
  {
    title: "Senior Secondary (12th)",
    institution: "Foundation School, Buxar",
    score: "77%",
    icon: BookOpen,
  },
];

const timelineEvents = [
  { date: "Mar 2025", title: "AIU International Anveshan Winner", type: "gold" },
  { date: "Feb 2025", title: "Cognitia'25 Winner", type: "gold" },
  { date: "Dec 2024", title: "Smart India Hackathon Finalist", type: "silver" },
  { date: "Mar 2024", title: "Hack Verse 2024 Winner", type: "gold" },
  { date: "Feb 2024", title: "Cipher Thon 2.0 Final Round Qualifier", type: "silver" },
];

const Achievements = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Trophy className="w-4 h-4" />
              Achievements & Awards
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Recognition & <AnimatedText texts={["Milestones", "Awards", "Achievements"]} className="gradient-text" />
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hackathon victories, certifications, and competitive programming achievements
            </p>
          </motion.div>

          {/* 3D Trophy Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16 -mt-8"
          >
            <TrophyShowcase />
          </motion.div>

          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-panel rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Hackathon Achievements */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Hackathon & Competition Success
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {hackathonAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`glass-panel rounded-2xl p-6 group hover:border-primary/30 transition-all relative overflow-hidden ${achievement.statusType === "gold"
                    ? "border-slate-500/30 hover:border-slate-500/50"
                    : "border-slate-400/30 hover:border-slate-400/50"
                    }`}
                >
                  {/* Background Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full filter blur-3xl opacity-20 ${achievement.statusType === "gold" ? "bg-slate-500" : "bg-slate-400"
                    }`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${achievement.statusType === "gold"
                        ? "bg-gradient-to-br from-slate-400 to-zinc-500"
                        : "bg-gradient-to-br from-slate-300 to-slate-400"
                        }`}>
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${achievement.statusType === "gold"
                        ? "bg-slate-500/20 text-slate-200 border border-slate-500/30"
                        : "bg-slate-400/20 text-slate-300 border border-slate-400/30"
                        }`}>
                        {achievement.statusType === "gold" && <Crown className="w-3.5 h-3.5" />}
                        {achievement.status}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {achievement.date}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {achievement.description}
                    </p>

                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {achievement.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Competitive Programming */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Coding Excellence
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Side - Stats */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-500 to-zinc-500 flex items-center justify-center">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">LeetCode</h3>
                      <p className="text-muted-foreground">Problem Solver</p>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="relative w-40 h-40 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="currentColor"
                          strokeWidth="10"
                          fill="none"
                          className="text-secondary"
                        />
                        <motion.circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="url(#gradient)"
                          strokeWidth="10"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 440" }}
                          whileInView={{ strokeDasharray: "396 440" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="#22d3ee" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-foreground">{leetcodeStats.total}+</span>
                        <span className="text-sm text-muted-foreground">Problems</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-green-400">Easy</span>
                        <span className="text-muted-foreground">{leetcodeStats.easy}+</span>
                      </div>
                      <Progress value={40} className="h-2 bg-secondary [&>div]:bg-green-500" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-400">Medium</span>
                        <span className="text-muted-foreground">{leetcodeStats.medium}+</span>
                      </div>
                      <Progress value={48} className="h-2 bg-secondary [&>div]:bg-slate-500" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-red-400">Hard</span>
                        <span className="text-muted-foreground">{leetcodeStats.hard}+</span>
                      </div>
                      <Progress value={12} className="h-2 bg-secondary [&>div]:bg-red-500" />
                    </div>
                  </div>
                </div>

                {/* Right Side - Topics */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Topics Mastered</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leetcodeStats.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="glass-panel rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Zap className="w-4 h-4 text-primary" />
                      Active since 2023
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Consistently solving algorithmic challenges to strengthen problem-solving skills
                    </p>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View LeetCode Profile
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Professional Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className={`glass-panel rounded-2xl p-6 group transition-all ${cert.accentColor || "hover:border-primary/30"}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center border ${cert.iconBg || "from-primary/20 to-purple-500/20 border-primary/20"}`}>
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" size="sm" className="w-full border-primary/20 hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Academic Achievements */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Academic Excellence
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {academicAchievements.map((academic, index) => (
                <motion.div
                  key={academic.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass-panel rounded-2xl p-6 group hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <academic.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {academic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{academic.institution}</p>
                      <p className="text-lg font-semibold text-primary mt-1">{academic.score}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievement Timeline */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Achievement Timeline
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              <div className="space-y-6">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center gap-6 group"
                  >
                    {/* Timeline Node */}
                    <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${event.type === "gold"
                      ? "bg-gradient-to-br from-slate-400 to-zinc-500"
                      : "bg-gradient-to-br from-slate-300 to-slate-400"
                      } group-hover:scale-110 transition-transform`}>
                      {event.type === "gold" ? (
                        <Trophy className="w-7 h-7 text-white" />
                      ) : (
                        <Medal className="w-7 h-7 text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-panel rounded-xl p-4 group-hover:border-primary/30 transition-all">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-primary font-medium">{event.date}</span>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                        </div>
                        <Star className={`w-5 h-5 ${event.type === "gold" ? "text-slate-200" : "text-slate-400"
                          }`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Recognition Wall */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Recognition Wall
              </h2>
            </div>

            <div className="glass-panel rounded-2xl p-8">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`aspect-square rounded-2xl flex items-center justify-center ${index % 3 === 0
                      ? "bg-gradient-to-br from-slate-400/20 to-zinc-500/20 border border-slate-500/30"
                      : index % 3 === 1
                        ? "bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30"
                        : "bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-500/30"
                      }`}
                  >
                    {index % 3 === 0 ? (
                      <Trophy className="w-10 h-10 text-slate-300" />
                    ) : index % 3 === 1 ? (
                      <Award className="w-10 h-10 text-primary" />
                    ) : (
                      <Medal className="w-10 h-10 text-purple-400" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;
