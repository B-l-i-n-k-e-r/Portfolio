import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          variants={fadeIn("up", "spring", index * 0.15, 0.75)}
          className="flex flex-col items-center"
        >
          {/* 3D Ball Icon */}
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>

          {/* Tech Label */}
          <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
            {technology.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
