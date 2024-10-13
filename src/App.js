
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarhead from './compones/Navbarhead/Navbarhead.js';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import MyServicepage from './pages/Myservicepage';
import Protfoliopage from './pages/Protfoliopage';
import Contactpage from './pages/Contactpage';
import { motion, useScroll } from 'framer-motion'; // Corrected import

function App() {
  const { scrollYProgress } = useScroll(); // Corrected destructuring

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed", 
          top: 0,
          left: 0,
          right: 0,
          height: 3, 
          background: "#0ef",
          transformOrigin: "0%", 
          zIndex: 1000, 
        }}
        // Adding smooth transition
        transition={{
          duration: 0.2, // Duration of the transition (in seconds)
          ease: "easeOut", // Easing function for smooth effect
        }}
      />

      {/* Main Application */}
      <Router>
        <div>
          <Navbarhead />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Aboutpage" element={<Aboutpage />} />
            <Route path="/MyServicepage" element={<MyServicepage />} />
            <Route path="/Protfoliopage" element={<Protfoliopage />} />
            <Route path="/Contactpage" element={<Contactpage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;