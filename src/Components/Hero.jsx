import { motion } from "framer-motion";
import { FaUtensils, FaConciergeBell } from "react-icons/fa";
import { useStateContext } from "../Context/States";

export default function Hero() {
  const {heroRef}=useStateContext()
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white" ref={heroRef}>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1920"
          alt="restaurant"
          className="h-full w-full object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      </div>

      {/* Branding Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-red-500/20 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">

        <div className="max-w-3xl text-center">

          {/* BRAND BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
          >
            <FaUtensils className="text-orange-400" />
            <span className="text-sm tracking-widest uppercase text-orange-200">
              Rajan Food Corner
            </span>
          </motion.div>

          {/* MAIN BRAND NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Welcome to{" "}
            <span className="text-orange-400">
              Rajan Food Corner
            </span>
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-300 text-lg md:text-xl"
          >
            Authentic taste • Fresh ingredients • Homemade love in every bite
          </motion.p>

          {/* BRAND HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-300"
          >
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              🍽 Pure Veg & Non-Veg
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              🚚 Fast Delivery
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              ⭐ 4.8 Rated
            </span>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold transition">
              <FaConciergeBell />
              Order Now
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              View Menu
            </button>
          </motion.div>

        </div>
      </div>

      {/* Floating Food Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800"
        alt="food"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:block absolute bottom-10 right-10 w-[320px] rounded-2xl shadow-2xl border border-white/10"
      />
    </section>
  );
}