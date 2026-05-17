import { motion } from "framer-motion";
import { FaLeaf, FaUtensils, FaStar } from "react-icons/fa";
import { useStateContext } from "../Context/States";

export default function About() {
   const {aboutRef}=useStateContext()
  return (
    <section className="w-full bg-black text-white py-20 px-6" ref={aboutRef}>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-orange-400">Rajan Food Corner</span>
        </h1>
        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Authentic Indo-Chinese flavors crafted with passion ❤️
        </p>
      </motion.div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200"
            alt="restaurant chef"
            className="rounded-2xl shadow-2xl border border-white/10 h-[340px] md:h-auto object-cover group-hover:scale-105 transition duration-700"
          />

          {/* Badge */}
          <div className="absolute -bottom-3 -right-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2">
            <p className="text-orange-400 font-bold text-sm">Since 2010</p>
            <p className="text-xs text-gray-300">Indo-Chinese Kitchen</p>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/10 blur-2xl rounded-2xl"></div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Taste. Tradition. Innovation.
          </h2>

          <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed">
            At <span className="text-orange-400 font-semibold">Rajan Food Corner</span>, 
            we bring you the perfect blend of authentic Indo-Chinese street flavors 
            and modern culinary techniques. Every dish is prepared with fresh ingredients, 
            bold spices, and a passion for taste.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-4 text-sm md:text-base">

            <div className="flex items-center gap-3">
              <FaLeaf className="text-green-400" />
              <span className="text-gray-300">Fresh & High-Quality Ingredients</span>
            </div>

            <div className="flex items-center gap-3">
              <FaUtensils className="text-orange-400" />
              <span className="text-gray-300">Expert Chefs with 10+ Years Experience</span>
            </div>

            <div className="flex items-center gap-3">
              <FaStar className="text-orange-400" />
              <span className="text-gray-300">Highly Rated (4.8★ Customer Satisfaction)</span>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold transition">
              Explore Menu
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full transition">
              Contact Us
            </button>
          </div>

        </motion.div>
      </div>

      {/* STATS */}
      <div className="max-w-5xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">

        {[
          { num: "10+", label: "Years Experience" },
          { num: "50+", label: "Chinese Dishes" },
          { num: "20K+", label: "Happy Customers" },
          { num: "4.8★", label: "Rating" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl py-5 hover:border-orange-400/40 transition"
          >
            <h3 className="text-lg md:text-xl font-bold text-orange-400">
              {item.num}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mt-1">
              {item.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}