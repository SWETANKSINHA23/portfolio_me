import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/SWETANKSINHA23",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/swetank23",
    label: "LinkedIn",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 border-t border-border">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary text-glow-cyan">
                SWETANK
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Data Scientist & AI/ML enthusiast passionate about building
              innovative solutions. Currently exploring the intersection of
              data science and artificial intelligence.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg glass-panel text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:swetank23may@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group"
                >
                  <span className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail size={16} />
                  </span>
                  swetank23may@gmail.com
                </a>
              </li>

              <li className="pt-2">
                <a
                  href="https://github.com/SWETANKSINHA23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  github.com/SWETANKSINHA23
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/swetank23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={16} />
                  linkedin.com/in/swetank23
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap justify-center">
              © {currentYear} Swetank.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Designed & Developed by Swetank Sinha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
