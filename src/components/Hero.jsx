import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto flex flex-col justify-center px-6 sm:px-16 text-center sm:text-left overflow-hidden 
      bg-hero-pattern bg-cover bg-center bg-no-repeat 
      bg-[rgba(31,100,221,0.95)] dark:bg-primary 
      transition-colors duration-500"
    >
      {/* 🧩 Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Gradient line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#b1fc02]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* ✨ Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1
            className={`${styles.heroHeadText} text-blue-950 dark:text-white drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)]`}
          >
            Hi, I'm <span className="text-[#9465fa]">Mariba Vincent</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className={`${styles.heroSubText} mt-2 text-orange-500 dark:text-green-300`}
          >
            * I design and develop modern web solutions while also focusing on
            cybersecurity.
            <br className="sm:block hidden" />
            * I help businesses and individuals build powerful, secure web
            applications from frontend interfaces to backend architecture.
          </motion.p>
        </motion.div>
      </div>

      {/* 🖥️ 3D Canvas */}
      <ComputersCanvas />

      {/* 🔽 Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="group">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-10 h-10 flex justify-center items-center border-2 border-secondary rounded-full text-secondary text-2xl group-hover:translate-y-1 transition-transform duration-300">
              <BsArrowDownShort />
            </div>
            <p className="text-sm text-blue-400 dark:text-gray-300 hover:text-red-500 mt-1 opacity-70">
              Intrested??...See more
            </p>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
