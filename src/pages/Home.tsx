import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Rocket, Phone, ArrowRight } from 'lucide-react';
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
    { title: "Social Media Marketing", desc: "From reels to reach, we create content that connects and converts." },
    { title: "Branding & Design", desc: "Because your first impression should be unforgettable." },
    { title: "Performance Marketing", desc: "Run campaigns that deliver real ROI." },
    { title: "SEO & Content Marketing", desc: "Rank higher, attract more, and stay relevant." },
    { title: "Website Development", desc: "Build sleek, functional, and fast websites that sell." },
    { title: "Pay per click Advertising (PPC)", desc: "Run targeted ads that bring fast traffic, leads and sales." }
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : 
                  i === 1 || i === 4 ? 'md:col-span-2' : 
                  'md:col-span-1'
                }`}
              >
                <TiltCard className="h-full">
                  <div className="p-8 rounded-3xl bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:border-white/30 dark:hover:border-white/30 light:hover:border-black/30 transition-all group flex flex-col justify-between relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h3 className={`font-medium text-white dark:text-white light:text-black mb-4 transition-colors relative z-10 ${i === 0 ? 'text-4xl' : 'text-xl'}`}>{service.title}</h3>
                    <p className={`text-white/60 dark:text-white/60 light:text-black/60 leading-relaxed transition-colors relative z-10 ${i === 0 ? 'text-xl' : 'text-base'}`}>{service.desc}</p>
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
