import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MagneticButton from './MagneticButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, cycleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050510]/80 dark:bg-[#0A0A0A]/90 light:bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 500 500" className="w-8 h-8 text-primary blue:text-primary dark:text-white light:text-black transition-colors">
            <path fill="currentColor" fillOpacity=".1" d="M142 145.5c-2.4 2.5-4.2 4.5-3.9 4.5s2.5-2 4.9-4.5 4.2-4.5 3.9-4.5-2.5 2-4.9 4.5m-6 208.9c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m9 9c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"/>
            <path fill="currentColor" fillOpacity=".9" d="m142.5 146.2-4 4.3 4.3-4c3.9-3.6 4.7-4.5 3.9-4.5-.2 0-2.1 1.9-4.2 4.2M137 354.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m8 8c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"/>
            <g fill="currentColor" strokeWidth="0">
              <path d="M332.2 97.6c-1.8 1.2-2.2 2.5-2.2 6.4 0 6 1.8 8 7.1 8 6.7 0 7.9-1.2 7.9-8 0-4.8-.4-6.1-1.9-7-2.9-1.5-8.3-1.2-10.9.6m-93.7 4.5c-25.6 1.9-50.9 10.7-73.3 25.5-12 8-32 28.1-40.1 40.3-11.5 17.3-18.9 34.9-23.3 55.5-3.2 14.9-3.2 42.5 0 58.4 10.2 50.7 43.2 91.3 89.4 110.1 34.4 14 73 15.3 107.4 3.6 11.1-3.8 24.5-10.5 35.4-17.7 12.3-8.1 12.4-8 12.8 8.7.1 7.4.7 13.4 1.4 14.2 1.6 2 50.1 1.9 51.7-.1.9-1.1 1.1-22.1.8-84.8-.3-81.5-.4-83.5-2.5-93-4.7-20.5-12.1-38-23.1-54.4-6.9-10.3-9.1-12.7-9.1-9.7 0 1-.7 2.9-1.6 4.1-1.3 2-2.4 2.2-9.4 2.2h-7.9l-.3 51.7c-.4 49.9-.5 52.1-2.6 59.7-2.9 10.4-7.8 21.7-12.7 29.1-5.3 8-17.5 20.7-25 26-39.2 27.8-92.1 23.1-125.9-11.3-17.3-17.6-26.3-38.7-27.3-64.2-.6-14.5 1.3-26 6.6-39.7 8.1-20.7 26.2-40.4 46.6-50.5 14.5-7.3 27.1-10.1 44-10 11.9 0 21.6 1.5 30.4 4.6 5.2 1.9 8.3 2 9.9.4.9-.9 1.2-8.2 1.2-26.5V109l-2.5-1.6c-3-2-20.9-5-32.5-5.6-4.7-.2-13-.1-18.5.3"/>
              <path d="M314.8 113.1c-1.4.8-1.8 2.3-1.8 6.9 0 7.5 1.4 9 8.5 9 6.4 0 8.5-2.1 8.5-8.5s-2.1-8.5-8.3-8.5c-2.9 0-6 .5-6.9 1.1m16.8 17.5c-1.2 1.2-1.6 3.7-1.6 10.8 0 12 .6 12.6 11.9 12.6 12.1 0 12.1 0 12.1-12.5s0-12.5-12.4-12.5c-6.4 0-8.8.4-10 1.6M236.3 213c-18.8 6.7-30.8 26.6-27.6 45.5 3.6 21.2 20.2 35.5 41.3 35.5s37.7-14.3 41.3-35.5c3.3-19.1-8.9-39-28-45.6-7.4-2.5-19.8-2.5-27 .1"/>
            </g>
            <path fill="currentColor" fillOpacity=".7" d="M345.3 104c0 2.5.2 3.5.4 2.2.2-1.2.2-3.2 0-4.5-.2-1.2-.4-.2-.4 2.3m-102.5-2.3c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4m11 0c1.2.2 3 .2 4 0 .9-.3-.1-.5-2.3-.4-2.2 0-3 .2-1.7.4M354.4 141c0 5.2.1 7.4.3 4.7.2-2.6.2-6.8 0-9.5-.2-2.6-.3-.4-.3 4.8m-106.6 14.7c1.2.2 3.2.2 4.5 0 1.2-.2.2-.4-2.3-.4s-3.5.2-2.2.4m117.4 1.8c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8m-78.4 5.2c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m-39 48c1.2.2 3.2.2 4.5 0 1.2-.2.2-.4-2.3-.4s-3.5.2-2.2.4m0 84c1.2.2 3.2.2 4.5 0 1.2-.2.2-.4-2.3-.4s-3.5.2-2.2.4m-.5 55c1.5.2 3.7.2 5 0 1.2-.2 0-.4-2.8-.4-2.7 0-3.8.2-2.2.4m-5 54c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5m13 0c.9.2 2.3.2 3 0 .6-.3-.1-.5-1.8-.5-1.6 0-2.2.2-1.2.5"/>
            <path fill="currentColor" fillOpacity=".3" d="m180.9 184.7-3.4 3.8 3.8-3.4c2-1.9 3.7-3.6 3.7-3.8 0-.8-.8 0-4.1 3.4M178 317.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m139.9 3.3-3.4 3.8 3.8-3.4c2-1.9 3.7-3.6 3.7-3.8 0-.8-.8 0-4.1 3.4M183.5 323c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2M142 360.5c1.3 1.4 2.6 2.5 2.8 2.5.3 0-.5-1.1-1.8-2.5s-2.6-2.5-2.8-2.5c-.3 0 .5 1.1 1.8 2.5"/>
            <path fill="currentColor" fillOpacity=".2" d="M329.3 104c0 3 .2 4.3.4 2.7.2-1.5.2-3.9 0-5.5-.2-1.5-.4-.2-.4 2.8m-36.9 30.5c0 13.7.2 19.5.3 12.8.2-6.7.2-17.9 0-25-.1-7-.3-1.6-.3 12.2m26.9-22.8c1.5.2 3.7.2 5 0 1.2-.2 0-.4-2.8-.4-2.7 0-3.8.2-2.2.4m18.5 17c2.3.2 6.1.2 8.5 0 2.3-.2.4-.4-4.3-.4s-6.6.2-4.2.4m-8.4 12.8c0 5.5.1 7.6.3 4.7s.2-7.4 0-10-.3-.2-.3 5.3m17.1 69.5c0 25.6.1 36 .2 23.3.2-12.8.2-33.8 0-46.5-.1-12.8-.2-2.4-.2 23.2M98.2 246c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8m303 .5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8m-247.9 6c0 2.7.2 3.8.4 2.2.2-1.5.2-3.7 0-5-.2-1.2-.4 0-.4 2.8m54 0c0 2.2.2 3 .4 1.7.2-1.2.2-3 0-4-.3-.9-.5.1-.4 2.3m85 0c0 2.2.2 3 .4 1.7.2-1.2.2-3 0-4-.3-.9-.5.1-.4 2.3M98.2 259c0 1.9.2 2.7.5 1.7.2-.9.2-2.5 0-3.5-.3-.9-.5-.1-.5 1.8m248.2 128.5c0 6.6.1 9.2.3 5.7.2-3.4.2-8.8 0-12-.2-3.1-.3-.3-.3 6.3m15.9 15.2c7.1.2 18.3.2 25 0 6.7-.1 1-.3-12.8-.3-13.7 0-19.2.2-12.2.3"/>
            <path fill="currentColor" fillOpacity=".5" d="M238.8 101.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m21 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m52.5 18.8c0 2.7.2 3.8.4 2.2.2-1.5.2-3.7 0-5-.2-1.2-.4 0-.4 2.8m38 44.2c2 .2 5.4.2 7.5 0 2-.2.3-.4-3.8-.4s-5.8.2-3.7.4M153.2 246c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m-55 6.5c0 1.6.2 2.2.5 1.2.2-.9.2-2.3 0-3-.3-.6-.5.1-.5 1.8m303.3 72c0 41.2.1 58.3.2 37.8.2-20.4.2-54.2 0-75-.1-20.8-.2-4.1-.2 37.2M153.2 259c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m193 0c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3M237.8 403.7c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6m23 0c.7.3 1.6.2 1.9-.1.4-.3-.2-.6-1.3-.5-1.1 0-1.4.3-.6.6"/>
            <path fill="currentColor" fillOpacity=".8" d="M147.9 140.7c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m71.5 82.5-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m60.1-.2c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m-60 59c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m59.9.2-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9"/>
          </svg>
          <span className="text-lg sm:text-2xl font-sans font-medium tracking-normal transition-colors flex flex-col sm:flex-row sm:items-center leading-none sm:leading-normal">
            <span className="text-black dark:text-white blue:text-white transition-colors">Axxon</span>
            <span className="text-gray-500 dark:text-gray-400 blue:text-primary transition-colors text-base sm:text-2xl ml-0 sm:ml-2">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-black dark:hover:text-white blue:hover:text-primary light:hover:text-black ${location.pathname === link.path ? 'text-black dark:text-white blue:text-primary light:text-black' : 'text-black/60 dark:text-white/60 blue:text-white/60 light:text-black/60'}`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={cycleTheme}
            className="p-2 rounded-full bg-black/5 dark:bg-white/5 blue:bg-white/5 border border-black/10 dark:border-white/10 blue:border-white/10 text-black dark:text-white blue:text-white hover:scale-110 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Sun size={18} className="text-amber-500" /> : theme === 'blue' ? <Zap size={18} className="text-primary" /> : <Moon size={18} className="text-slate-300" />}
          </button>

          <MagneticButton
            href="/contact"
            className="px-5 py-2 rounded-full bg-primary dark:bg-primary light:bg-black text-white dark:text-white light:text-white text-sm font-medium transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            aria-label="Contact Us"
          >
            Contact Us
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={cycleTheme}
            className="p-2 rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-black"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Sun size={18} className="text-amber-500" /> : theme === 'blue' ? <Zap size={18} className="text-primary" /> : <Moon size={18} className="text-slate-300" />}
          </button>
          <button className="text-white dark:text-white light:text-black" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border-b border-white/10 dark:border-white/5 light:border-black/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${location.pathname === link.path ? 'text-white dark:text-white light:text-black' : 'text-white/60 dark:text-white/60 light:text-black/60'}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
