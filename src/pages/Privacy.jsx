import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="py-28 mt-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-semibold text-black leading-tight">
            Privacy Policy
          </h1>

          <p className="text-gray-500 text-lg mt-5">
            Last updated: December 15, 2024
          </p>
        </motion.div>

        {/* Collecting Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-[30px] p-8 md:p-10 shadow-md mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Collecting Personal Information
          </h2>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the
              first true generator on the Internet.
            </p>

            <p>
              It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                There are many variations of passages of Lorem Ipsum
                available.
              </li>

              <li>
                Iusto odio dignissimos ducimus qui blanditiis.
              </li>

              <li>
                Praesentium voluptatum deleniti atque.
              </li>

              <li>
                Quas molestias excepturi sint occaecati.
              </li>
            </ul>

            <p>
              The standard chunk of Lorem Ipsum used since the 1500s
              is reproduced below for those interested.
            </p>
          </div>
        </motion.div>

        {/* Sharing Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-[30px] p-8 md:p-10 shadow-md mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Sharing Personal Information
          </h2>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in
              some form.
            </p>

            <p>
              All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the
              first true generator on the Internet.
            </p>

            <p>
              It uses a dictionary of over 200 Latin words, combined
              with a handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>Sometimes on purpose.</li>
              <li>Classical Latin literature from 45 BC.</li>
              <li>The Extremes of Good and Evil.</li>
              <li>This book is a treatise on the theory.</li>
            </ul>

            <p>
              Combined with a handful of model sentence structures,
              to generate Lorem Ipsum which looks reasonable. The
              generated Lorem Ipsum is therefore always free from
              repetition, injected humour, or non-characteristic
              words etc.
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black rounded-[30px] p-8 md:p-10 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-yellow-400">
            Your Privacy Matters
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            We are committed to protecting your personal information
            and ensuring transparency in how your data is collected,
            used, and shared. By using our services, you agree to the
            practices outlined in this privacy policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;