import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  items, 
  direction = 'left', 
  speed = 30,
  className = "" 
}) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-12 items-center"
      >
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase text-primary/10 dark:text-primary/10 light:text-black/5 sky:text-primary/5"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
