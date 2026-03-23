import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Facebook, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import MagneticButton from './MagneticButton';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/1234567890", label: "WhatsApp" },
  ];

  const { theme } = useTheme();

  return (
    <footer className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-white border-t border-white/10 dark:border-white/5 light:border-black/10 pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <Link to="/" className="group flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white dark:text-white light:text-black transition-colors uppercase">
                AXXON<span className="text-primary dark:text-white/50 light:text-black/40">DIGITAL</span>
              </span>
            </Link>
            <p className="text-white/60 dark:text-white/60 light:text-black/60 max-w-sm mb-10 leading-relaxed transition-colors">
              “Digital success starts with one smart decision — choosing Axxon Digital.”
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <MagneticButton 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: theme === 'blue' ? "rgba(59, 130, 246, 0.1)" : theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)", 
                    borderColor: theme === 'blue' ? "rgba(59, 130, 246, 0.4)" : theme === 'dark' ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.2)" 
                  }}
                  className="w-12 h-12 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-white/60 dark:text-white/60 light:text-black/60 hover:text-primary dark:hover:text-white light:hover:text-black transition-all"
                >
                  <social.icon size={20} />
                </MagneticButton>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white dark:text-white light:text-black font-semibold mb-8 uppercase tracking-widest text-xs transition-colors">Quick Links</h4>
            <ul className="space-y-5">
              <li><Link to="/about" aria-label="About Us" className="text-white/60 dark:text-white/60 light:text-black/60 hover:text-primary dark:hover:text-white light:hover:text-black transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-white/0 dark:bg-white/0 light:bg-black/0 group-hover:bg-primary dark:group-hover:bg-white light:group-hover:bg-black transition-all" /> About Us</Link></li>
              <li><Link to="/services" aria-label="Services" className="text-white/60 dark:text-white/60 light:text-black/60 hover:text-primary dark:hover:text-white light:hover:text-black transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-white/0 dark:bg-white/0 light:bg-black/0 group-hover:bg-primary dark:group-hover:bg-white light:group-hover:bg-black transition-all" /> Services</Link></li>
              <li><Link to="/portfolio" aria-label="Portfolio" className="text-white/60 dark:text-white/60 light:text-black/60 hover:text-primary dark:hover:text-white light:hover:text-black transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-white/0 dark:bg-white/0 light:bg-black/0 group-hover:bg-primary dark:group-hover:bg-white light:group-hover:bg-black transition-all" /> Portfolio</Link></li>
              <li><Link to="/blog" aria-label="Blog" className="text-white/60 dark:text-white/60 light:text-black/60 hover:text-primary dark:hover:text-white light:hover:text-black transition-colors flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-white/0 dark:bg-white/0 light:bg-black/0 group-hover:bg-primary dark:group-hover:bg-white light:group-hover:bg-black transition-all" /> Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white dark:text-white light:text-black font-semibold mb-8 uppercase tracking-widest text-xs transition-colors">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white/40 dark:text-white/40 light:text-black/40 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black transition-colors shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-white/40 dark:text-white/40 light:text-black/40 text-[10px] uppercase tracking-widest mb-1 transition-colors">Email Us</p>
                  <a href="mailto:info@axxondigital.com" className="text-white/80 dark:text-white/80 light:text-black/80 hover:text-white dark:hover:text-white light:hover:text-black transition-colors">info@axxondigital.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white/40 dark:text-white/40 light:text-black/40 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black transition-colors shrink-0">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-white/40 dark:text-white/40 light:text-black/40 text-[10px] uppercase tracking-widest mb-1 transition-colors">Call Us</p>
                  <a href="tel:+923000000000" className="text-white/80 dark:text-white/80 light:text-black/80 hover:text-white dark:hover:text-white light:hover:text-black transition-colors">+92-XXX-XXXXXXX</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white dark:text-white light:text-black font-semibold mb-8 uppercase tracking-widest text-xs transition-colors">Location</h4>
            <p className="text-white/60 dark:text-white/60 light:text-black/60 leading-relaxed mb-6 transition-colors">
              Rawalpindi, Pakistan<br />
              Serving Global Audiences
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-primary dark:text-white light:text-black font-medium hover:gap-4 transition-all group transition-colors">
              Get in touch <ArrowRight size={16} className="text-primary/40 dark:text-white/40 light:text-black/40 group-hover:text-primary dark:group-hover:bg-white light:group-hover:bg-black transition-colors" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 dark:border-white/5 light:border-black/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 transition-colors">
          <p className="text-white/30 dark:text-white/30 light:text-black/30 text-xs transition-colors">
            © {new Date().getFullYear()} AXXON Digital. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/contact" className="text-white/30 dark:text-white/30 light:text-black/30 text-xs hover:text-white dark:hover:text-white light:hover:text-black transition-colors flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white/20 dark:bg-white/20 light:bg-black/20" /> Submit Your Query
            </Link>
            <Link to="/contact" className="text-white/30 dark:text-white/30 light:text-black/30 text-xs hover:text-white dark:hover:text-white light:hover:text-black transition-colors flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white/20 dark:bg-white/20 light:bg-black/20" /> Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
