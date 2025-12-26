import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Wrench,
  Database,
  Cloud,
  Brain,
  MessageSquare,
  Eye,
  Users,
  Zap,
  Lightbulb,
  RefreshCw,
  MessageCircle,
  GitBranch,
  Github,
  Monitor,
  Server,
  Container,
  FileCode,
  Cpu,
  BarChart3,
  Boxes,
  Target,
} from "lucide-react";
import Layout from "@/components/Layout";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  proficiency: number;
  level: string;
  useCases: string;
  experience: string;
  details?: string[];
  index: number;
}

const SkillCard = ({
  icon: Icon,
  name,
  proficiency,
  level,
  useCases,
  experience,
  details,
  index,
}: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="glass-panel rounded-2xl p-6 group hover:border-primary/30 transition-all"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${level === "Advanced"
                ? "bg-primary/20 text-primary"
                : "bg-secondary/20 text-secondary"
              }`}
          >
            {level}
          </span>
          <span className="text-xs text-muted-foreground">{experience}</span>
        </div>
      </div>
    </div>

    <p className="text-sm text-muted-foreground mb-4">{useCases}</p>

    {details && (
      <div className="flex flex-wrap gap-1.5 mb-4">
        {details.map((detail) => (
          <span
            key={detail}
            className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground"
          >
            {detail}
          </span>
        ))}
      </div>
    )}

    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-muted-foreground">Proficiency</span>
        <span className="text-primary font-medium">{proficiency}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  </motion.div>
);

const overviewStats = [
  { icon: Code, value: "4+", label: "Programming Languages" },
  { icon: Layers, value: "15+", label: "Frameworks & Libraries" },
  { icon: Wrench, value: "10+", label: "Tools & Platforms" },
];

const programmingLanguages = [
  {
    icon: Code,
    name: "Python",
    proficiency: 95,
    level: "Advanced",
    useCases: "AI/ML, Data Science, Backend Development",
    experience: "3+ years",
    details: ["TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
  },
  {
    icon: FileCode,
    name: "JavaScript",
    proficiency: 85,
    level: "Intermediate",
    useCases: "Data Visualization, Frontend Development",
    experience: "2+ years",
    details: ["React.js", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: Code,
    name: "Java",
    proficiency: 80,
    level: "Intermediate",
    useCases: "Backend Development, DSA",
    experience: "2+ years",
    details: ["OOP", "Algorithmic Problem-Solving", "Data Structures"],
  },
  {
    icon: Database,
    name: "SQL",
    proficiency: 85,
    level: "Advanced",
    useCases: "Database Management, Data Analysis",
    experience: "2+ years",
    details: ["MySQL", "MongoDB", "Complex Queries", "Optimization"],
  },
];

const frameworks = [
  { icon: Monitor, name: "React.js", proficiency: 85, description: "Component-based UI development" },
  { icon: Monitor, name: "Next.js", proficiency: 80, description: "Server-side rendering, API routes" },
  { icon: Cpu, name: "TensorFlow", proficiency: 90, description: "Neural networks, model training" },
  { icon: Brain, name: "Scikit-learn", proficiency: 90, description: "Classical ML algorithms" },
  { icon: Eye, name: "YOLOv8", proficiency: 85, description: "Object detection, real-time inference" },
  { icon: Layers, name: "Tailwind CSS", proficiency: 90, description: "Utility-first styling" },
  { icon: BarChart3, name: "Pandas & NumPy", proficiency: 90, description: "Data manipulation, numerical computing" },
  { icon: Server, name: "Flask", proficiency: 80, description: "RESTful APIs, microservices" },
  { icon: Cpu, name: "Keras", proficiency: 90, description: "High-level neural networks" },
];

const databases = [
  { icon: Database, name: "MongoDB", proficiency: 85, description: "Document-based storage, scalability" },
  { icon: Database, name: "MySQL", proficiency: 85, description: "RDBMS, complex queries" },
  { icon: Database, name: "Supabase", proficiency: 80, description: "Real-time databases, authentication" },
  { icon: Cloud, name: "AWS", proficiency: 80, description: "EC2, S3, Lambda, DynamoDB, API Gateway, CloudFront" },
  { icon: Container, name: "Docker", proficiency: 75, description: "Container deployment, microservices" },
];

const tools = [
  { icon: GitBranch, name: "Git", proficiency: 90, description: "Branch management, collaboration" },
  { icon: Github, name: "GitHub", proficiency: 90, description: "Repository management, CI/CD" },
  { icon: Code, name: "VS Code", proficiency: 95, description: "Primary development environment" },
  { icon: Eye, name: "Roboflow", proficiency: 80, description: "Dataset management, model training" },
  { icon: BarChart3, name: "Google Sheets", proficiency: 85, description: "Data tracking, API integration" },
  { icon: Server, name: "Postman", proficiency: 80, description: "API development and testing" },
];

const domainExpertise = [
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    skills: ["LSTM", "BERT", "CRF", "SVM", "Random Forest", "XGBoost", "YOLOv8", "CNN", "RNN"],
    projects: "3 major AI projects",
    level: "Advanced",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    skills: ["Language Identification", "Text Preprocessing", "TF-IDF", "Tokenization", "Hugging Face"],
    projects: "Hindi-English code-mix classifier",
    level: "Intermediate-Advanced",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    skills: ["Object Detection", "YOLOv8", "Image Preprocessing", "Roboflow"],
    projects: "EZ Parkade vehicle detection",
    level: "Intermediate",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Serverless Architecture", "AWS Services", "Docker", "CI/CD"],
    projects: "AWS serverless applications",
    level: "Intermediate",
  },
];

const softSkills = [
  { icon: Users, title: "Leadership", description: "Led team projects and hackathon teams to victory" },
  { icon: Zap, title: "Agile Workflow", description: "Experienced in agile development and sprint methodologies" },
  { icon: Lightbulb, title: "Problem-Solving", description: "250+ algorithmic problems solved on LeetCode" },
  { icon: RefreshCw, title: "Adaptability", description: "Quick to learn new technologies and frameworks" },
  { icon: MessageCircle, title: "Communication", description: "Clear technical documentation and team collaboration" },
];

const learningRoadmap = [
  { icon: Boxes, name: "Kubernetes", description: "Container orchestration at scale" },
  { icon: Server, name: "GraphQL", description: "Modern API query language" },
  { icon: Brain, name: "Advanced LLM Fine-tuning", description: "Custom model training and optimization" },
  { icon: Target, name: "Blockchain Development", description: "Decentralized application development" },
];

const Skills = () => {
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
              Technical Skills
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Technology Stack & </span>
              <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Languages, Frameworks, Tools, and Technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {overviewStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <Code className="w-7 h-7 text-primary" />
              Programming <span className="gradient-text">Languages</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {programmingLanguages.map((lang, index) => (
              <SkillCard key={lang.name} {...lang} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & Libraries */}
      <section className="py-16 bg-secondary/5 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <Layers className="w-7 h-7 text-primary" />
              Frameworks & <span className="gradient-text">Libraries</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworks.map((fw, index) => (
              <motion.div
                key={fw.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="glass-panel rounded-xl p-5 group hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <fw.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {fw.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {fw.proficiency}% proficiency
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {fw.description}
                </p>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${fw.proficiency}%` }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Databases & Cloud */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <Database className="w-6 h-6 text-primary" />
              <Cloud className="w-6 h-6 text-primary" />
              Databases & <span className="gradient-text">Cloud Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {databases.map((db, index) => (
              <motion.div
                key={db.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="glass-panel rounded-xl p-5 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <db.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {db.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {db.description}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${db.proficiency}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-primary font-medium">
                    {db.proficiency}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-16 bg-secondary/5 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <Wrench className="w-7 h-7 text-primary" />
              Tools & <span className="gradient-text">Platforms</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="glass-panel rounded-xl p-5 group hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {tool.proficiency}% proficiency
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Domain <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domainExpertise.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-2xl p-6 group hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <domain.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {domain.title}
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {domain.skills.slice(0, 5).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {domain.skills.length > 5 && (
                    <span className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">
                      +{domain.skills.length - 5}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  {domain.projects}
                </p>
                <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-xs text-primary font-medium">
                  {domain.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
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
              Professional <span className="gradient-text">Competencies</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-xl p-5 text-center group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Currently Learning & <span className="gradient-text">Future Goals</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {learningRoadmap.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel rounded-xl p-6 text-center group hover:border-primary/30 transition-all relative overflow-hidden"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-secondary/20 text-xs text-secondary font-medium">
                    Learning
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
