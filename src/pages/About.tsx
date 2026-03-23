import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: "Creativity with Purpose", desc: "Every design and campaign tells a story.", icon: Zap },
    { title: "Integrity First", desc: "We deliver what we promise.", icon: Shield },
    { title: "Results That Matter", desc: "Growth is our ultimate KPI.", icon: Target },
    { title: "Partnership Over Transaction", desc: "We treat every client like a long-term collaborator.", icon: Users }
  ];

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      {/* Hero */}
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-8 transition-colors uppercase tracking-tighter">Who We Are</h1>
          <p className="text-xl text-white/60 dark:text-white/60 light:text-black/60 leading-relaxed transition-colors">
            We’re Axxon Digital — a full-service digital marketing agency that empowers brands to stand out in the online world. We craft data-driven, creative campaigns that inspire action, build loyalty, and grow sales.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white/5 dark:bg-white/5 light:bg-black/5 transition-colors">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-3xl bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 transition-colors">
            <Target className="text-white dark:text-white light:text-black mb-6 transition-colors" size={40} />
            <h2 className="text-3xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">Our Mission</h2>
            <p className="text-white/60 dark:text-white/60 light:text-black/60 text-lg transition-colors">
              To help businesses of every size build their digital footprint with strategy, creativity, and consistency.
            </p>
          </div>
          <div className="p-12 rounded-3xl bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 transition-colors">
            <Eye className="text-white dark:text-white light:text-black mb-6 transition-colors" size={40} />
            <h2 className="text-3xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">Our Vision</h2>
            <p className="text-white/60 dark:text-white/60 light:text-black/60 text-lg transition-colors">
              To become Pakistan’s most trusted digital marketing agency, helping brands connect with global audiences through innovation and authenticity.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">Our Values</h2>
          <p className="text-white/40 dark:text-white/40 light:text-black/40 transition-colors">The principles that guide every project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/5 dark:border-white/5 light:border-black/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 flex items-center justify-center shrink-0 transition-colors">
                <value.icon className="text-white dark:text-white light:text-black transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white dark:text-white light:text-black mb-2 transition-colors">{value.title}</h3>
                <p className="text-white/60 dark:text-white/60 light:text-black/60 transition-colors">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
