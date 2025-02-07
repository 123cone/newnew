import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favs from "./components/Favs";
import Memories from "./components/Memories";
import Reasons from "./components/Reasons";
import Songs from "./components/Songs";
import Yes from "./components/Yes";
import NotFound from "./components/NotFound"; // Fallback for invalid routes

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const AnimatedRoute = ({ element }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{width: "100%" }}
  >
    {element}
  </motion.div>
);

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<AnimatedRoute element={<Home />} />} />
          <Route path="/home" element={<AnimatedRoute element={<Home />} />} />
          <Route path="/favs" element={<AnimatedRoute element={<Favs />} />} />
          <Route
            path="/memories"
            element={<AnimatedRoute element={<Memories />} />}
          />
          <Route
            path="/reasons"
            element={<AnimatedRoute element={<Reasons />} />}
          />
          <Route
            path="/songs"
            element={<AnimatedRoute element={<Songs />} />}
          />
          <Route path="/yes" element={<AnimatedRoute element={<Yes />} />} />
          <Route
            path="*"
            element={<AnimatedRoute element={<NotFound />} />}
          />{" "}
          {/* Handles invalid routes */}
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
