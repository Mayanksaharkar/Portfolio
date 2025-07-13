import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";

// Optimized animation variants
const containerVariants = {
  hidden: {
    opacity: 0,
    x: 50, // Reduced distance for smoother animation
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3, // Faster animation
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const PageContainer = memo(function PageContainer({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== "undefined" ? window.location.pathname : "page"}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        style={{ 
          willChange: "opacity, transform",
          backfaceVisibility: "hidden", // Prevent flickering
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
});

export default PageContainer;
