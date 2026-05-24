import React from "react";
import { motion } from "framer-motion";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image:
        "/blog1.png",
      title: "Effective lead generation tips",
      date: "December 9, 2024",
    },
    {
      id: 2,
      image:
        "/blog2.png",
      title: "Maximizing sales growth strategies",
      date: "December 9, 2024",
    },
    {
      id: 3,
      image:
        "/blog3.png",
      title: "Client retention best practices",
      date: "December 9, 2024",
    },
    {
      id: 4,
      image:
        "/blog4.png",
      title: "Mastering negotiation for success",
      date: "December 9, 2024",
    },
    {
      id: 5,
      image:
        "/blog5.png",
      title: "Team collaboration for growth",
      date: "December 9, 2024",
    },
    {
      id: 6,
      image:
        "/blog6.png",
      title: "Business development trends 2024",
      date: "December 9, 2024",
    },
  ];

  return (
    <section className="mt-20 py-24 px-4 md:px-10 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-semibold text-black">
          Latest Blogs
        </h2>

        <p className="text-gray-600 text-lg md:text-xl mt-5 max-w-3xl mx-auto leading-relaxed">
          Explore our latest insights, business strategies, and
          development trends to stay ahead in the digital world.
        </p>
      </motion.div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-[30px] aspect-[16/10] mb-5">
              <motion.img
                src={blog.image}
                alt={blog.title}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Text */}
            <div className="space-y-3">
              <motion.h3
                whileHover={{ x: 5 }}
                className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight tracking-tight group-hover:text-yellow-500 transition-colors duration-300"
              >
                {blog.title}
              </motion.h3>

              <p className="text-base text-gray-500 font-medium">
                {blog.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;