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

  const inputClasses = "w-full bg-black/20 blue:bg-black/20 dark:bg-black/20 light:bg-white/50 sky:bg-white/50 border border-white/10 blue:border-white/10 dark:border-white/10 light:border-black/20 sky:border-black/20 rounded-xl px-5 py-4 text-white blue:text-white dark:text-white light:text-black sky:text-black focus:border-white blue:focus:border-primary dark:focus:border-white light:focus:border-primary sky:focus:border-primary focus:ring-1 focus:ring-white blue:focus:ring-primary dark:focus:ring-white light:focus:ring-primary sky:focus:ring-primary outline-none transition-all";
  const errorClasses = "border-red-500 focus:border-red-500 focus:ring-red-500";

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
                    className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
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
                    className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
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
                  className={inputClasses}
                  placeholder="AXXON Corp" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-white/60 dark:text-white/60 light:text-black/60 ml-1 transition-colors">Services Interested In</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className={`${inputClasses} appearance-none`}
                  style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
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
                  className={`${inputClasses} ${errors.message ? errorClasses : ''} resize-none`}
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
