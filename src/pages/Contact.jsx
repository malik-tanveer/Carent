import React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  MapPin,
  Hourglass,
  Mail,
  Phone,
} from "lucide-react";

import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  // Validation
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    phone: Yup.string()
      .min(11, "Invalid phone number")
      .required("Phone number is required"),

    message: Yup.string()
      .min(10, "Minimum 10 characters")
      .required("Message is required"),
  });

  // Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema,

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      alert("Message Sent Successfully!");

      resetForm();
    },
  });

  return (
    <section className=" min-h-screen px-4 md:px-10 py-20 mt-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[900px]"
      >
        <h1 className="text-6xl md:text-8xl font-semibold text-black leading-tight">
          Contact us!
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mt-6 leading-relaxed">
          Whether you have questions, feedback, or need assistance, our
          team is here to help. Reach out to us through any of the
          channels below, and we’ll get back to you as soon as possible.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-24">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold mb-14">
            Our contact details
          </h2>

          <div className="space-y-14">
            {/* Support */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-5"
            >
              <div className="bg-white p-4 rounded-2xl shadow-md">
                <Headphones size={30} />
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-3">
                  Support
                </h3>

                <div className="space-y-2 text-gray-600 text-lg">
                  <p className="flex items-center gap-2">
                    <Mail size={18} />
                    example@gmail.com
                  </p>

                  <p className="flex items-center gap-2">
                    <Phone size={18} />
                    (+91) 125 888 666
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-5"
            >
              <div className="bg-white p-4 rounded-2xl shadow-md">
                <MapPin size={30} />
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-3">
                  Address
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Chicago HQ Estica Cop.
                  <br />
                  Macomb, MI 48042
                </p>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-5"
            >
              <div className="bg-white p-4 rounded-2xl shadow-md">
                <Hourglass size={30} />
              </div>

              <div>
                <h3 className="text-3xl font-semibold mb-3">
                  Working hours
                </h3>

                <div className="text-gray-600 text-lg space-y-2">
                  <p>Mon - Thu: 11am - 7pm</p>
                  <p>Friday: 11am - 6pm</p>
                  <p>Saturday: 10am - 4pm</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#ececec] rounded-[35px] p-8 md:p-12 shadow-lg"
        >
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-8"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-lg mb-3 font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-[60px] rounded-2xl border border-gray-300 bg-white px-5 outline-none focus:border-black transition-all"
                />

                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg mb-3 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full h-[60px] rounded-2xl border border-gray-300 bg-white px-5 outline-none focus:border-black transition-all"
                />

                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg mb-3 font-medium">
                Phone number
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Enter your number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full h-[60px] rounded-2xl border border-gray-300 bg-white px-5 outline-none focus:border-black transition-all"
              />

              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-2">
                  {formik.errors.phone}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg mb-3 font-medium">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none resize-none focus:border-black transition-all"
              ></textarea>

              {formik.touched.message &&
                formik.errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {formik.errors.message}
                  </p>
                )}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-black text-yellow-400 px-10 py-4 rounded-2xl text-lg font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;