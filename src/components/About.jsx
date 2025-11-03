import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card bg-gradient-to-r from-green-600 via-blue-600 to-red-600"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#16ccecaf] dark:bg-tertiary rounded-[35px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-purple-950 dark:text-yellow-600 text-[22px] font-bold text-center mt-4">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black dark:text-gray-300`}>
          Who is Mariba?
        </p>
        <h2 className={`${styles.sectionHeadText} text-purple-900 dark:text-purple-300`}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-green-950 dark:text-gray-300 text-[17px] max-w-3xl leading-[30px]"
      >
        * I specialize in JavaScript (React, Node.js) for web development, Python
        for automation and security tools, and SQL for database design. I also
        work with HTML, CSS, and PHP, and I’m experienced with penetration
        testing. My focus is building secure, scalable software that performs
        well and protects user data!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
