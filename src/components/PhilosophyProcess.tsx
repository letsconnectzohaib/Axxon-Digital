import React from 'react';
import { motion } from 'motion/react';

const PhilosophyProcess: React.FC = () => {
  const steps = [
    { title: "Discovery", desc: "We listen, learn, and align with your vision." },
    { title: "Strategy", desc: "We craft a roadmap for your brand's growth." },
    { title: "Execution", desc: "We build, design, and launch with precision." },
    { title: "Optimization", desc: "We iterate, analyze, and scale for results." },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 max-w-[1800px] mx-auto bg-[#f5f5f0] dark:bg-[#1a1a1a] light:bg-[#f5f5f0] rounded-[32px] transition-colors">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-serif italic text-[#5A5A40] dark:text-[#d1d1c7] mb-6">Our Philosophy</h2>
        <p className="text-xl text-[#5A5A40]/80 dark:text-[#d1d1c7]/80 max-w-2xl mx-auto">
          We believe in human-centric design, data-driven decisions, and building relationships that last.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[32px] bg-white dark:bg-[#262626] shadow-sm border border-[#e5e5e0] dark:border-[#333]"
          >
            <div className="text-4xl font-serif italic text-[#5A5A40] dark:text-[#d1d1c7] mb-6">0{i + 1}</div>
            <h4 className="text-2xl font-medium text-[#1a1a1a] dark:text-white mb-4">{step.title}</h4>
            <p className="text-[#5A5A40]/70 dark:text-[#d1d1c7]/70 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhilosophyProcess;
