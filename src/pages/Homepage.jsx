import React from 'react';
import Home from '../compones/Home/Home';
import { motion } from 'framer-motion';

function Homepage(){
      return (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
               
            >       
                  <Home></Home>

            </motion.div>
            
      );
}

export default Homepage;
