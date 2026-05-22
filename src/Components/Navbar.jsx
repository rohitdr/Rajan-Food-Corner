import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUtensils,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useStateContext } from "../Context/States";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const {
    heroRef,
    menuRef,
    aboutRef,
    galleryRef,
    contactRef,
    testimonialsRef,
    darkMode,
    setDarkMode,
  } = useStateContext();

  const links = [
    { name: "Home", ref: heroRef },
    { name: "Menu", ref: menuRef },
    // { name: "Gallery", ref: galleryRef },
    { name: "Testimonials", ref: testimonialsRef },
    { name: "About", ref: aboutRef },
    { name: "Contact", ref: contactRef },
  ];

  const scrollToSection = (ref) => {
    if (open) {
        setOpen(false);
   
    }
    setTimeout(() => {
        ref.current?.scrollIntoView({
      behavior: "smooth",
    });
    }, 100);
  

  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* NAVBAR */}
      <div
        className={`backdrop-blur-xl border-b transition-all duration-500 ${
          darkMode
            ? "bg-black/70 border-white/10"
            : "bg-white/70 border-black/10"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

       {/* LOGO */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.4 }}
  className="flex items-center gap-3 cursor-pointer"
>
  {/* Logo container */}
  <motion.div
    whileHover={{ rotate: 8, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center"
  >
    <img
      src="/logo.png"
      alt="Rajan Food Corner"
      className="w-full h-full object-contain"
    />
  </motion.div>

  {/* Text */}
  <div className="flex flex-col leading-tight">
    <span
      className={`font-bold text-base md:text-lg tracking-wide ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      Rajan Food Corner
    </span>

    <span className="text-[10px] md:text-xs tracking-[0.25em] text-orange-400 uppercase">
      Taste That Speaks
    </span>
  </div>
</motion.div>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-10 text-sm">
            {links.map((link, i) => (
              <motion.li
                key={i}
                onClick={() => scrollToSection(link.ref)}
                whileHover={{ y: -2 }}
                className={`relative group transition cursor-pointer ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >
                <span className="group-hover:text-orange-400 transition">
                  {link.name}
                </span>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* THEME TOGGLE */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`hidden md:flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 ${
                darkMode
                  ? "bg-white/10 border-white/20 text-white"
                  : "bg-black/10 border-black/20 text-black"
              }`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className={`md:hidden text-xl ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden backdrop-blur-xl border-b ${
              darkMode
                ? "bg-black/95 border-white/10"
                : "bg-white/95 border-black/10"
            }`}
          >
            <div className="flex flex-col items-center gap-6 py-8">

              {links.map((link, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => scrollToSection(link.ref)}
                  className={`transition ${
                    darkMode
                      ? "text-gray-300 hover:text-orange-400"
                      : "text-gray-700 hover:text-orange-400"
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              {/* MOBILE THEME BUTTON */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${
                  darkMode
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-black/10 border-black/20 text-black"
                }`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                Theme
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}