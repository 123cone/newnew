import React from "react";
import { motion } from "framer-motion";
import "../styling/memories.css"; // Create this CSS file for styling

const images = Array.from({ length: 15 }, (_, i) => `/silly/${i + 1}.jpeg`);

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

const Memories = () => {
  return (
    <motion.div
      className="memories-container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="title">Snapshots of Joy</h1>
      <div className="polaroid-grid">
        {images.map((img, index) => (
          <div className="polaroid" key={index}>
            <img
              src={img}
              alt={`Memory ${index + 1}`}
              className="polaroid-img"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Memories;
