import { motion } from "framer-motion";
import { useStateContext } from "../Context/States";

const reviews = [
  {
    name: "Amanpreet Singh",
    role: "Food Lover",
    text: "Rajan Food Corner ka Indo-Chinese food next level hai 🔥 noodles aur chilli potato ka taste bilkul restaurant style tha!",
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Simran Kaur",
    role: "Regular Customer",
    text: "Mujhe yahan ka veg momos aur Manchurian bahut pasand aaya ❤️ fresh, spicy aur quantity bhi mast thi.",
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Meena Verma",
    role: "Food Reviewer",
    text: "Desi flavours ke saath Chinese dishes ka perfect fusion 😍 ambience aur service dono amazing the.",
    img: "https://i.pravatar.cc/100?img=45",
  },
];

export default function Testimonials() {
  const { testimonialsRef, darkMode } = useStateContext();

  return (
    <section
      ref={testimonialsRef}
      className={`w-full py-24 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          What Our{" "}
          <span className="text-orange-400">
            Customers Say
          </span>
        </h2>

        <p
          className={`mt-4 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Real feedback from our food lovers ❤️
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {reviews.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative group backdrop-blur-xl rounded-2xl p-6 shadow-xl overflow-hidden border transition-all duration-500 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            }`}
          >

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/10 blur-2xl"></div>

            {/* STARS */}
            <div className="text-orange-400 text-sm mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            {/* REVIEW */}
            <p
              className={`text-sm leading-relaxed relative z-10 ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              “{item.text}”
            </p>

            {/* USER */}
            <div className="flex items-center gap-4 mt-6 relative z-10">

              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-orange-400"
              />

              <div>
                <h4
                  className={`font-semibold ${
                    darkMode
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {item.name}
                </h4>

                <p
                  className={`text-xs ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {item.role}
                </p>
              </div>

            </div>

            {/* LINE */}
            <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}