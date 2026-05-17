import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaWhatsapp } from "react-icons/fa";
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
   const {contactRef}=useStateContext() 
  return (
    <section className="w-full bg-black text-white py-16 px-4 overflow-x-hidden" ref={contactRef}>

      {/* BRAND HEADER */}
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
          className="text-gray-400 mt-3 text-sm max-w-md mx-auto"
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
          className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <FaPhoneAlt /> Call Now
        </motion.a>

        <motion.a
          variants={fadeUp}
          custom={4}
          whileTap={{ scale: 0.96 }}
          href="https://wa.me/919888895696"
          className="bg-green-500 hover:bg-green-600 text-black px-5 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition"
        >
          <FaWhatsapp /> WhatsApp Order
        </motion.a>
      </motion.div>

      {/* BOOKING CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-10 max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Reserve Table
        </h2>

        <form className="space-y-3">

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-orange-400 outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            placeholder="Guests"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-orange-400 outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="date"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 focus:border-orange-400 outline-none"
          />

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 rounded-xl transition"
          >
            Confirm Booking
          </motion.button>

        </form>
      </motion.div>

      {/* INFO CARDS */}
      <div className="mt-10 max-w-md mx-auto space-y-3">

        {[
          { icon: <FaPhoneAlt />, text: "+91 98888 95696" },
          { icon: <FaMapMarkerAlt />, text: "Main Market, Punjab, India" },
          { icon: <FaClock />, text: "10:00 AM - 11:00 PM" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-center"
          >
            <span className="text-orange-400">{item.icon}</span>
            <p className="text-sm">{item.text}</p>
          </motion.div>
        ))}

      </div>

      {/* MAP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10"
      >
        <iframe
          src="https://www.google.com/maps?q=Main%20Market%20Punjab%20India&output=embed"
          className="w-full h-60 block"
        />
      </motion.div>

    </section>
  );
}