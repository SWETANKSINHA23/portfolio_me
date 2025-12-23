import { motion } from "framer-motion";
import { Rocket, FileText, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full filter blur-3xl" />

            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 mb-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="w-10 h-10 text-primary" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4 relative z-10 tracking-tight"
            >
              Let's Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative z-10"
            >
              I'm actively seeking opportunities in AI/ML, Full Stack Development,
              and Cloud Computing. Open to internships, full-time roles, and
              collaborative projects.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
            >
              <motion.a
                href="https://drive.google.com/file/d/1m331RJafHMtObYHZRPZY2vpAgaHb7QAc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                View Resume
              </motion.a>
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.span
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-medium cursor-pointer transition-colors hover:bg-secondary/90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail size={20} />
                  Contact Me
                </motion.span>
              </Link>
            </motion.div>

            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground relative z-10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              Available for immediate start
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;