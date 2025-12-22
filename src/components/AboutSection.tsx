import { motion } from "framer-motion";
import { Brain, Code, Cloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const expertiseCards = [
  {
    icon: Brain,
    title: "AI/ML Specialist",
    description:
      "Expertise in LSTM, BERT, YOLOv8, and TensorFlow. Building intelligent systems for NLP, computer vision, and predictive analytics.",
  },
  {
    icon: Code,
    title: "Data Scientist",
    description:
      "Proficient in Python, TensorFlow, Pandas, and scikit-learn. Building intelligent data-driven solutions with modern ML pipelines.",
  },
  {
    icon: Cloud,
    title: "AWS Certified",
    description:
      "Experience with serverless architectures, EC2, S3, Lambda, and cloud-native application deployment.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/30 relative">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Building <span className="gradient-text">Intelligent Solutions</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a Computer Science Engineering student at{" "}
              <span className="text-foreground font-medium">Lovely Professional University</span>,
              I specialize in developing AI-powered solutions and data science applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My expertise spans from building{" "}
              <span className="text-primary">advanced NLP systems</span> achieving 97%+ accuracy
              to creating cloud-native applications with serverless architectures. I've been
              recognized at national level hackathons including{" "}
              <span className="text-primary">Smart India Hackathon</span> and{" "}
              <span className="text-primary">AIU International Anveshan</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me solving algorithmic challenges on LeetCode
              (250+ problems solved) or exploring the latest developments in generative AI
              and large language models.
            </p>
          </motion.div>

          {/* Right - Abstract Tech Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Abstract circles */}
              <div className="absolute inset-0 rounded-full border border-border animate-pulse-subtle" />
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-16 rounded-full border border-primary/30" />
              <div className="absolute inset-24 rounded-full bg-primary/5 flex items-center justify-center">
                <Brain className="w-16 h-16 text-primary animate-pulse-subtle" />
              </div>
              {/* Floating dots */}
              <div className="absolute top-1/4 left-0 w-3 h-3 rounded-full bg-primary animate-float" />
              <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-secondary animate-float animation-delay-2000" />
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-accent animate-float animation-delay-4000" />
            </div>
          </motion.div>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-card border border-border rounded-xl p-6 group hover:border-primary/30 hover:shadow-lg hover:shadow-black/20 transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
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
          <Link to="/about">
            <motion.span
              className="btn-primary cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Me
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;