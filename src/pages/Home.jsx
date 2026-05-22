import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Settings,
  Briefcase,
  Star,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { IoCarOutline, IoPricetagOutline } from "react-icons/io5";
import { MdOutlineTouchApp } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

/* ===== ANIMATIONS ===== */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ===== FEATURES ===== */

const features = [
  {
    icon: <IoCarOutline className="w-12 h-12 text-gray-700" />,
    title: "Well maintained vehicles",
    description:
      "All our cars are well-maintained and regularly serviced, ensuring safe and smooth driving.",
  },
  {
    icon: <MdOutlineTouchApp className="w-12 h-12 text-gray-700" />,
    title: "Easy online booking",
    description:
      "Book your car in minutes with our user-friendly online platform. Fast, simple, and convenient!",
  },
  {
    icon: <IoPricetagOutline className="w-12 h-12 text-gray-700" />,
    title: "Affordable pricing",
    description:
      "Enjoy competitive rates with no hidden fees. Rent the perfect car without breaking the bank.",
  },
  {
    icon: <BiSupport className="w-12 h-12 text-gray-700" />,
    title: "24/7 support",
    description:
      "We're here to assist you anytime, anywhere. Drive with peace of mind knowing help is just a call away.",
  },
];

/* ===== CARS ===== */

const cars = [
  {
    id: 1,
    title: "Compact city cruiser",
    price: "$150",
    image: "/car2.avif",
    seats: 4,
    gearbox: "Manual",
    luggage: "2 bags",
  },
  {
    id: 2,
    title: "Spacious SUV",
    price: "$195",
    image: "/car1.avif",
    seats: 7,
    gearbox: "Automatic",
    luggage: "4 bags",
  },
];

/* ===== RENT SECTION ===== */

const steps = [
  {
    id: "01",
    title: "Choose your car",
    description:
      "Browse our wide selection of vehicles, from compact city cars to spacious SUVs. Pick the perfect ride that suits your needs.",
  },
  {
    id: "02",
    title: "Book online",
    description:
      "Reserve your car in just a few clicks with our user-friendly booking system. Select your dates, and locations, and confirm your reservation instantly.",
  },
  {
    id: "03",
    title: "Pick up & drive",
    description:
      "Head to the nearest pickup location and grab your keys. Enjoy a smooth ride through the city with our reliable and well-maintained vehicles.",
  },
];

/* ===== TESTIMONIALS ===== */

