import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar } from 'lucide-react';
import SEO from '../components/SEO';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock data for the blog post based on the slug
  const title = slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Blog Post';

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 min-h-screen transition-colors duration-300">
      <SEO title={title} description={`Read about ${title} on Axxon Digital`} />
      <section className="py-20 px-6 lg:px-12 max-w-[1000px] mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 dark:text-white/60 light:text-black/60 hover:text-primary transition-colors mb-12">
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6 text-white/50 dark:text-white/50 light:text-black/50 text-sm">
            <span className="px-3 py-1 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 text-white/70 dark:text-white/70 light:text-black/70 font-medium uppercase tracking-wider">
              Marketing
            </span>
            <div className="flex items-center gap-2">
              <Calendar size={14} /> Mar 15, 2024
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-medium text-white dark:text-white light:text-black mb-8 leading-tight">
            {title}
          </h1>
          <div className="aspect-video w-full rounded-3xl overflow-hidden mb-12 bg-white/5 dark:bg-white/5 light:bg-black/5">
            <img 
              src="https://picsum.photos/seed/blog/1200/600" 
              alt={title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="prose prose-lg prose-invert max-w-none text-white/80 dark:text-white/80 light:text-black/80">
            <p className="mb-6">
              This is a placeholder for the full blog post content. In a real application, this content would be fetched from a CMS or database based on the slug: <strong>{slug}</strong>.
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-2xl font-medium text-white dark:text-white light:text-black mt-12 mb-6">Key Takeaways</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Consistency is key in digital marketing.</li>
              <li>Always track your ROI and adjust your strategy accordingly.</li>
              <li>Engage with your audience authentically.</li>
            </ul>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPost;
