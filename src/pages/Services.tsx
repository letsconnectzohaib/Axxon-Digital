import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Share2, Palette, TrendingUp, Search, Globe, UserCheck, ArrowRight } from 'lucide-react';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

const Services: React.FC = () => {
  const expertise = [
    {
      id: "1",
      title: "Social Media Marketing",
      icon: Share2,
      desc: "We build your brand where your audience lives — Instagram, Facebook, TikTok, and LinkedIn. From viral reels to ad campaigns, our strategies turn engagement into conversions.",
      includes: ["Social media strategy & management", "Ad campaigns (Meta, TikTok, LinkedIn)", "Content planning & design"],
      image: "https://picsum.photos/seed/social/800/600"
    },
    {
      id: "2",
      title: "Branding & Creative Design",
      icon: Palette,
      desc: "Your brand identity speaks before you do. We design logos, visuals, and campaigns that make your brand unforgettable.",
      includes: ["Logo & brand kit design", "Ad banners, videos, and social visuals", "Brand storytelling strategy"],
      image: "https://picsum.photos/seed/brand/800/600"
    },
    {
      id: "3",
      title: "Performance Marketing",
      icon: TrendingUp,
      desc: "Turn clicks into customers with powerful ad strategies. We handle your campaigns from setup to reporting — optimizing for ROI every step of the way.",
      includes: ["Meta & Google Ads", "Conversion tracking", "A/B testing & performance reports"],
      image: "https://picsum.photos/seed/performance/800/600"
    },
    {
      id: "4",
      title: "SEO & Content Marketing",
      icon: Search,
      desc: "Get found when it matters most. Our SEO and content experts boost your visibility across Google and help build lasting organic traffic.",
      includes: ["On-page & off-page SEO", "Blog writing & keyword optimization", "Website audit & technical SEO"],
      image: "https://picsum.photos/seed/seo/800/600"
    },
    {
      id: "5",
      title: "Website Development",
      icon: Globe,
      desc: "Your website is your digital storefront — we make it stunning, responsive, and fast.",
      includes: ["Business websites & landing pages", "eCommerce stores", "UX/UI design & maintenance"],
      image: "https://picsum.photos/seed/web/800/600"
    },
    {
      id: "6",
      title: "Corporate & Personal Branding",
      icon: UserCheck,
      desc: "Stand out as a professional or company. We build your online reputation across LinkedIn, social media, and search results.",
      includes: ["Personal branding strategy", "Visual identity setup", "Content & engagement plan"],
      image: "https://picsum.photos/seed/corporate/800/600"
    }
  ];

  const industries = [
    "BPOs / Call Centers", "E-commerce Brands", "Real Estate", "Healthcare", 
    "Fashion & Lifestyle", "Tech & SaaS", "Food & Beverage", "Fintech"
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="sticky top-40"
            >
              <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-6 transition-colors leading-tight">
                <TextReveal text="Our Expertise" />
              </h1>
              <p className="text-xl text-white/60 dark:text-white/60 light:text-black/60 transition-colors mb-8 leading-relaxed">
                We deliver end-to-end digital solutions designed to elevate your brand, engage your audience, and drive measurable growth.
              </p>
              <div className="hidden lg:block w-24 h-1 bg-primary/50 dark:bg-white/20 light:bg-black/20 rounded-full" />
            </motion.div>
          </div>
          
          <div className="lg:w-2/3 flex flex-col gap-8">
            {isLoading ? (
              // Skeleton Loader
              Array.from({ length: 4 }).map((_, i) => (
                <div key={`skeleton-${i}`} className="w-full p-8 md:p-12 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 animate-pulse flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-white/10 light:bg-black/10" />
                      <div className="w-8 h-6 rounded bg-white/10 dark:bg-white/10 light:bg-black/10" />
                    </div>
                    <div className="h-10 w-3/4 bg-white/10 dark:bg-white/10 light:bg-black/10 rounded mb-4" />
                    <div className="h-4 w-full bg-white/10 dark:bg-white/10 light:bg-black/10 rounded mb-2" />
                    <div className="h-4 w-5/6 bg-white/10 dark:bg-white/10 light:bg-black/10 rounded mb-8" />
                    <div className="flex flex-wrap gap-3">
                      <div className="h-8 w-32 bg-white/10 dark:bg-white/10 light:bg-black/10 rounded-full" />
                      <div className="h-8 w-40 bg-white/10 dark:bg-white/10 light:bg-black/10 rounded-full" />
                    </div>
                  </div>
                  <div className="hidden md:block w-16 h-16 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 shrink-0" />
                </div>
              ))
            ) : (
              expertise.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                >
                <TiltCard className="w-full">
                  <div className="p-8 md:p-12 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 transition-all duration-300 group relative overflow-hidden flex flex-col md:flex-row gap-8 items-start md:items-center justify-between w-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-white/5 light:hover:shadow-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
                          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: i * 0.1 + 0.2, 
                            type: "spring", 
                            stiffness: 120,
                            damping: 15
                          }}
                          className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-white/10 light:bg-black/5 flex items-center justify-center group-hover:bg-primary dark:group-hover:bg-white light:group-hover:bg-black transition-colors"
                        >
                          <item.icon className="text-white dark:text-white light:text-black group-hover:text-white dark:group-hover:text-black light:group-hover:text-white transition-colors" size={28} />
                        </motion.div>
                        <span className="text-white/20 dark:text-white/20 light:text-black/20 font-mono text-xl transition-colors">{item.id}</span>
                      </div>
                      
                      <h3 className="font-medium text-3xl md:text-4xl text-white dark:text-white light:text-black mb-4 transition-colors group-hover:text-primary dark:group-hover:text-white light:group-hover:text-primary">{item.title}</h3>
                      <p className="text-white/60 dark:text-white/60 light:text-black/60 mb-8 leading-relaxed transition-colors text-lg max-w-2xl">{item.desc}</p>
                      
                      <div className="flex flex-wrap gap-3 relative z-10">
                        {item.includes.map((inc, j) => (
                          <span key={j} className="px-4 py-2 rounded-full text-sm bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-white/80 dark:text-white/80 light:text-black/80 transition-colors group-hover:border-white/30 dark:group-hover:border-white/30 light:group-hover:border-black/30">
                            {inc}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative z-10 hidden md:flex w-16 h-16 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 items-center justify-center group-hover:bg-white dark:group-hover:bg-white light:group-hover:bg-black group-hover:border-transparent transition-all duration-300 shrink-0">
                      <ArrowRight className="text-white/40 dark:text-white/40 light:text-black/40 group-hover:text-black dark:group-hover:text-black light:group-hover:text-white group-hover:-rotate-45 transition-all duration-300" size={24} />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))
            )}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/5 dark:bg-white/5 light:bg-black/5 transition-colors">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-medium text-white dark:text-white light:text-black mb-12 text-center transition-colors">
            <TextReveal text="Industries We Serve" className="justify-center" />
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 text-white/80 dark:text-white/80 light:text-black/80 hover:border-white/40 dark:hover:border-white/40 light:hover:border-black/40 transition-colors cursor-default transition-colors">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