const testimonials = [
  {
    name: "Mark Stevens",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I needed a reliable car for my business trip, and this service exceeded my expectations. The booking process was seamless, and the car was in excellent condition.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "As a frequent traveler for work, I rely on car rental services often. This company has become my go-to choice because of their reliable vehicles and excellent customer service.",
    rating: 4,
  },
  {
    name: "Brian T",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "It was fuel-efficient and environmentally friendly, which is important to me. I loved that this company offers sustainable options for modern travelers!",
    rating: 4,
  },
  {
    name: "Emma Johnson",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "I needed a rental for a last-minute trip, and this service made it so easy! The car was clean, the rates were affordable, and the pickup was hassle-free.",
    rating: 5,
  },
  {
    name: "Jessica Ramirez",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "There is plenty of room for everyone and all our luggage. The process was easy, and the customer service was top-notch.",
    rating: 5,
  },
  {
    name: "Laura J.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    review:
      "The rates were competitive, and the team made it easy to extend my rental when my plans changed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Daniel Lee",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    review:
      "I frequently travel for work and have used many rental services, but this one stands out. Fast booking, great vehicles, and excellent customer support.",
    rating: 4,
  },
  {
    name: "Kevin Thompson",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "The vehicle was in great condition, and the 24/7 support was a huge plus. I felt confident the entire trip.",
    rating: 5,
  },
  {
    name: "Chris P",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    review:
      "The car was delivered quickly, and everything was handled professionally. A true lifesaver in a stressful moment.",
    rating: 4,
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== HERO SECTION ===== */}

      <section className="w-full min-h-screen p-3 md:p-5 overflow-hidden">
        <div
          className="relative w-full min-h-screen rounded-[20px] md:rounded-[30px] overflow-hidden bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/55"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative z-10 max-w-3xl px-5 sm:px-8 md:px-12 mt-24 md:mt-32"
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-[88px] font-sans leading-[1.1]">
              Quick and affordable car rentals
            </h1>

            <button
              onClick={() => navigate("/cars")}
              className="mt-8 md:mt-10 flex items-center overflow-hidden rounded-xl border border-yellow-400 group w-fit"
            >
              <span className="bg-yellow-400 text-black px-5 md:px-6 py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium">
                Book your ride now
              </span>

              <span className="bg-black text-white p-3 md:p-4 group-hover:bg-yellow-400 group-hover:text-black transition duration-300">
                <ArrowUpRight size={22} />
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURE SECTION ===== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-white py-16 md:py-20 px-5 md:px-6 max-w-7xl mx-auto overflow-hidden"
      >
        <motion.div
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Enjoy flexibility and unbeatable rates with our city car rentals
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center">
          {features.map((item, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className="flex flex-col items-center hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-5 flex items-center justify-center h-16 w-16">
                {item.icon}
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== CAR SECTION ===== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="bg-white px-5 md:px-6 py-14 md:py-20 max-w-7xl mx-auto overflow-hidden"
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
            Our rental car collection
          </h2>

          <button className="flex items-center gap-2 bg-[#F6D55C] hover:bg-[#ebd065] text-black font-medium py-3 px-5 rounded-md transition-colors text-sm">
            View all vehicles
            <span className="bg-black text-white p-1 rounded-sm text-xs">
              ↗
            </span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cars.map((car) => (
            <motion.div
              variants={fadeUp}
              key={car.id}
              className="bg-[#F8F9FA] rounded-2xl p-5 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center items-center h-52 md:h-72 my-4">
                <img
                  src={car.image}
                  alt={car.title}
                  className="max-h-full object-contain mix-blend-multiply hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex justify-between items-baseline mb-6 gap-4">
                  <h3 className="text-lg md:text-2xl font-medium text-gray-800">
                    {car.title}
                  </h3>

                  <div className="text-right">
                    <span className="text-xl md:text-3xl font-bold text-gray-900">
                      {car.price}
                    </span>

                    <span className="text-gray-500 text-xs block sm:inline">
                      /Per day
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs md:text-sm border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="text-gray-400 p-2 border border-gray-300 rounded-md">
                      <Shield size={16} />
                    </div>

                    <div>
                      <p className="text-gray-400 text-[10px] md:text-xs">
                        Seat
                      </p>
                      <p className="font-semibold text-gray-800">
                        {car.seats}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-gray-400 p-2 border border-gray-300 rounded-md">
                      <Settings size={16} />
                    </div>

                    <div>
                      <p className="text-gray-400 text-[10px] md:text-xs">
                        Gearbox
                      </p>
                      <p className="font-semibold text-gray-800">
                        {car.gearbox}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-gray-400 p-2 border border-gray-300 rounded-md">
                      <Briefcase size={16} />
                    </div>

                    <div>
                      <p className="text-gray-400 text-[10px] md:text-xs">
                        Luggage
                      </p>
                      <p className="font-semibold text-gray-800">
                        {car.luggage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== RENT SECTION ===== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="flex flex-col md:flex-row min-h-screen w-full bg-[#121212] text-white overflow-hidden"
      >
        <motion.div
          variants={fadeUp}
          className="w-full md:w-1/2 relative min-h-[400px] md:min-h-screen"
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop"
            alt="Car"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="w-full md:w-1/2 flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 leading-tight">
            Rent your car in 3
            <br />
            easy steps
          </h2>

          <div className="space-y-10">
            {steps.map((step) => (
              <motion.div
                variants={fadeUp}
                key={step.id}
                className="flex gap-5 md:gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#facc15] text-black flex items-center justify-center font-bold text-lg">
                  {step.id}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ===== FEEDBACK SECTION ===== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-20 px-5 md:px-10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-semibold text-center text-black mb-16 leading-tight"
          >
            Feedback from satisfied renters
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                className="bg-[#ececec] rounded-[28px] p-8 flex flex-col justify-between min-h-[320px] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < item.rating
                          ? "fill-black text-black"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-[1.7] text-[#1a1a1a] font-normal mb-8">
                  {item.review}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <h4 className="text-xl md:text-2xl font-medium text-black">
                    {item.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== SERVICES SECTION ===== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="py-16 px-5 md:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-[72px] leading-[1.1] font-semibold text-[#111] max-w-[650px]">
                Driving excellence in car rental services
              </h2>
              <p className="text-lg md:text-[20px] text-[#555] leading-[1.8] mt-8 max-w-[600px]">
                With a diverse fleet of vehicles and a commitment to customer
                satisfaction, we strive to make your journey smooth and
                enjoyable.
              </p>

              <button className="mt-10 bg-[#f4cf22] hover:bg-[#e5bf10] transition-all duration-300 rounded-xl px-5 md:px-6 py-3 flex items-center gap-4 text-black text-base md:text-[20px] font-medium w-fit">
                Know more about us

                <span className="bg-black text-white p-2 rounded-lg">
                  <ArrowUpRight size={24} />
                </span>
              </button>
            </div>
            <div className="flex gap-10 md:gap-16 mt-16 md:mt-20 flex-wrap">
              <div>
                <h3 className="text-5xl md:text-[72px] leading-none font-semibold text-black">
                  5K+
                </h3>

                <p className="text-base md:text-[20px] text-[#555] mt-4 max-w-[220px] leading-[1.5]">
                  Happy customers who have trusted us
                </p>
              </div>

              <div>
                <h3 className="text-5xl md:text-[72px] leading-none font-semibold text-black">
                  99%
                </h3>

                <p className="text-base md:text-[20px] text-[#555] mt-4 max-w-[250px] leading-[1.5]">
                  Our customers agree with our offer value
                </p>
              </div>
            </div>
            </motion.div>

          <motion.div variants={fadeUp} className="h-full">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
              alt="Car"
              className="w-full h-full min-h-[350px] md:min-h-[700px] object-cover rounded-[32px]"
            />
          </motion.div>
        </div>
      </motion.section>

    </>
  );
};

export default HeroSection;