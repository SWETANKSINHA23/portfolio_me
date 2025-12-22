import { motion } from "framer-motion";
import {
  Database,
  Brain,
  Cloud,
  Code,
  Terminal,
  GitBranch,
  Cpu,
  Server,
  Layers,
  Sparkles,
} from "lucide-react";

const floatingIcons = [
  { Icon: Database, delay: 0, x: "10%", y: "20%" },
  { Icon: Brain, delay: 1, x: "85%", y: "15%" },
  { Icon: Cloud, delay: 2, x: "75%", y: "70%" },
  { Icon: Code, delay: 0.5, x: "15%", y: "75%" },
  { Icon: Terminal, delay: 1.5, x: "90%", y: "45%" },
  { Icon: GitBranch, delay: 2.5, x: "5%", y: "50%" },
  { Icon: Cpu, delay: 3, x: "50%", y: "85%" },
  { Icon: Server, delay: 0.8, x: "70%", y: "25%" },
  { Icon: Layers, delay: 1.8, x: "25%", y: "40%" },
  { Icon: Sparkles, delay: 2.2, x: "60%", y: "55%" },
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: {
              duration: 4,
              repeat: Infinity,
              delay: delay,
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            },
            scale: {
              duration: 0.5,
              delay: delay,
            },
          }}
        >
          <Icon
            className="text-primary"
            size={48}
            strokeWidth={1}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
