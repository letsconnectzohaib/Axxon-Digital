import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of digital services including Social Media Marketing, Branding & Design, Performance Marketing, SEO & Content, and Web Development."
  },
  {
    question: "How can I get a quote?",
    answer: "You can fill out the contact form on this page with your details and the services you are interested in, and our team will get back to you with a personalized quote."
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround time depends on the scope and complexity of the project. During our initial consultation, we will provide you with a clear timeline."
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely! We love working with startups and helping them build their digital presence from the ground up."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 lg:px-12 max-w-[1000px] mx-auto">
      <h2 className="text-4xl md:text-5xl font-medium text-white dark:text-white light:text-black mb-12 text-center transition-colors">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-white/10 dark:border-white/10 light:border-black/10 rounded-2xl overflow-hidden bg-white/5 dark:bg-white/5 light:bg-white/50 transition-colors">
            <button
              className="w-full flex items-center justify-between p-6 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium text-white dark:text-white light:text-black transition-colors">{item.question}</span>
              {openIndex === index ? (
                <Minus className="text-white/60 dark:text-white/60 light:text-black/60" />
              ) : (
                <Plus className="text-white/60 dark:text-white/60 light:text-black/60" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-white/60 dark:text-white/60 light:text-black/60 transition-colors"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
