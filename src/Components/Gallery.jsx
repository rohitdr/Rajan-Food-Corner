import { motion } from "framer-motion";
import { useStateContext } from "../Context/States";

const fallbackImg =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200";

const images = [
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200",
    title: "Restaurant Ambience",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200",
    title: "Signature Dishes",
  },
  {
    src: "https://images.pexels.com/photos/12103073/pexels-photo-12103073.jpeg",
    title: "Fresh Starters",
  },
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200",
    title: "Chef Specials",
  },
  {
    src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200",
    title: "Main Course",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1200",
    title: "Dining Experience",
  },
];

export default function Gallery() {
  const { galleryRef, darkMode } = useStateContext();

  return (
    <section
      ref={galleryRef}
      className={`min-h-screen w-full py-20 px-6 transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Our{" "}
          <span className="text-orange-400">
            Gallery
          </span>
        </h1>

        <p
          className={`mt-4 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          A visual taste of our food, ambience & experience
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {images.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className={`relative group overflow-hidden rounded-2xl backdrop-blur-xl shadow-xl border transition-all duration-500 ${
              darkMode
                ? "border-white/10 bg-gradient-to-b from-white/10 to-white/5"
                : "border-black/10 bg-gradient-to-b from-black/5 to-black/[0.02]"
            }`}
          >

            {/* IMAGE */}
            <div className="h-72 overflow-hidden relative">
              <img
                src={item.src}
                alt={item.title}
                onError={(e) => (e.target.src = fallbackImg)}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div
                className={`absolute inset-0 ${
                  darkMode
                    ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    : "bg-gradient-to-t from-white/80 via-white/20 to-transparent"
                }`}
              ></div>
            </div>

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-10">

              <div className="translate-y-4 group-hover:translate-y-0 transition duration-500">

                <h3
                  className={`font-semibold text-lg transition ${
                    darkMode
                      ? "text-white group-hover:text-orange-400"
                      : "text-black group-hover:text-orange-400"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-xs mt-1 opacity-80 ${
                    darkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Authentic Indo-Chinese experience
                </p>

              </div>

            </div>

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/10 blur-2xl"></div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}