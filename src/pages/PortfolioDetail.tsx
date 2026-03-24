import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { portfolioCases } from '../data/portfolio';
import MagneticButton from '../components/MagneticButton';
import TextReveal from '../components/TextReveal';

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = portfolioCases.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white dark:text-white light:text-black mb-4">Project Not Found</h1>
          <MagneticButton onClick={() => navigate('/portfolio')} className="px-6 py-3 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 text-white dark:text-white light:text-black">
            Back to Portfolio
          </MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] pt-32 pb-20 transition-colors duration-300 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.button
          onClick={() => navigate('/portfolio')}
          className="flex items-center gap-2 text-white/60 dark:text-white/60 light:text-black/60 hover:text-white dark:hover:text-white light:hover:text-black transition-colors mb-12 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 dark:border-white/10 light:border-black/10 bg-white/5 dark:bg-white/5 light:bg-black/5 text-white/80 dark:text-white/80 light:text-black/80">
              {project.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-white dark:text-white light:text-black mb-6 transition-colors tracking-tighter">
            <TextReveal text={project.title} />
          </h1>
          <p className="text-2xl text-white/60 dark:text-white/60 light:text-black/60 max-w-3xl leading-relaxed">
            {project.desc}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-20 border border-white/10 dark:border-white/10 light:border-black/10"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <motion.div 
            className="md:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-medium text-white dark:text-white light:text-black mb-6">The Challenge & Solution</h2>
            <p className="text-lg text-white/70 dark:text-white/70 light:text-black/70 leading-relaxed mb-8">
              {project.fullDescription}
            </p>
          </motion.div>

          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 rounded-3xl p-8 sticky top-32">
              <h3 className="text-xl font-medium text-white dark:text-white light:text-black mb-6">Key Results</h3>
              <div className="mb-8">
                <span className="text-6xl font-bold text-primary dark:text-white light:text-black block mb-2">{project.stat}</span>
                <span className="text-sm text-white/50 dark:text-white/50 light:text-black/50 uppercase tracking-wider">Headline Metric</span>
              </div>
              
              {project.keyResults && (
                <ul className="space-y-4">
                  {project.keyResults.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/70 dark:text-white/70 light:text-black/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-white light:bg-black mt-2.5 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
