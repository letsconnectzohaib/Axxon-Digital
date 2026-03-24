import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

interface HoverImageRevealProps {
  children: React.ReactNode;
  imageSrc: string;
  className?: string;
}

const HoverImageReveal: React.FC<HoverImageRevealProps> = ({ children, imageSrc, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && isHovered) {
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate position relative to the container center
        const relativeX = e.clientX - rect.left - rect.width / 2;
        const relativeY = e.clientY - rect.top - rect.height / 2;
        
        x.set(relativeX);
        y.set(relativeY);
      }
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, x, y]);

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-50 w-64 h-48 -ml-32 -mt-24 overflow-hidden rounded-xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
        }}
        style={{ x, y }}
        transition={{ duration: 0.2 }}
      >
        <img 
          src={imageSrc} 
          alt="Preview" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
};

export default HoverImageReveal;
