import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';
import HoverImageReveal from '../components/HoverImageReveal';

const Blog: React.FC = () => {
  const posts = [
    { title: "Top 5 Social Media Trends to Watch in 2025", category: "Social Media", date: "Mar 15, 2024", image: "https://picsum.photos/seed/social/800/600" },
    { title: "Consistency Beats Talent in Digital Marketing", category: "Strategy", date: "Mar 10, 2024", image: "https://picsum.photos/seed/strategy/800/600" },
    { title: "How to Build Trust Online Through Branding", category: "Branding", date: "Mar 05, 2024", image: "https://picsum.photos/seed/brand/800/600" },
    { title: "SEO vs Paid Ads: Which Works Better for Small Businesses?", category: "Marketing", date: "Feb 28, 2024", image: "https://picsum.photos/seed/seo/800/600" }
  ];

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-8 transition-colors uppercase tracking-tighter">
            <TextReveal text="Share Knowledge. Inspire Growth." />
          </h1>
          <p className="text-xl text-white/60 dark:text-white/60 light:text-black/60 transition-colors">We keep you updated with the latest in marketing, design, and brand strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`${i === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'}`}
            >
              <TiltCard className="h-full">
                <HoverImageReveal imageSrc={post.image} className="h-full">
                  <div className="group p-10 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 text-white/60 dark:text-white/60 light:text-black/60 text-xs font-medium uppercase tracking-wider transition-colors">{post.category}</span>
                        <div className="flex items-center gap-2 text-white/40 dark:text-white/40 light:text-black/40 text-xs transition-colors">
                          <Calendar size={12} /> {post.date}
                        </div>
                      </div>
                      <h3 className={`font-medium text-white dark:text-white light:text-black mb-8 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black transition-colors ${i === 0 ? 'text-4xl leading-tight' : 'text-2xl'}`}>{post.title}</h3>
                    </div>
                    <div className="relative z-10 flex items-center gap-2 text-white dark:text-white light:text-black font-medium group-hover:gap-4 transition-all transition-colors mt-auto">
                      Read More <ArrowRight size={18} />
                    </div>
                  </div>
                </HoverImageReveal>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <MagneticButton className="px-10 py-4 rounded-full bg-white blue:bg-primary dark:bg-white light:bg-black text-black blue:text-white dark:text-black light:text-white font-medium transition-transform transition-colors shadow-lg">
            👉 Read More Insights from Axxon Digital
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default Blog;
