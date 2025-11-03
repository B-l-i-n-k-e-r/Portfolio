import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const MyButton = ({ label = "Demo", onClick }) => {
  return (
    <div className="inset-0 flex justify-end relative">
      <Tilt
        options={{ max: 25, speed: 400, scale: 1.05 }}
        className="Tilt"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="
            bg-indigo-500 dark:bg-indigo-600 
            hover:bg-green-600 dark:hover:bg-green-400
            text-white py-2 px-5 rounded-full font-bold 
            shadow-lg shadow-blue-300/50 dark:shadow-indigo-900/50
            transition-all duration-300 ease-in-out
          "
        >
          <span className="tracking-wide">{label}</span>
        </motion.button>
      </Tilt>
    </div>
  );
};

export default MyButton;
