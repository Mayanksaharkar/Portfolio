import { motion } from "framer-motion";

function PageContainer({ children }) {
  const transition = { duration: 0.5, ease: "easeOut" };

  const containerVariants = {
    initial: {
      opacity: 0,
      translateX: 100,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition,
    },
  };
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial='initial'
        animate='animate'
      >
        {children}
      </motion.div>
    </>
  );
}

export default PageContainer;
