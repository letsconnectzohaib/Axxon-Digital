import React from 'react';
import { motion } from 'motion/react';

export interface Review {
  name: string;
  role: string;
  avatar: string;
  content: string;
  date: string;
}

const defaultReviews: Review[] = [
  {
    name: "Martin Goutry",
    role: "Creative Developer at Diesdas.digital",
    avatar: "https://i.pravatar.cc/150?u=martin",
    content: "Cool to see a useful tool and not a new iteration of the same proposition. Will stay curious about Axxon!",
    date: "2024.04.08"
  },
  {
    name: "Theo Champion",
    role: "Founder & CTO at Zigg",
    avatar: "https://i.pravatar.cc/150?u=theo",
    content: "It took me a minute to get the impact of Axxon, but once in the dashboard, you can really see in which use cases it can be helpful!",
    date: "2024.04.15"
  },
  {
    name: "Agnès Remi",
    role: "Back-end developer at MyDodow",
    avatar: "https://i.pravatar.cc/150?u=agnes",
    content: "Axxon is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!",
    date: "2024.03.02"
  },
  {
    name: "Olivier Rabot",
    role: "Back-end developer at SuperSpace",
    avatar: "https://i.pravatar.cc/150?u=olivier",
    content: "As a back-end developer, I'm impressed by the ease of the integration of Axxon. My front won't need me anymore, more time for fine-tuning and it's awesome!",
    date: "2024.03.18"
  },
  {
    name: "Romain Le Quellec",
    role: "Front-end developer at Owkin",
    avatar: "https://i.pravatar.cc/150?u=romain",
    content: "Axxon feels like quite an exciting new tool. Can't wait to try it for real and integrate it in my workflow!",
    date: "2024.04.22"
  },
  {
    name: "Sarah Jenkins",
    role: "Product Designer at Framer",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    content: "The way Axxon handles complex data visualization is a game changer for our design team. It's fast, reliable, and beautiful.",
    date: "2024.05.10"
  },
  {
    name: "Lucas Moretti",
    role: "Full-stack Engineer at Vercel",
    avatar: "https://i.pravatar.cc/150?u=lucas",
    content: "Finally a tool that understands the developer experience. The API is clean and the performance is top-notch. Highly recommended!",
    date: "2024.05.12"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Growth at Notion",
    avatar: "https://i.pravatar.cc/150?u=elena",
    content: "Axxon has significantly reduced our time-to-market for new features. It's an essential part of our growth stack now.",
    date: "2024.05.15"
  },
  {
    name: "David Chen",
    role: "Lead Engineer at Airbnb",
    avatar: "https://i.pravatar.cc/150?u=david",
    content: "The scalability of Axxon's architecture is what impressed us most. It handles our high-traffic periods without breaking a sweat.",
    date: "2024.06.01"
  },
  {
    name: "Sophie Laurent",
    role: "Creative Director at Chanel",
    avatar: "https://i.pravatar.cc/150?u=sophie",
    content: "Axxon brings a level of aesthetic precision that is rare in technical tools. It perfectly aligns with our brand's high standards.",
    date: "2024.06.05"
  },
  {
    name: "Marcus Thorne",
    role: "CTO at Revolut",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    content: "Security and speed are non-negotiable for us. Axxon delivers on both fronts with an interface that our team actually enjoys using.",
    date: "2024.06.12"
  },
  {
    name: "Isabella Rossi",
    role: "UX Lead at Spotify",
    avatar: "https://i.pravatar.cc/150?u=isabella",
    content: "The attention to detail in Axxon's component library is astounding. It has become our go-to for rapid prototyping and production.",
    date: "2024.06.18"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const ReviewCard: React.FC<{ review: Review; className?: string }> = ({ review, className }) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`bg-white/5 dark:bg-white/5 light:bg-white sky:bg-white backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 max-w-sm w-full transition-all hover:scale-[1.05] hover:z-[100] cursor-default group ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img 
            src={review.avatar} 
            alt={review.name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 group-hover:border-white/30 dark:group-hover:border-white/30 light:group-hover:border-black/30 sky:group-hover:border-primary/30 transition-colors"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#050510] dark:border-[#0A0A0A] light:border-white sky:border-white rounded-full transition-colors" />
        </div>
        <div>
          <h4 className="text-white dark:text-white light:text-black sky:text-primary font-bold text-sm leading-tight transition-colors">{review.name}</h4>
          <p className="text-white/40 dark:text-white/40 light:text-black/40 sky:text-primary/40 text-xs transition-colors">{review.role}</p>
        </div>
      </div>
      <p className="text-white/70 dark:text-white/70 light:text-black/70 sky:text-primary/70 text-sm leading-relaxed mb-6 italic transition-colors">
        « {review.content} »
      </p>
      <div className="flex items-center gap-2 pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10 sky:border-primary/10 transition-colors">
        <div className="flex gap-0.5">
          <div className="w-3 h-1 bg-white/30 dark:bg-white/30 light:bg-black/30 sky:bg-primary/30 rounded-full transition-colors" />
          <div className="w-3 h-1 bg-white/20 dark:bg-white/20 light:bg-black/20 sky:bg-primary/20 rounded-full transition-colors" />
          <div className="w-3 h-1 bg-white/10 dark:bg-white/10 light:bg-black/10 sky:bg-primary/10 rounded-full transition-colors" />
        </div>
        <span className="text-white/30 dark:text-white/30 light:text-black/30 sky:text-primary/30 text-[10px] uppercase tracking-wider font-medium transition-colors">
          AXXON USER, {review.date}
        </span>
      </div>
    </motion.div>
  );
};

interface UserReviewsProps {
  title?: string;
  subtitle?: string;
  reviews?: Review[];
}

const UserReviews: React.FC<UserReviewsProps> = ({ 
  title = "User reviews", 
  subtitle = "Discover early user's feedbacks on Axxon integration within their workflows.",
  reviews = defaultReviews 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-32 bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] sky:bg-[#F0F7FF] overflow-hidden relative transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 dark:bg-white/5 light:bg-black/5 sky:bg-primary/5 blur-[150px] rounded-full -z-10 transition-colors" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white dark:text-white light:text-black sky:text-primary mb-6 tracking-tight transition-colors"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 dark:text-white/60 light:text-black/60 sky:text-primary/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors"
        >
          {subtitle.split('Axxon').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && <span className="text-[#ff5c5c] font-medium">Axxon</span>}
            </React.Fragment>
          ))}
        </motion.p>
      </div>

      {/* Scattered Layout for Desktop */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-[1400px] mx-auto px-6 h-[1200px] hidden lg:block"
      >
        {/* Row 1 */}
        <ReviewCard review={reviews[0]} className="absolute left-[2%] top-0 z-30" />
        <ReviewCard review={reviews[1]} className="absolute left-[35%] top-[5%] z-40" />
        <ReviewCard review={reviews[2]} className="absolute right-[2%] top-0 z-30" />

        {/* Row 2 */}
        <ReviewCard review={reviews[3]} className="absolute left-[15%] top-[20%] z-20" />
        <ReviewCard review={reviews[4]} className="absolute right-[15%] top-[22%] z-40" />
        <ReviewCard review={reviews[10]} className="absolute left-[45%] top-[30%] z-30" />

        {/* Row 3 */}
        <ReviewCard review={reviews[5]} className="absolute left-0 top-[45%] z-30" />
        <ReviewCard review={reviews[6]} className="absolute right-[5%] top-[48%] z-20" />
        <ReviewCard review={reviews[11]} className="absolute left-[30%] top-[55%] z-40" />

        {/* Row 4 */}
        <ReviewCard review={reviews[7]} className="absolute left-[10%] top-[75%] z-40" />
        <ReviewCard review={reviews[8]} className="absolute right-[20%] top-[78%] z-30" />

        {/* Row 5 */}
        <ReviewCard review={reviews[9]} className="absolute left-[40%] bottom-0 z-50" />
      </motion.div>

      {/* Mobile Grid Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="lg:hidden flex flex-col gap-12 px-6 items-center"
      >
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </motion.div>
    </section>
  );
};

export default UserReviews;
