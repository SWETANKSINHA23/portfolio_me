import { motion } from "framer-motion";
import {
  Mail,

  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  Code,
  Trophy,
  Brain,
  Cloud,
  BookOpen,
  Award,
  Rocket,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Layout from "@/components/Layout";
import { InteractiveGlobe } from "@/components/InteractiveGlobe";

const quickStats = [
  { icon: GraduationCap, label: "GPA", value: "7.5/10" },
  { icon: Code, label: "Problems Solved", value: "250+" },
  { icon: Trophy, label: "Hackathon Wins", value: "4" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "swetank23may@gmail.com",
    href: "mailto:swetank23may@gmail.com",
  },

  {
    icon: Github,
    label: "GitHub",
    value: "github.com/SWETANKSINHA23",
    href: "https://github.com/SWETANKSINHA23",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/swetank23",
    href: "https://linkedin.com/in/swetank23",
    external: true,
  },
];

const timeline = [
  {
    year: "2025",
    title: "Multiple Certifications",
    description:
      "Oracle MySQL DBA, Cloud Computing (IIT KGP), Generative AI with LLMs, Complete Data Science",
    icon: Award,
  },
  {
    year: "2024-2025",
    title: "Major Projects",
    description:
      "Hindi-English Language ID System (97.83% accuracy), Electricity Forecasting for Delhi, AWS Training",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "Hackathon Success",
    description:
      "Smart India Hackathon 2024 Finalist, AIU Anveshan Winner, Cognitia'25 Winner, Hack Verse Winner",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "First AI Project",
    description:
      "EZ Parkade - YOLOv8-based Vehicle Detection System reducing parking violations by 15%",
    icon: Brain,
  },
  {
    year: "2022",
    title: "Started B.Tech",
    description:
      "Enrolled in Computer Science Engineering at Lovely Professional University, Phagwara",
    icon: GraduationCap,
  },
];

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "Scikit-learn", level: 90 },
      { name: "YOLOv8", level: 85 },
      { name: "Keras", level: 90 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Flask", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Supabase", level: 80 },
    ],
  },
];

const values = [
  {
    icon: Code,
    title: "Problem Solving",
    description:
      "I thrive on solving complex algorithmic challenges and have solved 250+ LeetCode problems focusing on data structures and algorithms",
  },
  {
    icon: Brain,
    title: "Innovation in AI",
    description:
      "Passionate about pushing boundaries in AI/ML, from NLP language identification to computer vision and predictive analytics",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Development",
    description:
      "Experienced in building serverless applications with AWS Lambda, DynamoDB, and API Gateway for scalable solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Constantly upskilling through certifications, online courses, and hands-on projects in emerging technologies like Generative AI",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 relative">
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
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Swetank - </span>
              <span className="gradient-text">AI/ML Engineer</span>
              <span className="text-foreground"> & Data Scientist</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Computer Science Engineering Student | Hackathon Winner | Cloud Enthusiast
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="glass-panel rounded-2xl p-8 sticky top-24">
                {/* Profile Photo Placeholder */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-6xl font-bold gradient-text">S</span>
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-1">
                    Swetank
                  </h2>
                  <p className="text-muted-foreground text-sm mb-2">
                    CSE Student | AI/ML Specialist
                  </p>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    Phagwara, Punjab, India
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {quickStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-muted/50 rounded-xl p-3 text-center"
                    >
                      <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-lg font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.external ? "_blank" : undefined}
                      rel={info.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-muted-foreground">
                          {info.label}
                        </div>
                        <div className="text-sm text-foreground truncate group-hover:text-primary transition-colors">
                          {info.value}
                        </div>
                      </div>
                      {info.external && (
                        <ExternalLink
                          size={14}
                          className="text-muted-foreground group-hover:text-primary transition-colors"
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">
                Hello, I'm <span className="gradient-text">Swetank!</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science Engineering student at{" "}
                <span className="text-foreground font-medium">
                  Lovely Professional University, Phagwara
                </span>
                , specializing in Artificial Intelligence and Machine Learning.
                Currently in my final year (graduating April 2026), I'm passionate
                about building intelligent systems that solve real-world problems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My journey in tech began with a fascination for algorithms and has
                evolved into expertise in{" "}
                <span className="text-primary">AI/ML</span>,{" "}
                <span className="text-primary">data science</span>, and{" "}
                <span className="text-primary">cloud computing</span>. I've won
                multiple national-level hackathons including AIU International
                Anveshan and secured finalist position in Smart India Hackathon
                2024.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I specialize in developing end-to-end AI solutions - from training
                deep learning models with TensorFlow and Keras to deploying
                scalable applications using AWS serverless architecture. My recent
                projects include a{" "}
                <span className="text-foreground font-medium">
                  Hindi-English code-mix language identifier achieving 97.83%
                  accuracy
                </span>{" "}
                and an{" "}
                <span className="text-foreground font-medium">
                  electricity demand forecasting system for Delhi with 89-96%
                  accuracy
                </span>
                .
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Beyond academics, I'm an active problem-solver on LeetCode (250+
                problems solved) and constantly exploring emerging technologies
                like Generative AI, Large Language Models, and cloud-native
                development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 bg-secondary/5 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full filter blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-full md:w-1/2 lg:w-1/3 h-[300px] md:h-auto">
              <InteractiveGlobe />
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-8 mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-6 z-10">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-panel rounded-xl p-6 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={14} className="text-muted-foreground" />
                          <span className="text-sm text-primary font-medium">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Proficiency */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Technical <span className="gradient-text">Proficiency</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
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
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Interests */}
      <section className="py-16 bg-secondary/5 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Values & <span className="gradient-text">Interests</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-2xl p-6 group hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
