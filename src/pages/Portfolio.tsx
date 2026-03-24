import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MagneticButton from '../components/MagneticButton';
import TextReveal from '../components/TextReveal';
import { portfolioCases } from '../data/portfolio';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Marketing', 'Performance', 'SEO', 'Branding', 'Web Development'];

  const filteredCases = filter === 'All' ? portfolioCases : portfolioCases.filter(c => c.category === filter);

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-8 transition-colors uppercase tracking-tighter">
            <TextReveal text="Our Work Speaks for Itself" />
          </h1>
          <p className="text-xl text-white/60 dark:text-white/60 light:text-black/60 transition-colors">We’ve helped dozens of brands go from invisible to unforgettable.</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <MagneticButton
              key={cat}
              onClick={() => setFilter(cat)}
              aria-label={`Filter by ${cat}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden border ${
                filter === cat 
                  ? 'border-primary/50 text-white dark:text-black light:text-white shadow-[0_0_15px_rgba(0,102,255,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] light:shadow-[0_0_15px_rgba(0,0,0,0.2)]' 
                  : 'border-white/10 dark:border-white/10 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 text-white/60 dark:text-white/60 light:text-black/60 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 hover:border-white/30 dark:hover:border-white/30 light:hover:border-black/30'
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="portfolio-active-filter"
                  className="absolute inset-0 bg-primary dark:bg-white light:bg-black z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </MagneticButton>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 20 }}
                onClick={() => navigate(`/portfolio/${item.id}`)}
                className="group relative aspect-[16/10] rounded-3xl overflow-hidden bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 p-12 flex flex-col justify-between hover:border-white/30 dark:hover:border-white/30 light:hover:border-black/30 transition-all transition-colors hover:scale-[1.02] duration-300 cursor-pointer"
              >
                {/* Parallax Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                
                <div className="absolute inset-0 z-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <h3 className="text-2xl font-medium text-white dark:text-white light:text-black max-w-[200px] transition-colors">{item.title}</h3>
                  <div className="w-12 h-12 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-white dark:text-white light:text-black group-hover:bg-white blue:group-hover:bg-primary dark:group-hover:bg-white light:group-hover:bg-black group-hover:text-black blue:group-hover:text-white dark:group-hover:text-black light:group-hover:text-white transition-all transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <div className="relative z-10">
                  <span className="text-6xl font-bold text-white dark:text-white light:text-black block mb-4 transition-colors">{item.stat}</span>
                  <p className="text-white/60 dark:text-white/60 light:text-black/60 text-lg transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-32 text-center">
          <h2 className="text-3xl font-medium text-white dark:text-white light:text-black mb-8 transition-colors">
            <TextReveal text="Ready to be our next success story?" className="justify-center" />
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MagneticButton href="/contact" className="px-8 py-4 rounded-full bg-white blue:bg-primary dark:bg-white light:bg-black text-black blue:text-white dark:text-black light:text-white font-medium transition-transform transition-colors shadow-lg">See Our Case Studies</MagneticButton>
            <MagneticButton href="/contact" className="px-8 py-4 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 text-white dark:text-white light:text-black font-medium transition-transform transition-colors">Let’s Create Yours</MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
