import React from 'react';
import { motion } from 'motion/react';
import { Share2, Palette, TrendingUp, Search, Globe, UserCheck } from 'lucide-react';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';
import HoverImageReveal from '../components/HoverImageReveal';

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

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-16 transition-colors">
          <TextReveal text="Our Expertise" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`${i === 0 || i === 3 ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <TiltCard className="h-full">
                <HoverImageReveal imageSrc={item.image} className="h-full">
                  <div className="p-10 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 transition-colors group relative overflow-hidden flex flex-col justify-between h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
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
                          className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/10 light:bg-black/10 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-white/20 light:group-hover:bg-black/20 transition-colors"
                        >
                          <item.icon className="text-white dark:text-white light:text-black group-hover:scale-110 transition-transform transition-colors" size={24} />
                        </motion.div>
                        <span className="text-white/20 dark:text-white/20 light:text-black/20 font-mono transition-colors">{item.id}</span>
                      </div>
                      <h3 className={`font-medium text-white dark:text-white light:text-black mb-4 transition-colors ${i === 0 || i === 3 ? 'text-4xl' : 'text-2xl'}`}>{item.title}</h3>
                      <p className={`text-white/60 dark:text-white/60 light:text-black/60 mb-8 leading-relaxed transition-colors ${i === 0 || i === 3 ? 'text-lg max-w-2xl' : 'text-base'}`}>{item.desc}</p>
                    </div>
                    <div className="space-y-3 relative z-10 mt-auto">
                      <p className="text-sm font-medium text-white/40 dark:text-white/40 light:text-black/40 uppercase tracking-wider transition-colors">Includes:</p>
                      {item.includes.map((inc, j) => (
                        <div key={j} className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-black/80 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30 dark:bg-white/30 light:bg-black/30 transition-colors" />
                          {inc}
                        </div>
                      ))}
                    </div>
                  </div>
                </HoverImageReveal>
              </TiltCard>
            </motion.div>
          ))}
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
