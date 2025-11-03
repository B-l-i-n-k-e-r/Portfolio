import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <BrowserRouter>
      {/* Global wrapper for color mode */}
      <div className="min-h-screen bg-[#05e2ff8a] dark:bg-[#06002b69] text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Floating Theme Toggle */}
        <ThemeToggle />

        {/* Hero section with background image */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Other sections */}
        <div className="relative z-0">
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
