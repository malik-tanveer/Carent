import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const stats = [
    { number: "15+", text: "Happy customers who have trusted us" },
    { number: "99%", text: "Our customers agree with our offer value" },
    { number: "5,000+", text: "Trusted by thousands of satisfied clients" },
    { number: "24/7", text: "Our dedicated support team is available" },
  ];

  const values = [
    {
      title: "Customer Focus",
      text: "We put our customers at the heart of everything we do. Your satisfaction is our top priority, and we strive to exceed your expectations with every rental experience.",
    },
    {
      title: "Integrity",
      text: "Honesty and transparency are the cornerstones of our business. We believe in building trust through clear communication and fair pricing without hidden fees.",
    },
    {
      title: "Reliability",
      text: "Our customers rely on us for safe and dependable transportation. We maintain our vehicles to the highest standards to ensure you have a worry-free driving experience.",
    },
    {
      title: "Innovation",
      text: "We embrace new technologies and ideas to enhance our services. From easy online booking to vehicle tracking, we are always looking for ways to improve.",
    },
    {
      title: "Sustainability",
      text: "We are committed to reducing our environmental impact. Our fleet includes eco-friendly vehicles, and we promote responsible driving practices to protect our planet.",
    },
  ];

  const teamMembers = [
    {
      name: "Emily Johnson",
      role: "Customer Service Manager",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    },
    {
      name: "Michael Smith",
      role: "Fleet Operations Supervisor",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    },
    {
      name: "Sarah Davis",
      role: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800",
    },
    {
      name: "David Lee",
      role: "Business Development Manager",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
    },
  ];

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="bg-white pt-32 pb-16 px-6 font-sans text-[#2d2d2d]">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Who we are
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-[#555555] text-base md:text-lg space-y-4 mb-16"
          >
            <p>
              Founded with a passion for making city travel easy and accessible...
            </p>
            <p>
              Our mission is to provide seamless and affordable transportation...
            </p>
          </motion.div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-4"
              >
                <div className="text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-[#555]">{stat.text}</p>
              </motion.div>
            ))}
          </div>

          {/* CAR IMAGE */}
          <motion.img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="w-full h-[300px] md:h-[500px] object-cover rounded-[40px] shadow-2xl"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-left">

          <h2 className="text-3xl font-bold mb-6">Our mission</h2>

          <p className="text-[#555] mb-12">
            Our mission is to provide exceptional car rental services...
          </p>

          <h2 className="text-3xl font-bold mb-6">Our values</h2>

          <ul className="space-y-6">
            {values.map((v, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3"
              >
                <span className="w-2 h-2 bg-black mt-2"></span>
                <p>
                  <b>{v.title}:</b> {v.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16">Our team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-md mb-6">
                  <img
                    src={member.image}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-[#555] text-sm mt-2">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;