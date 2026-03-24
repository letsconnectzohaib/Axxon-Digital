import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Award, TrendingUp } from 'lucide-react';

const TrustBanner: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-[1800px] mx-auto px-6 lg:px-12 -mt-12 relative z-30"
    >
      <div className="bg-[#0D0C1D]/80 blue:bg-[#050510]/80 dark:bg-[#0A0A0A]/90 light:bg-white/80 sky:bg-white/80 backdrop-blur-2xl rounded-2xl border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 p-8 md:p-10 flex flex-wrap items-center justify-between gap-10 transition-all shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] light:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] sky:shadow-[0_32px_64px_-16px_rgba(59,130,246,0.1)]">
        
        {/* Rating Section */}
        <div className="flex items-center gap-6 relative">
          {/* Redesigned Callout */}
          <div className="absolute -top-12 -left-4 hidden md:block">
            <motion.div
              initial={{ rotate: -15, opacity: 0, scale: 0.8 }}
              whileInView={{ rotate: -12, opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="font-hand text-2xl text-primary blue:text-primary dark:text-white/60 light:text-black/60 sky:text-primary/60 whitespace-nowrap">
                Trusted by 500+ Brands
              </span>
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-primary/40 blue:text-primary/40 dark:text-white/20 light:text-black/20 sky:text-primary/20 -mt-1">
                <path d="M2 2C10 15 30 15 38 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FF4F33] rounded flex items-center justify-center shadow-lg shadow-[#FF4F33]/20">
                <span className="text-white font-black text-sm">G</span>
              </div>
              <span className="text-4xl md:text-5xl font-black text-white blue:text-white dark:text-white light:text-black sky:text-primary tracking-tighter transition-colors">4.7</span>
              <div className="flex gap-0.5 ml-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star 
                    key={i} 
                    fill={i <= 4 ? "#FFB400" : "transparent"} 
                    stroke="#FFB400" 
                    size={18} 
                    className={i <= 4 ? "drop-shadow-[0_0_8px_rgba(255,180,0,0.3)]" : "opacity-20"}
                  />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40 sky:text-primary/40 uppercase tracking-[0.25em] font-bold ml-11">Verified G2 Rating</span>
          </div>
        </div>

        {/* Stats/Awards Section */}
        <div className="flex flex-wrap items-center gap-8 md:gap-16">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 sky:bg-primary/5 flex items-center justify-center border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 group-hover:border-primary/50 transition-colors">
              <ShieldCheck className="text-primary blue:text-primary dark:text-white light:text-black sky:text-primary" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white blue:text-white dark:text-white light:text-black sky:text-primary leading-tight transition-colors">High Performer</span>
              <span className="text-[10px] text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40 sky:text-primary/40 uppercase tracking-widest font-bold">Winter 2024</span>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 sky:bg-primary/5 flex items-center justify-center border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 group-hover:border-primary/50 transition-colors">
              <Award className="text-primary blue:text-primary dark:text-white light:text-black sky:text-primary" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white blue:text-white dark:text-white light:text-black sky:text-primary leading-tight transition-colors">Market Leader</span>
              <span className="text-[10px] text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40 sky:text-primary/40 uppercase tracking-widest font-bold">Global Agency</span>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 sky:bg-primary/5 flex items-center justify-center border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 group-hover:border-primary/50 transition-colors">
              <TrendingUp className="text-primary blue:text-primary dark:text-white light:text-black sky:text-primary" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white blue:text-white dark:text-white light:text-black sky:text-primary leading-tight transition-colors">Top 1% ROI</span>
              <span className="text-[10px] text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40 sky:text-primary/40 uppercase tracking-widest font-bold">Performance First</span>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="hidden xl:block">
          <div className="px-6 py-3 rounded-full bg-primary/10 blue:bg-primary/10 dark:bg-white/5 light:bg-black/5 sky:bg-primary/5 border border-primary/20 blue:border-primary/20 dark:border-white/10 light:border-black/10 sky:border-primary/10 backdrop-blur-sm">
            <span className="text-xs font-black text-primary blue:text-primary dark:text-white light:text-black sky:text-primary uppercase tracking-[0.2em]">Certified Partner</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrustBanner;
