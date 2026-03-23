import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050510]/80 blue:bg-[#050510]/80 dark:bg-[#0A0A0A]/90 light:bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-white blue:text-white dark:text-white light:text-black transition-colors uppercase">
            AXXON<span className="text-primary blue:text-primary dark:text-white/40 light:text-black/30">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-white blue:hover:text-white dark:hover:text-white light:hover:text-black ${location.pathname === link.path ? 'text-white blue:text-white dark:text-white light:text-black' : 'text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60'}`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button 
            onClick={cycleTheme}
            className="p-2 rounded-full bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 text-white blue:text-white dark:text-white light:text-black hover:scale-110 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Sun size={18} /> : theme === 'blue' ? <Zap size={18} className="text-primary" /> : <Moon size={18} />}
          </button>

          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-primary dark:bg-primary light:bg-black text-white dark:text-white light:text-white text-sm font-medium hover:scale-105 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={cycleTheme}
            className="p-2 rounded-full bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 text-white blue:text-white dark:text-white light:text-black"
          >
            {theme === 'light' ? <Sun size={18} /> : theme === 'blue' ? <Zap size={18} className="text-primary" /> : <Moon size={18} />}
          </button>
          <button className="text-white blue:text-white dark:text-white light:text-black" onClick={() => setIsOpen(!isOpen)}>
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
            className="absolute top-full left-0 right-0 bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border-b border-white/10 blue:border-white/10 dark:border-white/5 light:border-black/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${location.pathname === link.path ? 'text-white blue:text-white dark:text-white light:text-black' : 'text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60'}`}
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
