import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";


const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="p-10 rounded-3xl xs:w-[320px] w-full transition-all duration-300 shadow-lg border border-blue-900 bg-blue/90 hover:shadow-[0_0_35px_var(--card-border)]"
  >

    <div className="mt-1">
      <p className="tracking-wider text-[20px] text-yellow-900 dark:text-blue-500">"
        {testimonial}"
    </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="font-medium text-[22px] text-indigo-700 dark:text-green-400">
            <span className="text-pink-800 dark:text-green-700">@</span> {name}
          </p>
          <p className="mt-1 text-orange-900 dark:text-orange-500 text-[14px]">
            {designation} of {company}
          </p>
        </div>
 
        <img
            src={image}
            alt={name}
          className="w-20 h-20 rounded-full object-cover border border-[var(--card-border)]"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  // Define theme-aware variables
  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains("dark");

    root.style.setProperty("--card-bg", dark ? "#1d1836" : "#");
    root.style.setProperty("--card-text", dark ? "#" : "#");
    //root.style.setProperty("--subtext-color", dark ? "#9ca3af" : "#");
    root.style.setProperty("--card-border", dark ? "#383b5c" : "#109fff");
    //root.style.setProperty("--accent-color", dark ? "#60a5fa" : "#2563eb");
  });

  return (
    <div className="mt-12 rounded-[20px] bg-[var(--section-bg)] transition-all duration-500">
      <div
        className={`rounded-2xl ${styles.padding} min-h-[300px] bg-[var(--section-inner-bg)]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-gray-950 dark:text-gray-400`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-purple-900 dark:text-purple-300`}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testimonials");
