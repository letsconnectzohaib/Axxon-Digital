import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    { title: "Top 5 Social Media Trends to Watch in 2025", category: "Social Media", date: "Mar 15, 2024" },
    { title: "Consistency Beats Talent in Digital Marketing", category: "Strategy", date: "Mar 10, 2024" },
    { title: "How to Build Trust Online Through Branding", category: "Branding", date: "Mar 05, 2024" },
    { title: "SEO vs Paid Ads: Which Works Better for Small Businesses?", category: "Marketing", date: "Feb 28, 2024" }
  ];

  return (
    <div className="bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-medium text-white blue:text-white dark:text-white light:text-black mb-8 transition-colors uppercase tracking-tighter">Share Knowledge. Inspire Growth.</h1>
          <p className="text-xl text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60 transition-colors">We keep you updated with the latest in marketing, design, and brand strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 hover:bg-white/10 blue:hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-all cursor-pointer transition-colors"
            >
              <div className="flex gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 blue:bg-white/10 dark:bg-white/10 light:bg-black/10 text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60 text-xs font-medium uppercase tracking-wider transition-colors">{post.category}</span>
                <div className="flex items-center gap-2 text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40 text-xs transition-colors">
                  <Calendar size={12} /> {post.date}
                </div>
              </div>
              <h3 className="text-2xl font-medium text-white blue:text-white dark:text-white light:text-black mb-8 group-hover:text-white blue:group-hover:text-white dark:group-hover:text-white light:group-hover:text-black transition-colors">{post.title}</h3>
              <div className="flex items-center gap-2 text-white blue:text-white dark:text-white light:text-black font-medium group-hover:gap-4 transition-all transition-colors">
                Read More <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <button className="px-10 py-4 rounded-full bg-white blue:bg-primary dark:bg-white light:bg-black text-black blue:text-white dark:text-black light:text-white font-medium hover:scale-105 transition-transform transition-colors">
            👉 Read More Insights from Axxon Digital
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
