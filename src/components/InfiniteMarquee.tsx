import React from 'react';
import { motion } from 'motion/react';

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ items, speed = 20, direction = 'left' }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex py-10 border-y border-white/5 dark:border-white/5 light:border-black/5">
      <motion.div
        className="flex gap-16 pr-16 items-center"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {/* Render items multiple times to ensure seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-white/20 dark:text-white/20 light:text-black/20 hover:text-white dark:hover:text-white light:hover:text-black transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
