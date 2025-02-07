import React from "react";
import { motion } from "framer-motion";
import "../styling/reasons.css";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

const Reasons = () => {
  const reasons = [
    "A million feelings, all for one person—that’s you.",

    "You have a kindness that radiates and makes the world around you better.",

    "You put so much care into the people around you. It's incredible to see how much love you give to everyone.",

    "With you, the world stops, and I always have a minute to breathe.",

    "When I’m in your arms, everything seems possible, like i could conquer the world.",

    "You make me want to be a kinder, more patient, and better person every day.",

    "You’ve shown me love—not just in the big, grand gestures, but in the small, meaningful moments we share.",

    "Whether it's a sweet text, holding my hand, or just a smile, you make me feel like a little girl smiling with joy.",
  ];

  return (
     <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <h1 className="reasons-title">Reasons I Adore You</h1>
      <div className="reasons-container">
        <ul className="reasons-list">
          {reasons.map((reason, index) => (
            <li key={index} className="reason-item">
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Reasons;
