import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "var(--card-bg)",
        color: "var(--card-text)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        borderRadius: "15px",
        border: "1px solid var(--card-border)",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
      contentArrowStyle={{
        borderRight: "18px solid var(--card-border)",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 20px rgba(0,0,0,0.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-gray-900 dark:text-orange-700 text-[22px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-blue-700 dark:text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-green-900 dark:text-gray-400 text-[15px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  // Define light/dark theme variables
  React.useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains("dark");

    root.style.setProperty("--card-bg", dark ? "#1d1836" : "#6c9fa8af");
    root.style.setProperty("--card-border", dark ? "#23ff31" : "#23a6fdd3");
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-black dark:text-gray-300`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center  text-purple-900 dark:text-purple-300`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
