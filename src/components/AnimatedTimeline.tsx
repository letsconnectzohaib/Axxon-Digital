import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We dive deep into your brand, audience, and goals to craft a tailored roadmap for success.",
    number: "01"
  },
  {
    title: "Creative Execution",
    desc: "Our team designs, writes, and builds compelling assets that capture attention and tell your story.",
    number: "02"
  },
  {
    title: "Launch & Optimization",
    desc: "We deploy campaigns across the right channels and continuously monitor performance to maximize ROI.",
    number: "03"
  },
  {
    title: "Performance & Scaling",
    desc: "Using data-driven insights, we refine strategies to scale your growth and achieve long-term impact.",
    number: "04"
  }
];

const AnimatedTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-24 px-6">
      <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 dark:bg-white/10 light:bg-black/10 transition-colors" />
      <motion.div 
        className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[3px] -ml-[1px] bg-primary dark:bg-white light:bg-black origin-top transition-colors"
        style={{ height: lineHeight }}
      />

      <div className="space-y-24">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-1/2" />
              
              <div className="absolute left-0 md:left-1/2 w-14 h-14 -ml-7 rounded-full bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] border-4 border-primary dark:border-white light:border-black flex items-center justify-center z-10 transition-colors">
                <span className="text-white dark:text-white light:text-black font-bold font-mono transition-colors">{step.number}</span>
              </div>

              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-black mb-4 transition-colors">{step.title}</h3>
                <p className="text-white/60 dark:text-white/60 light:text-black/60 leading-relaxed transition-colors">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
