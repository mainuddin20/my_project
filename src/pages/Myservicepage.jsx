import React from 'react';
import Myservice from '../compones/Myservice/Myservice';
import { motion } from 'framer-motion';
function MyServicepage(){
      return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{color: "blue", fontSize:"30px", padding: "20px" }}
      >       
            <Myservice></Myservice>

      </motion.div>
      );
}

export default MyServicepage;