import React from "react";
import { motion } from "framer-motion";

const TermsConditions = () => {
  return (
    <section className=" py-28 mt-20 px-4 md:px-10 overflow-hidden">
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
            Terms & Conditions
          </h1>

          <p className="text-gray-500 text-lg mt-5">
            Last updated: December 15, 2024
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-14">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] p-8 md:p-10 shadow-md"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Introduction
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

              <p>
                Family months lasted simply set nature vulgar him.
                Picture for attempt joy excited ten carried manners
                talking how. Suspicion neglected the resolving
                agreement perceived at an.
              </p>
            </div>
          </motion.div>

          {/* Purchases */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] p-8 md:p-10 shadow-md"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Purchases
            </h2>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Comfort reached gay perhaps chamber his six detract
                besides add. Moonlight newspaper up its enjoyment
                agreeable depending.
              </p>

              <p>
                Timed voice share led him to widen noisy young. At
                weddings believed in laughing although the material
                does the exercise of.
              </p>

              <p>
                Satisfied conveying a dependent contented he gentleman
                agreeable do be. Delivered dejection necessary
                objection do Mr prevailed.
              </p>
            </div>
          </motion.div>

          {/* Communications */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] p-8 md:p-10 shadow-md"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Communications
            </h2>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration
                in some form.
              </p>

              <p>
                All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the
                first true generator on the Internet.
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Sometimes on purpose.</li>
                <li>Classical Latin literature from 45 BC.</li>
                <li>The Extremes of Good and Evil.</li>
                <li>This book is a treatise on the theory.</li>
              </ul>

              <p>
                Combined with a handful of model sentence structures,
                to generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
          </motion.div>

          {/* Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-[30px] p-8 md:p-10 shadow-md"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Acknowledgment
            </h2>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Passage its ten led hearted removal cordial.
                Preference any astonished unreserved Mrs.
              </p>

              <p>
                Prosperous understood Middletons in conviction an
                uncommonly do. Supposing so be resolving breakfast am
                or perfectly.
              </p>

              <p>
                Family months lasted simply set nature vulgar him.
                Picture for attempt joy excited ten carried manners
                talking how.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black rounded-[30px] p-8 md:p-10 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-yellow-400">
              Contact us
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Please send your feedback, comments, and requests for
              technical support at:
            </p>

            <a
              href="mailto:hello@example.com"
              className="inline-block mt-5 text-2xl md:text-3xl font-semibold text-white hover:text-yellow-400 transition-all duration-300"
            >
              hello@example.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;