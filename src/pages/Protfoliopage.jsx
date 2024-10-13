import React from 'react';
import Protfolio from '../compones/Protfolio/Protfolio';
import { motion } from 'framer-motion';
function Protfoliopage(){
      return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{color: "blue", fontSize:"30px", padding: "20px" }}
      >       
            <Protfolio></Protfolio>

      </motion.div>
      );
}

export default Protfoliopage;