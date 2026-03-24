import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Hls from 'hls.js';

import { useTheme } from '../context/ThemeContext';
import MagneticButton from './MagneticButton';

interface BlurInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

const BlurIn: React.FC<BlurInProps> = ({ children, duration = 0.6, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface SplitTextProps {
  text: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ 
  text, 
  delay = 0, 
  duration = 0.6, 
  stagger = 0.08,
  className = "" 
}) => {
  const words = text.split(' ');
  
  return (
    <div className={`flex flex-wrap gap-x-[0.3em] ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration, 
              delay: delay + i * stagger,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { theme } = useTheme();
  const videoSrc = "https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8";

  useEffect(() => {
    if (videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = videoSrc;
      }
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors duration-300 flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 lg:left-1/4 w-full lg:w-3/4 scale-110 origin-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60 lg:opacity-100 blue:opacity-100 dark:opacity-100 light:opacity-40 transition-opacity duration-300"
        />
        {/* Left-to-Right Fade to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050510] via-[#050510]/40 to-transparent blue:from-[#050510] blue:via-[#050510]/40 blue:to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/40 dark:to-transparent light:from-[#F8F9FA] light:via-[#F8F9FA]/60 light:to-transparent z-10 transition-colors duration-300" />
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050510] to-transparent blue:from-[#050510] blue:to-transparent dark:from-[#0A0A0A] blue:to-transparent dark:to-transparent light:from-[#F8F9FA] light:to-transparent z-10 transition-colors duration-300" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1800px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex flex-col gap-12">
          {/* Badge, Heading, Subtitle Group */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <BlurIn duration={0.6} delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 blue:border-primary/30 dark:border-white/20 light:border-black/10 bg-primary/10 blue:bg-primary/10 dark:bg-white/5 light:bg-black/5 backdrop-blur-sm transition-colors">
                <Sparkles className="w-3 h-3 text-primary blue:text-primary dark:text-white/80 light:text-black/80" />
                <span className="text-sm font-medium text-primary blue:text-primary dark:text-white/80 light:text-black/80">AXXON Digital</span>
              </div>
            </BlurIn>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-semibold leading-[0.9] tracking-tighter text-white blue:text-white dark:text-white light:text-black transition-colors">
              <SplitText 
                text="WE BUILD" 
                className="block" 
              />
              <div className="flex flex-wrap items-baseline gap-x-[0.3em]">
                <SplitText 
                  text="BRANDS THAT" 
                  delay={0.5} 
                />
                <SplitText 
                  text="WIN." 
                  delay={0.7} 
                  className="font-serif italic font-medium" 
                />
              </div>
            </h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="max-w-xl text-white/80 dark:text-white/80 light:text-black/80 blue:text-white/80 sky:text-black/80 text-lg font-normal leading-relaxed transition-colors"
            >
              <SplitText 
                text="At Axxon Digital, we turn ideas into impact. From strategy to execution, we help businesses grow faster through creativity, data, and consistency." 
                delay={0.9}
                stagger={0.02}
                duration={0.6}
              />
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <BlurIn delay={1.2} duration={0.6}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <MagneticButton href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary dark:bg-white light:bg-black text-white dark:text-black light:text-white font-medium transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-none">
                  Let’s Grow Your Brand
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
                <MagneticButton href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary/20 dark:bg-white/20 light:bg-black/10 backdrop-blur-sm text-primary dark:text-white light:text-black font-medium transition-colors border border-primary/30 dark:border-white/10">
                  Book a Free Strategy Call
                </MagneticButton>
              </div>
              <div className="flex">
              </div>
            </div>
          </BlurIn>
        </div>

        {/* Vertical Rail Text (Recipe 11) */}
        <div className="hidden xl:flex flex-col items-center gap-8 absolute right-12 top-1/2 -translate-y-1/2">
          <div className="w-px h-24 bg-white/20 blue:bg-white/20 dark:bg-white/20 light:bg-black/10" />
          <span className="writing-vertical-rl rotate-180 text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40">
            Digital Excellence • Est. 2024
          </span>
          <div className="w-px h-24 bg-white/20 blue:bg-white/20 dark:bg-white/20 light:bg-black/10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
