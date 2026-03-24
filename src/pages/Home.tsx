import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Rocket, Phone, ArrowRight, Share2, Palette, TrendingUp, Search, Globe, UserCheck } from 'lucide-react';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import UserReviews from '../components/UserReviews';

import Marquee from '../components/Marquee';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

const Home: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "Social Media Marketing",
      icon: Share2,
      desc: "We build your brand where your audience lives — Instagram, Facebook, TikTok, and LinkedIn. From viral reels to ad campaigns, our strategies turn engagement into conversions.",
      includes: ["Social media strategy & management", "Ad campaigns (Meta, TikTok, LinkedIn)", "Content planning & design"],
    },
    {
      id: "02",
      title: "Branding & Creative Design",
      icon: Palette,
      desc: "Your brand identity speaks before you do. We design logos, visuals, and campaigns that make your brand unforgettable.",
      includes: ["Logo & brand kit design", "Ad banners, videos, and social visuals", "Brand storytelling strategy"],
    },
    {
      id: "03",
      title: "Performance Marketing",
      icon: TrendingUp,
      desc: "Turn clicks into customers with powerful ad strategies. We handle your campaigns from setup to reporting — optimizing for ROI every step of the way.",
      includes: ["Meta & Google Ads", "Conversion tracking", "A/B testing & performance reports"],
    },
    {
      id: "04",
      title: "SEO & Content Marketing",
      icon: Search,
      desc: "Get found when it matters most. Our SEO and content experts boost your visibility across Google and help build lasting organic traffic.",
      includes: ["On-page & off-page SEO", "Blog writing & keyword optimization", "Website audit & technical SEO"],
    },
    {
      id: "05",
      title: "Website Development",
      icon: Globe,
      desc: "Your website is your digital storefront — we make it stunning, responsive, and fast.",
      includes: ["Business websites & landing pages", "eCommerce stores", "UX/UI design & maintenance"],
    },
    {
      id: "06",
      title: "Corporate & Personal Branding",
      icon: UserCheck,
      desc: "Stand out as a professional or company. We build your online reputation across LinkedIn, social media, and search results.",
      includes: ["Personal branding strategy", "Visual identity setup", "Content & engagement plan"],
    }
  ];

  const benefits = [
    "Industry-focused strategies for multiple niches",
    "Creative storytelling with measurable results",
    "24/7 support & client communication",
    "Data-driven decision-making",
    "Passionate team that cares about your brand"
  ];

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors duration-300">
      <Hero />
      <TrustBanner />

      {/* Who We Help */}
      <section className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-white dark:text-white light:text-black transition-colors">
              <TextReveal text="Marketing Solutions for Businesses Ready to Grow" />
            </h2>
            <p className="text-white/60 dark:text-white/60 light:text-black/60 text-lg mb-8 leading-relaxed transition-colors">
              We work with startups, small businesses, and growing brands that want to build a strong online presence and convert visitors into loyal customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <MagneticButton href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white blue:bg-primary dark:bg-white light:bg-black text-black blue:text-white dark:text-black light:text-white font-medium transition-all">
                <Rocket size={18} /> Let’s Grow Your Brand
              </MagneticButton>
              <MagneticButton href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/5 text-white dark:text-white light:text-black font-medium transition-all">
                <Phone size={18} /> Book a Free Strategy Call
              </MagneticButton>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl bg-primary/5 dark:bg-white/5 light:bg-black/5 border border-primary/10 dark:border-white/10 light:border-black/10 p-8 flex flex-col justify-end transition-colors group hover:bg-primary dark:hover:bg-white light:hover:bg-black transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-5xl font-bold tracking-tighter text-white dark:text-white light:text-black group-hover:text-white dark:group-hover:text-black light:group-hover:text-white mb-2 transition-colors font-mono relative z-10"><AnimatedCounter end={300} suffix="%" /></span>
              <span className="text-white/40 dark:text-white/40 light:text-black/40 group-hover:text-white/80 dark:group-hover:text-black/80 light:group-hover:text-white/80 text-xs uppercase tracking-widest font-medium transition-colors relative z-10">Engagement Growth</span>
            </div>
            <div className="aspect-square rounded-2xl bg-primary/5 dark:bg-white/5 light:bg-black/5 border border-primary/10 dark:border-white/10 light:border-black/10 p-8 flex flex-col justify-end mt-8 transition-colors group hover:bg-primary dark:hover:bg-white light:hover:bg-black transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-5xl font-bold tracking-tighter text-white dark:text-white light:text-black group-hover:text-white dark:group-hover:text-black light:group-hover:text-white mb-2 transition-colors font-mono relative z-10"><AnimatedCounter end={4} suffix="x" /></span>
              <span className="text-white/40 dark:text-white/40 light:text-black/40 group-hover:text-white/80 dark:group-hover:text-black/80 light:group-hover:text-white/80 text-xs uppercase tracking-widest font-medium transition-colors relative z-10">ROAS Achieved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 bg-white/5 dark:bg-white/5 light:bg-black/5 transition-colors relative overflow-hidden">
        {/* Background Accent (Recipe 7) */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">
              <TextReveal text="Our Services" className="justify-center" />
            </h2>
            <p className="text-white/40 dark:text-white/40 light:text-black/40 transition-colors">Comprehensive digital solutions for modern brands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <TiltCard className="h-full">
                  <div className="p-8 rounded-3xl bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/30 dark:hover:border-white/30 light:hover:border-black/30 transition-all group flex flex-col justify-between relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/10 light:bg-black/10 flex items-center justify-center group-hover:bg-white/20 dark:group-hover:bg-white/20 light:group-hover:bg-black/20 transition-colors">
                          <service.icon className="text-white dark:text-white light:text-black group-hover:scale-110 transition-transform transition-colors" size={24} />
                        </div>
                        <span className="text-white/20 dark:text-white/20 light:text-black/20 font-mono transition-colors">{service.id}</span>
                      </div>
                      <h3 className="font-medium text-white dark:text-white light:text-black mb-4 transition-colors relative z-10 text-2xl">{service.title}</h3>
                      <p className="text-white/60 dark:text-white/60 light:text-black/60 leading-relaxed transition-colors relative z-10 text-base mb-8">{service.desc}</p>
                    </div>
                    <div className="space-y-3 relative z-10 mt-auto">
                      <p className="text-sm font-medium text-white/40 dark:text-white/40 light:text-black/40 uppercase tracking-wider transition-colors">Includes:</p>
                      {service.includes.map((inc, j) => (
                        <div key={j} className="flex items-start gap-3 text-white/80 dark:text-white/80 light:text-black/80 transition-colors text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30 dark:bg-white/30 light:bg-black/30 transition-colors mt-1.5 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section (Recipe 5) */}
      <section className="py-12 border-y border-white/10 dark:border-white/10 light:border-black/10 bg-white/2 dark:bg-white/2 light:bg-black/2 overflow-hidden">
        <Marquee 
          items={["Strategy", "Creative", "Performance", "Growth", "Design", "SEO", "Social"]} 
          speed={40}
        />
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">
            <TextReveal text="Why Choose Axxon Digital" className="justify-center" />
          </h2>
          <p className="text-white/60 dark:text-white/60 light:text-black/60 max-w-2xl mx-auto transition-colors">
            We don’t believe in one size fits all marketing. Every strategy is tailored to your business goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-black/5 hover:border-white/20 dark:hover:border-white/20 light:hover:border-black/20 transition-all group"
            >
              <motion.div
                initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 150 }}
              >
                <CheckCircle2 className="text-primary dark:text-white light:text-black shrink-0 group-hover:text-accent transition-colors" size={20} />
              </motion.div>
              <span className="text-white/80 dark:text-white/80 light:text-black/80 transition-colors">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* User Reviews Section */}
      <UserReviews />

      {/* Final CTA (Recipe 2) */}
      <section className="py-48 text-center px-6 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white dark:text-white light:text-black mb-12 transition-colors uppercase">
            Ready to <br /> <span className="font-serif italic font-medium">Scale?</span>
          </h2>
          <MagneticButton href="/contact" className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-primary dark:bg-white light:bg-black text-white dark:text-black light:text-white text-xl font-bold transition-all group shadow-[0_0_30px_rgba(59,130,246,0.4)] dark:shadow-none">
            Let’s build something amazing <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
          </MagneticButton>
        </motion.div>
        
        {/* Background Text (Recipe 5) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.05] select-none">
          <span className="text-[30vw] font-black uppercase tracking-tighter">AXXON</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
