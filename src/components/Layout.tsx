import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CosmicBackground from "./three/CosmicBackground";
import FloatingElements from "./FloatingElements";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <CosmicBackground />
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Main Content with Page Transitions */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
