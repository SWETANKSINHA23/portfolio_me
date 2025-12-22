import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  level: string;
  description: string;
  index: number;
}

const TechCard = ({ icon: Icon, name, level, description, index }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.05, ease: "easeOut" }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="bg-card border border-border rounded-lg p-4 group cursor-pointer hover:border-primary/30 hover:shadow-lg hover:shadow-black/20 transition-all duration-200"
    >
      {/* Icon */}
      <div className="relative mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Tech Name */}
      <h3 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
        {name}
      </h3>

      {/* Level Badge */}
      <span
        className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-1 ${
          level === "Advanced"
            ? "bg-primary/10 text-primary"
            : "bg-secondary/10 text-secondary"
        }`}
      >
        {level}
      </span>

      {/* Description */}
      <p className="text-xs text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default TechCard;