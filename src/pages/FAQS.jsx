import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FaqSection = () => {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "What documents are required to rent a car?",
      answer:
        "You'll need a valid driver's license, a government-issued ID, and a credit or debit card. Some rentals may require additional documents based on location or vehicle type.",
    },
    {
      id: 2,
      question: "How do I book a car rental?",
      answer:
        "You can book directly on our website, mobile app, or by visiting our rental office. Select your preferred car, rental duration, and pickup/drop-off locations.",
    },
    {
      id: 3,
      question: "Is there a free trial available?",
      answer:
        "Basic insurance is included in most rentals. Additional coverage options, like collision damage waivers, can be purchased at the time of booking.",
    },
    {
      id: 4,
      question: "Can someone else drive the rental car?",
      answer:
        "Yes, but they must be added as an authorized driver on the rental agreement. Additional driver fees may apply.",
    },
    {
      id: 5,
      question:
        "Can I take the rental car across state or international borders?",
      answer:
        "This depends on the rental company's policies. Cross-border travel often requires prior approval and additional fees.",
    },
    {
      id: 6,
      question: "What happens if I return the car late?",
      answer:
        "Late returns may incur additional charges. Contact the rental office if you anticipate being late to avoid penalties.",
    },
    {
      id: 7,
      question: "What is the minimum age to rent a car?",
      answer:
        "The minimum age is typically 21, but it can vary by location. Drivers under 25 may be subject to a young driver surcharge.",
    },
    {
      id: 8,
      question: "Are there any discounts available?",
      answer:
        "Yes, we offer discounts for early bookings, long-term rentals, and memberships. Check our website or promotions page for details.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-28 mt-20 px-4 md:px-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-semibold text-[#111111] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mt-5 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our
            car rental services, booking process, and policies.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`rounded-[28px] overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "bg-black border-black shadow-2xl"
                    : "bg-[#f5f5f5] border-transparent"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left p-7 md:p-8"
                >
                  <span
                    className={`text-xl md:text-2xl font-medium pr-5 transition-all duration-300 ${
                      isOpen ? "text-yellow-400" : "text-[#111111]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`min-w-[45px] h-[45px] rounded-full flex items-center justify-center ${
                      isOpen
                        ? "bg-yellow-400 text-black"
                        : "bg-white text-black"
                    }`}
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-7 pb-7 md:px-8 md:pb-8">
                        <p className="text-base md:text-lg leading-relaxed text-gray-300">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;