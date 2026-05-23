import { motion } from "framer-motion";
import { useStateContext } from "../Context/States";

const fallbackImg =
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600";

const menu = [
  {
    category: "Snacks",
    items: [
      {
        name: "Veg. Spring Roll",
        fullPrice: "₹40",
        halfPrice: "₹20",
        desc: "Crispy vegetable spring rolls",
        img: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Veg. Momos Fry",
        fullPrice: "₹60",
        halfPrice: "₹40",
        desc: "Fried crispy vegetable momos",
        img: "https://images.unsplash.com/photo-1738608084602-f9543952188e?w=600&auto=format&w=600&q=80",
      },
      {
        name: "Veg. Momos",
        fullPrice: "₹50",
        halfPrice: "₹30",
        desc: "Steamed dumplings with veggies",
        img: "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?w=600&q=80",
      },
      {
        name: "Veg. Momos Chilly",
        fullPrice: "₹100",
        halfPrice: "₹60",
        desc: "Spicy chilli tossed veg momos",
        img: "https://images.unsplash.com/photo-1710508774177-7ac2f3492675?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Non Veg. Momos",
        fullPrice: "₹60",
        halfPrice: "₹30",
        desc: "Juicy chicken momos",
        img: "https://images.unsplash.com/photo-1664138218128-2dcf791a9d27?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "French Fries",
        fullPrice: "₹80",
        halfPrice: "₹50",
        desc: "Crispy salted fries",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
      },
      {
        name: "Chilly Potato",
        fullPrice: "₹100",
        halfPrice: "₹60",
        desc: "Spicy crispy potato tossed in sauce",
        img: "https://media.istockphoto.com/id/1155838531/photo/delicious-honey-chilli-potatoes-with-sesame-and-green-onions-served-on-a-plate-vertical.webp?a=1&b=1&s=612x612&w=0&k=20&c=5MXm_81tf8YN0Ty6fBSLY2XGrbVUUVsv3ND7zw1S3cg=",
      },
      {
        name: "Honey Chilly Potato",
        fullPrice: "₹110",
        halfPrice: "₹70",
        desc: "Sweet & spicy crispy potatoes",
        img: "https://media.istockphoto.com/id/1155838369/photo/asian-honey-chilli-potato-wedges-with-hot-sweet-sauce-sesame-and-green-onions-close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=arOJuV9Z1dlCb_GVsni9eHD_Y8qGQtal7Gfurq8MpD0=",
      },
      {
        name: "Veg. Manchurian with Gravy",
        fullPrice: "₹90",
        halfPrice: "₹50",
        desc: "Veg manchurian in spicy gravy",
        img: "https://media.istockphoto.com/id/2204824949/photo/vegetable-manchurian-is-a-spicy-indo-chinese-dish-featuring-deep-fried-vegetable-balls-tossed.webp?a=1&b=1&s=612x612&w=0&k=20&c=B1m4SzitmdO6lgZ-DVHaGf72CU1gFo8mg_7s8qBKclY=",
      },
      {
        name: "Veg. Manchurian Dry",
        fullPrice: "₹90",
        halfPrice: "₹50",
        desc: "Dry tossed veg manchurian",
        img: "https://media.istockphoto.com/id/2227481998/photo/soya-manchurian-is-a-flavourful-indo-chinese-dish-made-with-soya-chunks-tossed-in-spicy-tangy.webp?a=1&b=1&s=612x612&w=0&k=20&c=AJ7GwpTZR-QO_F2gncHzqnbTWAs4bjIsut7KTQFUdBs=",
      },
      {
        name: "Ginger Garlic Manchurian",
        fullPrice: "₹100",
        halfPrice: "₹60",
        desc: "Manchurian tossed in ginger garlic sauce",
        img: "https://media.istockphoto.com/id/1072951288/photo/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=GeqSiSUYGqzSTTUVI3b4iLTgkuD2jDLeVwzm0PvkTt0=",
      },
      {
        name: "Mushroom Chilly",
        fullPrice: "₹180",
        halfPrice: "₹110",
        desc: "Spicy crispy mushroom tossed in sauce",
        img: "https://media.istockphoto.com/id/1494080845/photo/mushroom-chilly-dry-in-white-plate-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=HRISIkrLva0GJnVWhUDBAKRjj7893a5tYWcBYLsXGYg=",
      },
      {
        name: "Mushroom Chilly with Gravy",
        fullPrice: "₹180",
        halfPrice: "₹110",
        desc: "Mushroom in spicy gravy",
        img: "https://media.istockphoto.com/id/1494080845/photo/mushroom-chilly-dry-in-white-plate-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=HRISIkrLva0GJnVWhUDBAKRjj7893a5tYWcBYLsXGYg=",
      },
    ],
  },

  {
    category: "Noodles",
    items: [
      {
        name: "Veg. Noodles",
        fullPrice: "₹90",
        halfPrice: "₹50",
        desc: "Classic stir-fried vegetable noodles",
        img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600",
      },
      {
        name: "Veg. Hakka Noodles",
        fullPrice: "₹110",
        halfPrice: "₹60",
        desc: "Hakka style spicy noodles",
        img: "https://images.unsplash.com/photo-1617622141573-2e00d8818f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFra2ElMjBub29kbGVzfGVufDB8fDB8fHww",
      },
      {
        name: "Veg. Singaporei Noodles",
        fullPrice: "₹110",
        halfPrice: "₹60",
        desc: "Singapore style spicy noodles",
        img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2FwdXJpJTIwbm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Veg. Chilly Garlic Noodles",
        fullPrice: "₹100",
        halfPrice: "₹60",
        desc: "Garlic flavored spicy noodles",
        img: "https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGx5JTIwZ2FybGljJTIwbm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Veg. Thukpa",
        fullPrice: "₹90",
        halfPrice: "₹50",
        desc: "Tibetan noodle soup",
        img: "https://media.istockphoto.com/id/978433374/photo/nepalese-noodle-soup.webp?a=1&b=1&s=612x612&w=0&k=20&c=cip65qhwVBwV4COwBmevBKW4beifBl0XhjVwzLRQsJg=",
      },
    ],
  },

  {
    category: "Fried Rice",
    items: [
      {
        name: "Veg. Fried Rice",
        fullPrice: "₹90",
        halfPrice: "₹50",
        desc: "Chinese-style stir fried rice",
        img: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&w=600&q=80",
      },
      {
        name: "Veg. Singaporei Fried Rice",
        fullPrice: "₹110",
        halfPrice: "₹60",
        desc: "Singapore style spicy fried rice",
        img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&w=600&q=80",
      },
      {
        name: "Veg. Chilly Garlic Fried Rice",
        fullPrice: "₹100",
        halfPrice: "₹60",
        desc: "Garlic flavored fried rice",
        img: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyaWVkJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },

  {
    category: "Pasta",
    items: [
      {
        name: "Red Sauce Pasta",
        fullPrice: "₹120",
        halfPrice: "₹70",
        desc: "Tangy tomato-based pasta",
        img: "https://media.istockphoto.com/id/1284064993/photo/tasty-penne-pasta-in-red-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=uqEbAm7wleMh5EzYgPz3X3e6D0dyLs7ApvRRelQ8P7s=",
      },
      {
        name: "White Sauce Pasta",
        fullPrice: "₹110",
        halfPrice: "₹60",
        desc: "Creamy white sauce pasta",
        img: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=600",
      },
      {
        name: "Mix Sauce Pasta",
        fullPrice: "₹120",
        halfPrice: "₹70",
        desc: "Combination of red & white sauce",
        img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1peCUyMHNhdWNlJTIwcGFzdGF8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },

  {
    category: "Paneer Items",
    items: [
      {
        name: "Paneer Noodle",
        fullPrice: "₹130",
        halfPrice: "₹80",
        desc: "Paneer tossed noodles",
        img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=600",
      },
      {
        name: "Paneer Rice",
        fullPrice: "₹130",
        halfPrice: "₹80",
        desc: "Paneer fried rice",
        img: "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?w=600&auto=format&w=600&q=80",
      },
      {
        name: "Paneer Thukpa",
        fullPrice: "₹130",
        halfPrice: "₹80",
        desc: "Paneer Tibetan noodle soup",
        img: "data:image/jpeg;base64,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",
      },
      {
        name: "Chilly Paneer Dry",
        fullPrice: "₹190",
        halfPrice: "₹110",
        desc: "Dry chilli paneer",
        img: "https://images.pexels.com/photos/31783383/pexels-photo-31783383.jpeg",
      },
      {
        name: "Chilly Paneer Gravy",
        fullPrice: "₹190",
        halfPrice: "₹110",
        desc: "Paneer in spicy gravy",
        img: "https://images.pexels.com/photos/12737810/pexels-photo-12737810.jpeg",
      },
    ],
  },

  {
    category: "Egg Items",
    items: [
      {
        name: "Egg Noodles",
        fullPrice: "₹110",
        halfPrice: "₹60",
        desc: "Egg tossed noodles",
        img: "https://images.pexels.com/photos/36452863/pexels-photo-36452863.jpeg",
      },
      {
        name: "Egg Fried Rice",
        fullPrice: "₹110",
        halfPrice: "₹60",
        desc: "Fried rice with egg",
        img: "https://images.pexels.com/photos/31423008/pexels-photo-31423008.jpeg",
      },
      {
        name: "Egg Thukpa",
        fullPrice: "₹110",
        halfPrice: "₹60",
        desc: "Egg noodle soup",
        img: "https://images.pexels.com/photos/10183544/pexels-photo-10183544.jpeg",
      },
    ],
  },

  {
    category: "Chicken Items",
    items: [
      {
        name: "Chicken Noodles",
        fullPrice: "₹140",
        halfPrice: "₹80",
        desc: "Chicken stir-fried noodles",
        img: "https://images.pexels.com/photos/28460868/pexels-photo-28460868.jpeg",
      },
      {
        name: "Chicken Fried Rice",
        fullPrice: "₹140",
        halfPrice: "₹80",
        desc: "Chicken fried rice",
        img: "https://images.pexels.com/photos/34668501/pexels-photo-34668501.jpeg",
      },
      {
        name: "Chicken Thukpa",
        fullPrice: "₹140",
        halfPrice: "₹80",
        desc: "Chicken Tibetan noodle soup",
        img: "https://images.pexels.com/photos/10172749/pexels-photo-10172749.jpeg",
      },
      {
        name: "Chilly Chicken Momos",
        fullPrice: "₹120",
        halfPrice: "₹70",
        desc: "Spicy tossed chicken momos",
        img: "https://images.pexels.com/photos/28445589/pexels-photo-28445589.jpeg",
      },
      {
        name: "Chicken Fry Momos",
        fullPrice: "₹70",
        halfPrice: "₹40",
        desc: "Fried chicken momos",
        img: "https://images.pexels.com/photos/28445587/pexels-photo-28445587.jpeg",
      },
      {
        name: "Chicken Momos Gravy",
        fullPrice: "₹120",
        halfPrice: "₹70",
        desc: "Chicken momos in gravy",
        img: "https://images.pexels.com/photos/16483889/pexels-photo-16483889.jpeg",
      },
    ],
  },

  {
    category: "Soup Items",
    items: [
      {
        name: "Veg. Soup",
        fullPrice: "₹30",
        halfPrice: "-",
        desc: "Hot vegetable soup",
        img: "https://images.pexels.com/photos/16845652/pexels-photo-16845652.jpeg",
      },
      {
        name: "Manchow Soup",
        fullPrice: "₹35",
        halfPrice: "-",
        desc: "Spicy Indo-Chinese soup",
        img: "https://images.pexels.com/photos/36511370/pexels-photo-36511370.jpeg",
      },
      {
        name: "Chicken Soup",
        fullPrice: "₹50",
        halfPrice: "-",
        desc: "Hot chicken soup",
        img: "https://images.pexels.com/photos/34326228/pexels-photo-34326228.jpeg",
      },
    ],
  },
];

export default function Menu() {
  const { menuRef, darkMode } = useStateContext();

  return (
    <section
      ref={menuRef}
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
            Chinese Menu
          </span>
        </h1>

        <p
          className={`mt-4 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Authentic Indo-Chinese • Fast Food • Comfort Taste
        </p>
      </motion.div>

      {/* MENU */}
      <div className="max-w-6xl mx-auto space-y-20">

        {menu.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* CATEGORY */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 border-l-4 border-orange-500 pl-4">
              {section.category}
            </h2>

            {/* ITEMS */}
            <div className="grid md:grid-cols-3 gap-8">

              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`relative group rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl border transition-all duration-500 ${
                    darkMode
                      ? "border-white/10 bg-gradient-to-b from-white/10 to-white/5"
                      : "border-black/10 bg-gradient-to-b from-black/5 to-black/[0.02]"
                  }`}
                >

                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-orange-500/10 blur-2xl"></div>

                  {/* IMAGE */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      onError={(e) => (e.target.src = fallbackImg)}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div
                      className={`absolute inset-0 ${
                        darkMode
                          ? "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                          : "bg-gradient-to-t from-white/70 via-white/20 to-transparent"
                      }`}
                    ></div>
                  </div>

             {/* CONTENT */}
<div className="p-5 relative z-10">

  <div className="flex justify-between items-start gap-4">
    
    <h3
      className={`text-lg font-semibold transition ${
        darkMode
          ? "group-hover:text-orange-400"
          : "group-hover:text-orange-500"
      }`}
    >
      {item.name}
    </h3>

    {/* PRICE BOX */}
    <div className="flex flex-col items-end text-sm">
      
      {item.fullPrice && (
        <div className="flex items-center gap-2">
          <span
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Full
          </span>

          <span className="text-orange-400 font-bold">
            {item.fullPrice}
          </span>
        </div>
      )}

      {item.halfPrice && item.halfPrice !== "-" && (
        <div className="flex items-center gap-2 mt-1">
          <span
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Half
          </span>

          <span className="text-orange-300 font-semibold">
            {item.halfPrice}
          </span>
        </div>
      )}
    </div>
  </div>

  <p
    className={`text-sm mt-2 ${
      darkMode
        ? "text-gray-400"
        : "text-gray-600"
    }`}
  >
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