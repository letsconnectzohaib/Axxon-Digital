import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-medium text-white blue:text-white dark:text-white light:text-black mb-8 leading-tight transition-colors">Let’s Build Your Digital Success Story</h1>
            <p className="text-xl text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60 mb-12 leading-relaxed transition-colors">
              We’d love to hear from you. Ready to take your brand to the next level? Reach out and let’s plan your growth strategy together.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white blue:text-white dark:text-white light:text-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40 text-sm uppercase tracking-widest mb-1 transition-colors">Email Us</p>
                  <p className="text-white blue:text-white dark:text-white light:text-black text-lg transition-colors">info@axxondigital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white blue:text-white dark:text-white light:text-black transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40 text-sm uppercase tracking-widest mb-1 transition-colors">Call Us</p>
                  <p className="text-white blue:text-white dark:text-white light:text-black text-lg transition-colors">+92-XXX-XXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white blue:text-white dark:text-white light:text-black transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 blue:text-white/40 dark:text-white/40 light:text-black/40 text-sm uppercase tracking-widest mb-1 transition-colors">Visit Us</p>
                  <p className="text-white blue:text-white dark:text-white light:text-black text-lg transition-colors">Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-3xl bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 transition-colors"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Full Name</label>
                  <input type="text" className="w-full bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 rounded-xl px-5 py-4 text-white blue:text-white dark:text-white light:text-black focus:border-white/30 blue:focus:border-primary dark:focus:border-white light:focus:border-black/30 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Email Address</label>
                  <input type="email" className="w-full bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 rounded-xl px-5 py-4 text-white blue:text-white dark:text-white light:text-black focus:border-white/30 blue:focus:border-primary dark:focus:border-white light:focus:border-black/30 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Business Name</label>
                <input type="text" className="w-full bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 rounded-xl px-5 py-4 text-white blue:text-white dark:text-white light:text-black focus:border-white/30 blue:focus:border-primary dark:focus:border-white light:focus:border-black/30 outline-none transition-all" placeholder="AXXON Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Services Interested In</label>
                <select className="w-full bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 rounded-xl px-5 py-4 text-white blue:text-white dark:text-white light:text-black focus:border-white/30 blue:focus:border-primary dark:focus:border-white light:focus:border-black/30 outline-none transition-all appearance-none">
                  <option className="bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">Social Media Marketing</option>
                  <option className="bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">Branding & Design</option>
                  <option className="bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">Performance Marketing</option>
                  <option className="bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">SEO & Content</option>
                  <option className="bg-[#050510] blue:bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">Web Development</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 blue:text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Message</label>
                <textarea rows={4} className="w-full bg-white/5 blue:bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/10 rounded-xl px-5 py-4 text-white blue:text-white dark:text-white light:text-black focus:border-white/30 blue:focus:border-primary dark:focus:border-white light:focus:border-black/30 outline-none transition-all resize-none transition-colors" placeholder="How can we help you grow?"></textarea>
              </div>
              <button className="w-full bg-white blue:bg-primary dark:bg-white light:bg-black text-black blue:text-white dark:text-black light:text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
