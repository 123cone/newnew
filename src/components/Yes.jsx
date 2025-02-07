import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styling/yes.css";
import YesGif from "../assets/yes.gif";
import NoGif from "../assets/nofinal.gif";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

// Animation for the Yes GIF & response
const yesVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animation for the No GIF & text
const noVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Yes = () => {
  const [response, setResponse] = useState("");
  const [showGif, setShowGif] = useState(false);
  const [showNoGif, setShowNoGif] = useState(false);
  const [showNoText, setShowNoText] = useState(false);

  const handleYesClick = () => {
    setResponse("I knew itttt 💖");
    setShowGif(true);
    setShowNoGif(false);
    setShowNoText(false);
  };

  const handleNoClick = () => {
    setResponse("");
    setShowGif(false);
    setShowNoGif(true);
    setShowNoText(true);
  };

  return (
    <motion.div
      className="yes"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="question">
        <h1>Will you be my Valentine, honey?</h1>
        <p>(Say yes please) 🦋 </p>
      </div>

      {/* Yes/No buttons with click animations */}
      <div className="cta-buttons">
        <motion.button
          className="yes-button"
          onClick={handleYesClick}
          whileTap={{ scale: 0.9 }}
        >
          Yes! 🩷
        </motion.button>
        <motion.button
          className="no-button"
          onClick={handleNoClick}
          whileTap={{ scale: 0.9 }}
        >
          No 💔
        </motion.button>
      </div>

      {/* Smooth response animation when clicking Yes */}
      {response && (
        <motion.div
          variants={yesVariants}
          initial="hidden"
          animate="visible"
          className="response"
        >
          {response}
        </motion.div>
      )}

      {/* Yes GIF Animation */}
      {showGif && (
        <motion.img
          src={YesGif}
          alt="Yes!"
          className="yes-gif"
          variants={yesVariants}
          initial="hidden"
          animate="visible"
        />
      )}

      {/* No text with animation */}
      {showNoText && (
        <motion.div
          variants={noVariants}
          initial="hidden"
          animate="visible"
          className="no-text"
        >
          <p className="no-skeleton">Do you not love me honey? 😭</p>
        </motion.div>
      )}

      {/* No GIF Animation */}
      {showNoGif && (
        <motion.img
          src={NoGif}
          alt="No!"
          className="no-gif"
          variants={noVariants}
          initial="hidden"
          animate="visible"
        />
      )}
    </motion.div>
  );
};

export default Yes;
