import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, BriefcaseBusiness, Backpack } from "lucide-react";

import car1 from "/car1.avif";
import car2 from "/car2.avif";
import car3 from "/car3.png";
import car4 from "/car4.png";
import car5 from "/car5.png";
import car6 from "/car6.png";
import car7 from "/car7.png";
import car8 from "/car8.png";
import car9 from "/car9.png";
import car10 from "/car10.png";
import car11 from "/car11.png";
import car12 from "/car12.png";

const Cars = () => {
  const categories = [
    "All cars",
    "Business",
    "Family",
    "Adventure",
    "Wedding",
  ];

  const carsData = [
    {
      id: 1,
      title: "Compact City Cruiser",
      category: "Family",
      price: 120,
      seats: 4,
      gearbox: "Manual",
      luggage: "2 bags",
      image: car1,
    },
    {
      id: 2,
      title: "Luxury SUV",
      category: "Adventure",
      price: 250,
      seats: 7,
      gearbox: "Automatic",
      luggage: "4 bags",
      image: car2,
    },
    {
      id: 3,
      title: "Luxury Sedan",
      category: "Business",
      price: 210,
      seats: 5,
      gearbox: "Automatic",
      luggage: "3 bags",
      image: car3,
    },
    {
      id: 4,
      title: "Mercedes",
      category: "Wedding",
      price: 150,
      seats: 5,
      gearbox: "Automatic",
      luggage: "2 bags",
      image: car4,
    },
    {
      id: 5,
      title: "Adventure Jeep",
      category: "Adventure",
      price: 300,
      seats: 6,
      gearbox: "Manual",
      luggage: "5 bags",
      image: car5,
    },
    {
      id: 6,
      title: "Family Van",
      category: "Family",
      price: 180,
      seats: 8,
      gearbox: "Automatic",
      luggage: "6 bags",
      image: car6,
    },
    {
      id: 7,
      title: "Business Elite",
      category: "Business",
      price: 220,
      seats: 5,
      gearbox: "Automatic",
      luggage: "3 bags",
      image: car7,
    },
    {
      id: 8,
      title: "Wedding Royale",
      category: "Wedding",
      price: 350,
      seats: 4,
      gearbox: "Automatic",
      luggage: "2 bags",
      image: car8,
    },
    {
      id: 9,
      title: "Mountain Explorer",
      category: "Adventure",
      price: 280,
      seats: 6,
      gearbox: "Manual",
      luggage: "5 bags",
      image: car9,
    },
    {
      id: 10,
      title: "Family Comfort",
      category: "Family",
      price: 170,
      seats: 7,
      gearbox: "Automatic",
      luggage: "4 bags",
      image: car10,
    },
    {
      id: 11,
      title: "Executive Ride",
      category: "Business",
      price: 260,
      seats: 5,
      gearbox: "Automatic",
      luggage: "3 bags",
      image: car11,
    },
    {
      id: 12,
      title: "Royal Wedding Car",
      category: "Wedding",
      price: 400,
      seats: 4,
      gearbox: "Automatic",
      luggage: "2 bags",
      image: car12,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All cars");

  const filteredCars =
    activeCategory === "All cars"
      ? carsData
      : carsData.filter((car) => car.category === activeCategory);

  return (
    <section className=" py-24 mt-10 px-4 md:px-10 overflow-hidden">
      {/* Heading */}
      <motion.h1
        key={activeCategory}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-7xl font-semibold text-center mb-12"
      >
        {activeCategory}
      </motion.h1>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        {categories.map((item, index) => (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            onClick={() => setActiveCategory(item)}
            className={`px-6 py-3 rounded-lg text-lg transition-all duration-300 ${
              activeCategory === item
                ? "bg-black text-yellow-400"
                : "bg-yellow-400 text-black hover:bg-black hover:text-yellow-400"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>

      {/* Cars Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {filteredCars.map((car, index) => (
          <motion.div
            layout
            key={car.id}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -10 }}
            className="bg-[#ececec] rounded-[30px] overflow-hidden p-6 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="h-[320px] flex items-center justify-center overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                src={car.image}
                alt={car.title}
                className="w-full max-w-[450px] object-contain"
              />
            </div>

            {/* Info */}
            <div className="pt-6">
              <div className="flex justify-between items-center border-b border-gray-300 pb-5">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl font-medium"
                >
                  {car.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl font-semibold"
                >
                  ${car.price}
                  <span className="text-lg font-normal text-gray-600">
                    /Per day
                  </span>
                </motion.p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-3 gap-5 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <Users size={32} />
                  <div>
                    <p className="text-gray-500">Seat</p>
                    <h4 className="text-2xl font-semibold">
                      {car.seats}
                    </h4>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <BriefcaseBusiness size={32} />
                  <div>
                    <p className="text-gray-500">Gearbox</p>
                    <h4 className="text-2xl font-semibold">
                      {car.gearbox}
                    </h4>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3"
                >
                  <Backpack size={32} />
                  <div>
                    <p className="text-gray-500">Luggage</p>
                    <h4 className="text-2xl font-semibold">
                      {car.luggage}
                    </h4>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Cars;