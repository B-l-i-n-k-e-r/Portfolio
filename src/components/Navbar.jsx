import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const ThemeToggle = ({ className = "" }) => {
  const [darkMode, setDarkMode] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`bg-blue-200 dark:bg-gray-800 hover:bg-blue-400 p-2 rounded-full text-xl shadow-md hover:scale-105 transition-all duration-300 ${className}`}
      title="Toggle theme"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // detect current section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-blue/70 dark:bg-primary/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-green-800 hover:text-green-300 dark:text-white text-[30px] font-bold cursor-pointer flex">
            Mariba&nbsp;<span className="sm:block hidden">| VMM</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex flex-row gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <button
                  onClick={() => scrollToSection(nav.id)}
                  className={`px-5 py-2 rounded-xl font-bold text-[18px] transition-all duration-500 ${
                    active === nav.id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                      : "bg-blue-100 dark:bg-gray-800 text-blue-800 dark:text-gray-200 hover:bg-blue-400 hover:text-white"
                  }`}
                >
                  {nav.title}
                </button>
              </li>
            ))}
          </ul>
          <ThemeToggle className="ml-4" />
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center relative z-[10000]">
          <ThemeToggle className="mr-3" />
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 rounded-xl absolute top-20 right-4 min-w-[200px] flex-col gap-4 backdrop-blur-md bg-white/90 dark:bg-primary/90 shadow-lg`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <button
                    onClick={() => {
                      scrollToSection(nav.id);
                      setToggle(false);
                    }}
                    className={`px-4 py-2 rounded-xl text-[16px] font-medium transition-all duration-300 ${
                      active === nav.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50"
                        : "bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-gray-300 hover:bg-blue-400 hover:text-white"
                    }`}
                  >
                    {nav.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
