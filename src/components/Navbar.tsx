import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
];

interface MagneticNavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
  // We pass a ref callback or similar to parent if we want to track position for the slider, 
  // but simpler: use a data attribute or ID on the link and let the parent find it.
}

const MagneticNavLink = ({ href, children, isActive, onClick }: MagneticNavLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const link = linkRef.current;
    if (!link) return;

    const rect = link.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.3; // Max pull factor
    const deltaY = (e.clientY - centerY) * 0.3;

    gsap.to(link, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!linkRef.current) return;
    gsap.to(linkRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  return (
    <a
      ref={linkRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 z-10 block ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        } nav-link item-${href.replace("/#", "")}`} // Add specific class for GSAP targeting
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navListRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.replace("/#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset for header height
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Sliding Indicator Logic
  useLayoutEffect(() => {
    if (!navListRef.current || !indicatorRef.current) return;

    const activeLink = navListRef.current.querySelector(`.item-${activeSection}`);

    if (activeLink) {
      const parentRect = navListRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      // Calculate relative position within the list
      const left = linkRect.left - parentRect.left;
      const width = linkRect.width;

      gsap.to(indicatorRef.current, {
        x: left,
        width: width,
        opacity: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.7)",
      });
    } else {
      // If no active link (e.g. top of page), maybe hide or default? 
      // usually 'home' is active.
    }
  }, [activeSection]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-white/5 py-3 shadow-lg shadow-primary/5"
          : "py-5 bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/#home"
          className="relative group z-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
            SWETANK
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </motion.a>

        {/* Desktop Navigation - Magnetic & Animated */}
        <div className="hidden lg:flex items-center bg-secondary/30 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/5 shadow-inner">
          <ul ref={navListRef} className="flex items-center relative">

            {/* Sliding Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute top-0 bottom-0 bg-primary rounded-full z-0 shadow-[0_0_20px_-5px_rgba(14,165,233,0.6)]"
              style={{ height: '100%', opacity: 0 }} // Height handled by parent padding typically, closely matching links
            />

            {navLinks.map((link) => (
              <li key={link.href} className="relative z-10">
                <MagneticNavLink
                  href={link.href}
                  isActive={activeSection === link.href.replace("/#", "")}
                >
                  {link.label}
                </MagneticNavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-green-400">Open to Work</span>
          </motion.div>

          <motion.a
            href="/#contact"
            className="px-6 py-2.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all shadow-[0_0_20px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.4)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-0 left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden flex flex-col pt-24 px-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className={`block text-2xl font-medium tracking-tight ${activeSection === link.href.replace("/#", "")
                        ? "text-primary ml-4"
                        : "text-muted-foreground hover:text-foreground hover:ml-2"
                      } transition-all duration-300`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-col gap-6"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/30 border border-white/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-400">Available for new projects</span>
              </div>

              <a
                href="#contact"
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-center text-lg shadow-lg shadow-primary/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;