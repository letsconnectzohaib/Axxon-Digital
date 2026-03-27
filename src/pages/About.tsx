import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, Shield, Zap, Users, Linkedin, Twitter } from 'lucide-react';
import AnimatedTimeline from '../components/AnimatedTimeline';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';

const About: React.FC = () => {
  const values = [
    { title: "Creativity with Purpose", desc: "Every design and campaign tells a story.", icon: Zap },
    { title: "Integrity First", desc: "We deliver what we promise.", icon: Shield },
    { title: "Results That Matter", desc: "Growth is our ultimate KPI.", icon: Target },
    { title: "Partnership Over Transaction", desc: "We treat every client like a long-term collaborator.", icon: Users }
  ];

  const team = [
    {
      name: "Zohaib",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      bio: "Visionary leader with a passion for digital growth and brand building."
    },
    {
      name: "Sarah Ahmed",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      bio: "Award-winning designer turning complex ideas into beautiful visual stories."
    },
    {
      name: "Ali Khan",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      bio: "Data-driven strategist obsessed with ROI and scalable campaigns."
    }
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
          <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-8 transition-colors uppercase tracking-tighter">
            <TextReveal text="Who We Are" />
          </h1>
          <p className="text-xl text-white/60 dark:text-white/60 light:text-black/60 leading-relaxed transition-colors">
            We’re Axxon Digital — a full-service digital marketing agency that empowers brands to stand out in the online world. We craft data-driven, creative campaigns that inspire action, build loyalty, and grow sales.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white/5 dark:bg-white/5 light:bg-black/5 transition-colors">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <TiltCard>
            <div className="p-12 rounded-3xl bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 transition-colors h-full">
              <Target className="text-white dark:text-white light:text-black mb-6 transition-colors" size={40} />
              <h2 className="text-3xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">Our Mission</h2>
              <p className="text-white/60 dark:text-white/60 light:text-black/60 text-lg transition-colors">
                To help businesses of every size build their digital footprint with strategy, creativity, and consistency.
              </p>
            </div>
          </TiltCard>
          <TiltCard>
            <div className="p-12 rounded-3xl bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 transition-colors h-full">
              <Eye className="text-white dark:text-white light:text-black mb-6 transition-colors" size={40} />
              <h2 className="text-3xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">Our Vision</h2>
              <p className="text-white/60 dark:text-white/60 light:text-black/60 text-lg transition-colors">
                To become Pakistan’s most trusted digital marketing agency, helping brands connect with global audiences through innovation and authenticity.
              </p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* The Axxon Process */}
      <section className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">
            <TextReveal text="The Axxon Process" className="justify-center" />
          </h2>
          <p className="text-white/40 dark:text-white/40 light:text-black/40 transition-colors">How we turn ideas into impact.</p>
        </div>
        <AnimatedTimeline />
      </section>

      {/* Values */}
      <section className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">
            <TextReveal text="Our Values" className="justify-center" />
          </h2>
          <p className="text-white/40 dark:text-white/40 light:text-black/40 transition-colors">The principles that guide every project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <TiltCard key={i}>
              <div className="flex gap-6 p-8 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/5 dark:border-white/5 light:border-black/5 transition-colors h-full">
                <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 flex items-center justify-center shrink-0 transition-colors">
                  <value.icon className="text-white dark:text-white light:text-black transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white dark:text-white light:text-black mb-2 transition-colors">{value.title}</h3>
                  <p className="text-white/60 dark:text-white/60 light:text-black/60 transition-colors">{value.desc}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto border-t border-white/10 dark:border-white/10 light:border-black/10 transition-colors">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white dark:text-white light:text-black mb-4 transition-colors">
            <TextReveal text="Meet The Team" className="justify-center" />
          </h2>
          <p className="text-white/40 dark:text-white/40 light:text-black/40 transition-colors">The creative minds behind Axxon Digital.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-medium text-white mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4">
                  {member.bio}
                </p>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors text-white backdrop-blur-sm">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors text-white backdrop-blur-sm">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
