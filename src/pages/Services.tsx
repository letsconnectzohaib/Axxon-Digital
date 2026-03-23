import React from 'react';
import { motion } from 'motion/react';
import { Share2, Palette, TrendingUp, Search, Globe, UserCheck } from 'lucide-react';

const Services: React.FC = () => {
  const expertise = [
    {
      id: "1",
      title: "Social Media Marketing",
      icon: Share2,
      desc: "We build your brand where your audience lives — Instagram, Facebook, TikTok, and LinkedIn. From viral reels to ad campaigns, our strategies turn engagement into conversions.",
      includes: ["Social media strategy & management", "Ad campaigns (Meta, TikTok, LinkedIn)", "Content planning & design"]
    },
    {
      id: "2",
      title: "Branding & Creative Design",
      icon: Palette,
      desc: "Your brand identity speaks before you do. We design logos, visuals, and campaigns that make your brand unforgettable.",
      includes: ["Logo & brand kit design", "Ad banners, videos, and social visuals", "Brand storytelling strategy"]
    },
    {
      id: "3",
      title: "Performance Marketing",
      icon: TrendingUp,
      desc: "Turn clicks into customers with powerful ad strategies. We handle your campaigns from setup to reporting — optimizing for ROI every step of the way.",
      includes: ["Meta & Google Ads", "Conversion tracking", "A/B testing & performance reports"]
    },
    {
      id: "4",
      title: "SEO & Content Marketing",
      icon: Search,
      desc: "Get found when it matters most. Our SEO and content experts boost your visibility across Google and help build lasting organic traffic.",
      includes: ["On-page & off-page SEO", "Blog writing & keyword optimization", "Website audit & technical SEO"]
    },
    {
      id: "5",
      title: "Website Development",
      icon: Globe,
      desc: "Your website is your digital storefront — we make it stunning, responsive, and fast.",
      includes: ["Business websites & landing pages", "eCommerce stores", "UX/UI design & maintenance"]
    },
    {
      id: "6",
      title: "Corporate & Personal Branding",
      icon: UserCheck,
      desc: "Stand out as a professional or company. We build your online reputation across LinkedIn, social media, and search results.",
      includes: ["Personal branding strategy", "Visual identity setup", "Content & engagement plan"]
    }
  ];

  const industries = [
    "BPOs / Call Centers", "E-commerce Brands", "Real Estate", "Healthcare", 
    "Fashion & Lifestyle", "Tech & SaaS", "Food & Beverage", "Fintech"
  ];

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-16 transition-colors">Our Expertise</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 transition-colors"
            >
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
              <h3 className="text-2xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">{item.title}</h3>
              <p className="text-white/60 dark:text-white/60 light:text-black/60 mb-8 leading-relaxed transition-colors">{item.desc}</p>
              <div className="space-y-3">
                <p className="text-sm font-medium text-white/40 dark:text-white/40 light:text-black/40 uppercase tracking-wider transition-colors">Includes:</p>
                {item.includes.map((inc, j) => (
                  <div key={j} className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-black/80 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30 dark:bg-white/30 light:bg-black/30 transition-colors" />
                    {inc}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white/5 dark:bg-white/5 light:bg-black/5 transition-colors">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-medium text-white dark:text-white light:text-black mb-12 text-center transition-colors">Industries We Serve</h2>
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
