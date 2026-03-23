import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import TextReveal from '../components/TextReveal';
import MagneticButton from '../components/MagneticButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: 'Social Media Marketing',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', business: '', service: 'Social Media Marketing', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 transition-colors duration-300">
      <section className="py-20 px-6 lg:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-8 leading-tight transition-colors">
              <TextReveal text="Let’s Build Your Digital Success Story" />
            </h1>
            <p className="text-xl text-white/60 dark:text-white/60 light:text-black/60 mb-12 leading-relaxed transition-colors">
              We’d love to hear from you. Ready to take your brand to the next level? Reach out and let’s plan your growth strategy together.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white dark:text-white light:text-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/40 dark:text-white/40 light:text-black/40 text-sm uppercase tracking-widest mb-1 transition-colors">Email Us</p>
                  <p className="text-white dark:text-white light:text-black text-lg transition-colors">info@axxondigital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white dark:text-white light:text-black transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 dark:text-white/40 light:text-black/40 text-sm uppercase tracking-widest mb-1 transition-colors">Call Us</p>
                  <p className="text-white dark:text-white light:text-black text-lg transition-colors">+92-XXX-XXXXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white dark:text-white light:text-black transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 dark:text-white/40 light:text-black/40 text-sm uppercase tracking-widest mb-1 transition-colors">Visit Us</p>
                  <p className="text-white dark:text-white light:text-black text-lg transition-colors">Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 transition-colors relative overflow-hidden"
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-0 left-0 right-0 bg-green-500/10 border-b border-green-500/20 p-4 flex items-center justify-center gap-2 text-green-500 font-medium z-20"
                >
                  <CheckCircle2 size={20} />
                  Message sent successfully! We'll be in touch soon.
                </motion.div>
              )}
            </AnimatePresence>

            <form className={`space-y-6 ${isSuccess ? 'mt-8' : ''}`} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full bg-white/5 dark:bg-white/5 light:bg-black/5 border ${errors.name ? 'border-red-500' : 'border-white/10 dark:border-white/10 light:border-black/10'} rounded-xl px-5 py-4 text-white dark:text-white light:text-black focus:border-white blue:focus:border-primary dark:focus:border-white light:focus:border-black/50 outline-none transition-all`} 
                    placeholder="John Doe" 
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full bg-white/5 dark:bg-white/5 light:bg-black/5 border ${errors.email ? 'border-red-500' : 'border-white/10 dark:border-white/10 light:border-black/10'} rounded-xl px-5 py-4 text-white dark:text-white light:text-black focus:border-white blue:focus:border-primary dark:focus:border-white light:focus:border-black/50 outline-none transition-all`} 
                    placeholder="john@example.com" 
                  />
                  {errors.email && <p className="text-red-500 text-xs ml-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Business Name</label>
                <input 
                  type="text" 
                  value={formData.business}
                  onChange={(e) => setFormData({...formData, business: e.target.value})}
                  className="w-full bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl px-5 py-4 text-white dark:text-white light:text-black focus:border-white blue:focus:border-primary dark:focus:border-white light:focus:border-black/50 outline-none transition-all" 
                  placeholder="AXXON Corp" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Services Interested In</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 rounded-xl px-5 py-4 text-white dark:text-white light:text-black focus:border-white blue:focus:border-primary dark:focus:border-white light:focus:border-black/50 outline-none transition-all appearance-none"
                >
                  <option className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">Social Media Marketing</option>
                  <option className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">Branding & Design</option>
                  <option className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">Performance Marketing</option>
                  <option className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">SEO & Content</option>
                  <option className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-white">Web Development</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Message</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full bg-white/5 dark:bg-white/5 light:bg-black/5 border ${errors.message ? 'border-red-500' : 'border-white/10 dark:border-white/10 light:border-black/10'} rounded-xl px-5 py-4 text-white dark:text-white light:text-black focus:border-white blue:focus:border-primary dark:focus:border-white light:focus:border-black/50 outline-none transition-all resize-none transition-colors`} 
                  placeholder="How can we help you grow?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs ml-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white blue:bg-primary dark:bg-white light:bg-black text-black blue:text-white dark:text-black light:text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-colors hover:opacity-90 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
