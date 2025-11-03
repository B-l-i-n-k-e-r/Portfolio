import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import MyButton from "../components/MyButton";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-blue/950 dark:bg-blue-950 p-5 rounded-2xl shadow-lg dark:shadow-card transition-all duration-500 hover:shadow-2xl"
      >
        {/* Project Image */}
        <div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />

          {/* GitHub Icon Overlay */}
          <div className="absolute inset-0 flex justify-end items-start p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-purple-500 dark:bg-green-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
            >
              <img
                src={github}
                alt="source code"
                className="w-5 h-5 object-contain invert dark:invert-0"
              />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-5">
          <h3 className="text-purple-950 dark:text-orange-600 font-bold text-[22px]">
            {name}
          </h3>
          <p className="mt-2 text-blue-900 dark:text-secondary text-[16px]">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] font-medium ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Demo Button */}
        <div onClick={() => window.open(demo_link, "_blank")} className="mt-5">
          <MyButton>Demo</MyButton>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black dark:text-gray-300`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-purple-900 dark:text-purple-300`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-green-950 dark:text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          * These are the works I have done on my journey as a developer — combining design,
          performance, and functionality. Each one demonstrates problem-solving,
          code quality, and creativity with real-world use cases.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
