import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const cases = [
    { title: "BPO Engagement Growth", stat: "300%", desc: "Increased brand engagement for a BPO in 90 days." },
    { title: "Fashion Brand ROAS", stat: "4x", desc: "Helped a fashion brand achieve 4x ROAS through Meta ads." },
    { title: "Healthcare SEO", stat: "220%", desc: "Boosted website traffic using strategic SEO." },
    { title: "Real Estate Leads", stat: "Qualified", desc: "Generated high-quality leads within the first month." }
  ];

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] sky:bg-white pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black sky:text-primary mb-8 transition-colors uppercase tracking-tighter">Our Work Speaks for Itself</h1>
          <p className="text-xl text-white/60 dark:text-white/60 light:text-black/60 sky:text-primary/60 transition-colors">We’ve helped dozens of brands go from invisible to unforgettable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative aspect-[16/10] rounded-3xl overflow-hidden bg-white/5 dark:bg-white/5 light:bg-white sky:bg-white border border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 p-12 flex flex-col justify-between hover:border-white/30 dark:hover:border-white/30 light:hover:border-black/30 sky:hover:border-primary/30 transition-all transition-colors"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-medium text-white dark:text-white light:text-black sky:text-primary max-w-[200px] transition-colors">{item.title}</h3>
                <div className="w-12 h-12 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 flex items-center justify-center text-white dark:text-white light:text-black sky:text-primary group-hover:bg-white blue:group-hover:bg-primary dark:group-hover:bg-white light:group-hover:bg-black sky:group-hover:bg-primary group-hover:text-black blue:group-hover:text-white dark:group-hover:text-black light:group-hover:text-white sky:group-hover:text-white transition-all transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div>
                <span className="text-6xl font-bold text-white dark:text-white light:text-black sky:text-primary block mb-4 transition-colors">{item.stat}</span>
                <p className="text-white/60 dark:text-white/60 light:text-black/60 sky:text-primary/60 text-lg transition-colors">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-3xl font-medium text-white dark:text-white light:text-black sky:text-primary mb-8 transition-colors">Ready to be our next success story?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact" className="px-8 py-4 rounded-full bg-white blue:bg-primary dark:bg-white light:bg-black sky:bg-primary text-black blue:text-white dark:text-black light:text-white sky:text-white font-medium hover:scale-105 transition-transform transition-colors">See Our Case Studies</a>
            <a href="/contact" className="px-8 py-4 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 sky:bg-primary/10 text-white dark:text-white light:text-black sky:text-primary font-medium hover:scale-105 transition-transform transition-colors">Let’s Create Yours</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
