import { motion } from "framer-motion";
import { useStateContext } from "../Context/States";

const fallbackImg =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600";

const menu = [
  {
    category: "Noodles",
    items: [
      {
        name: "Veg Hakka Noodles",
        price: "₹180",
        desc: "Classic stir-fried noodles with veggies",
        img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600",
      },
      {
        name: "Egg Noodles",
        price: "₹190",
        desc: "Wok-tossed noodles with egg & sauces",
        img: "https://images.unsplash.com/photo-1604908177522-040a1c6d6f3b?q=80&w=600",
      },
    ],
  },

  {
    category: "Rice",
    items: [
      {
        name: "Veg Fried Rice",
        price: "₹170",
        desc: "Chinese-style stir fried rice",
        img: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&w=600&q=80",
      },
      {
        name: "Egg Fried Rice",
        price: "₹180",
        desc: "Fried rice tossed with egg & sauces",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&w=600&q=80",
      },
    ],
  },

  {
    category: "Momos",
    items: [
      {
        name: "Veg Momos",
        price: "₹120",
        desc: "Steamed dumplings with veggies",
        img: "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?w=600&q=80",
      },
      {
        name: "Fried Momos",
        price: "₹140",
        desc: "Crispy fried dumplings",
        img: "https://images.unsplash.com/photo-1738608084602-f9543952188e?w=600&auto=format&w=600&q=80",
      },
    ],
  },

  {
    category: "Pasta (Indo-Chinese)",
    items: [
      {
        name: "White Sauce Pasta",
        price: "₹200",
        desc: "Creamy pasta with veggies",
        img: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=600",
      },
      {
        name: "Red Sauce Pasta",
        price: "₹190",
        desc: "Tangy tomato-based pasta",
        img: "https://media.istockphoto.com/id/1284064993/photo/tasty-penne-pasta-in-red-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=uqEbAm7wleMh5EzYgPz3X3e6D0dyLs7ApvRRelQ8P7s=",
      },
    ],
  },

  {
    category: "Chicken",
    items: [
      {
        name: "Chicken Chilli",
        price: "₹260",
        desc: "Spicy fried chicken in chilli sauce",
        img: "https://plus.unsplash.com/premium_photo-1723708871094-2c02cf5f5394?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpa2VuJTIwY2hpbGxpfGVufDB8fDB8fHww",
      },
      {
        name: "Chicken Soup",
        price: "₹150",
        desc: "Hot & comforting chicken broth",
        img: "https://plus.unsplash.com/premium_photo-1664472752075-d5b2b3de0a88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpa2VuJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Chicken Thukpa",
        price: "₹220",
        desc: "Tibetan noodle soup with chicken",
        img: "https://media.istockphoto.com/id/978433374/photo/nepalese-noodle-soup.webp?a=1&b=1&s=612x612&w=0&k=20&c=cip65qhwVBwV4COwBmevBKW4beifBl0XhjVwzLRQsJg=",
      },
    ],
  },

  {
    category: "Veg Specials",
    items: [
      {
        name: "Paneer Chilli",
        price: "₹240",
        desc: "Crispy paneer tossed in spicy sauce",
        img: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuZWVyJTIwY2hpbGxpfGVufDB8fDB8fHww",
      },
      {
        name: "Mushroom Chilli",
        price: "₹220",
        desc: "Spicy crispy mushrooms",
        img: "https://images.unsplash.com/photo-1710508774177-7ac2f3492675?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaHJvb20lMjBjaGlsbGl8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },

  {
    category: "Starters",
    items: [
      {
        name: "Spring Rolls",
        price: "₹180",
        desc: "Crispy vegetable rolls",
        img: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
];

export default function Menu() {
  const {menuRef}=useStateContext()
  return (
    <section className="min-h-screen w-full bg-black text-white py-20 px-6" ref={menuRef}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Our <span className="text-orange-400">Chinese Menu</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Authentic Indo-Chinese • Fast Food • Comfort Taste
        </p>
      </motion.div>

      {/* Menu */}
      <div className="max-w-6xl mx-auto space-y-20">

        {menu.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* Category */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-orange-500 pl-4">
              {section.category}
            </h2>

            {/* Items */}
            <div className="grid md:grid-cols-3 gap-8">

              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-xl"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-orange-500/10 blur-2xl"></div>

                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      onError={(e) => (e.target.src = fallbackImg)}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>

                  <div className="p-5 relative z-10">

                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold group-hover:text-orange-400 transition">
                        {item.name}
                      </h3>
                      <span className="text-orange-400 font-bold">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mt-2">
                      {item.desc}
                    </p>

                    <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>

                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}