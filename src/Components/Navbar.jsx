import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUtensils, FaBars, FaTimes } from "react-icons/fa";
import { useStateContext } from "../Context/States";

export default function Navbar() {
  const [open, setOpen] = useState(false);
const {heroRef,menuRef,aboutRef,galleryRef,contactRef,testimonialsRef}=useStateContext()
  const links = [
    { name: "Home", ref:heroRef},
    { name: "Menu", ref:menuRef},
    { name: "About",ref:aboutRef},
    { name: "Gallery",ref:galleryRef },
    { name: "Contact",ref:contactRef },
    { name: "Testimonials",ref:testimonialsRef },
  ];

 const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
    console.log("adsf")
    if(open){
      setOpen(false)
    }
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50">
   
      {/* Background */}
      <div className="bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-orange-400 text-2xl"
            >
              <FaUtensils />
            </motion.div>

            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-lg tracking-wide">
                Rajan Food Corner
              </span>
              <span className="text-xs tracking-[0.25em] text-orange-300 uppercase">
                Taste That Speaks
              </span>
            </div>
          </motion.div>
<ul>
          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            {links.map((link, i) => (
              <motion.li
                key={i}
                onClick={()=>{
                  scrollToSection(link.ref)
                }}
              
                whileHover={{ y: -2 }}
                className="relative group transition cursor-pointer"
              >
                <span className="group-hover:text-orange-400 transition">
                  {link.name}
                </span>

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
          </nav></ul>

          {/* CTA BUTTON */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-black px-5 py-2 rounded-full font-semibold shadow-lg"
          >
            Order Now
          </motion.a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

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
            className="md:hidden bg-black/95 backdrop-blur-xl overflow-hidden border-b border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-gray-300">

              {links.map((link, i) => (
                <motion.a
                  key={i}
                
                  whileHover={{ scale: 1.1 }}
                   onClick={()=>{
                  scrollToSection(link.ref)
                }}
                  className="hover:text-orange-400 transition"
                >
                  {link.name}
                </motion.a>
              ))}
              

              <motion.a
                href="#contact"
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(false)}
                className="bg-orange-500 text-black px-6 py-2 rounded-full font-semibold"
              >
                Order Now
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}