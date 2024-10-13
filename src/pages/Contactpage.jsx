import React from 'react';
import Contact from '../compones/Contact/Contact';
import { motion } from 'framer-motion';
function Contactpage(){
      return (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  style={{color: "blue", fontSize:"30px", padding: "20px" }}
            >       
                  <Contact></Contact>

            </motion.div>
      );
}

export default Contactpage;