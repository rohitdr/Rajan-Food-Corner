import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

import { useStateContext } from "../Context/States";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  const { contactRef, darkMode } = useStateContext();

  return (
    <section
      ref={contactRef}
      className={`w-full py-16 px-4 overflow-x-hidden transition-all duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* HEADER */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h1
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-5xl font-bold"
        >
          RAJAN FOOD CORNER
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-orange-400 mt-2 text-sm"
        >
          Authentic Indo-Chinese Kitchen 🍜
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={2}
          className={`mt-3 text-sm max-w-md mx-auto ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Fresh noodles • momos • soups • rice bowls
        </motion.p>
      </motion.div>

      {/* ACTION BUTTONS */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-8 flex flex-col gap-3 max-w-md mx-auto"
      >

        <motion.a
          variants={fadeUp}
          custom={3}
          whileTap={{ scale: 0.96 }}
          href="tel:+919888895696"
          className={`px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition ${
            darkMode
              ? "bg-white/10 hover:bg-white/20"
              : "bg-black/10 hover:bg-black/20"
          }`}
        >
          <FaPhoneAlt />
          Call Now
        </motion.a>

        <motion.a
          variants={fadeUp}
          custom={4}
          whileTap={{ scale: 0.96 }}
          href="https://wa.me/919888895696"
          className="bg-green-500 hover:bg-green-600 text-black px-5 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition"
        >
          <FaWhatsapp />
          WhatsApp Order
        </motion.a>

      </motion.div>


      {/* INFO CARDS */}
      <div className="mt-10 max-w-md mx-auto space-y-3">

        {[
          { icon: <FaPhoneAlt />, text: "+91 98888 95696" },
          { icon: <FaMapMarkerAlt />, text: "Garja Complex, Adarsh Nagar, Mohali, Punjab, India" },
          { icon: <FaClock />, text: "10:00 AM - 11:00 PM" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-xl p-4 flex gap-3 items-center border transition-all duration-500 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            }`}
          >
            <span className="text-orange-400">
              {item.icon}
            </span>

            <p className="text-sm">
              {item.text}
            </p>
          </motion.div>
        ))}

      </div>

      {/* MAP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`mt-10 max-w-md mx-auto rounded-2xl overflow-hidden border transition-all duration-500 ${
          darkMode
            ? "border-white/10"
            : "border-black/10"
        }`}
      >
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.51593566914806!2d76.7903217579771!3d30.77100120136871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff28415683437%3A0x6bc101a6f052fc62!2sRajan%20Food%20Corner!5e0!3m2!1sen!2sin!4v1779450291190!5m2!1sen!2sin"
          className="w-full h-60 block"
        />
      </motion.div>

    </section>
  );
}