import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html as="div" center>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center"
      >
        {/* Cool glowing ring loader */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin border-[var(--accent-color)]"></div>
          <div className="absolute inset-2 rounded-full bg-[var(--loader-bg)]"></div>
        </div>

        <p
          className="mt-6 font-bold text-[15px]"
          style={{
            color: "var(--loader-text)",
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </motion.div>
    </Html>
  );
};

export default CanvasLoader;
