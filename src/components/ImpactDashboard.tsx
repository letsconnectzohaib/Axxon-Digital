import React from 'react';
import { motion } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';

const ImpactDashboard: React.FC = () => {
  const stats = [
    { label: "Brands Empowered", value: 500, suffix: "+" },
    { label: "Projects Delivered", value: 1200, suffix: "+" },
    { label: "Hours Saved", value: 50000, suffix: "+" },
    { label: "Global Uptime", value: 99.9, suffix: "%" },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto border-b border-white/10 dark:border-white/10 light:border-black/10">
      <div className="mb-16">
        <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">Impact</h2>
        <h3 className="text-4xl md:text-5xl font-medium text-white dark:text-white light:text-black">
          Measurable Results, <span className="italic font-serif">Real Impact</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/30 dark:hover:border-white/30 light:hover:border-black/30 transition-all"
          >
            <div className="text-4xl font-bold font-mono text-white dark:text-white light:text-black mb-2">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-white/60 dark:text-white/60 light:text-black/60 uppercase tracking-wider font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactDashboard;
