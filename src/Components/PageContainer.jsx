import { motion, AnimatePresence } from "framer-motion";

// Move outside to avoid re-creation
const containerVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5, // shorter = snappier
      ease: [0.25, 0.1, 0.25, 1], // smoother easing (equivalent to ease-in-out)
    },
  },
};

function PageContainer({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== "undefined" ? window.location.pathname : "page"}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        style={{ willChange: "opacity, transform" }} // hint browser for GPU acceleration
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default PageContainer;
