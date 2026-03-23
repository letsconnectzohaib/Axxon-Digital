import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#050510] dark:bg-[#0A0A0A] light:bg-[#F8F9FA] flex items-center justify-center transition-colors"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="text-4xl md:text-6xl font-bold tracking-tighter text-white dark:text-white light:text-black uppercase flex items-center gap-2">
              AXXON
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-primary blue:text-primary dark:text-gray-400 light:text-gray-500"
              >
                DIGITAL
              </motion.span>
            </div>
            
            <div className="w-48 h-1 bg-white/10 dark:bg-white/10 light:bg-black/10 rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-full h-full bg-primary dark:bg-white light:bg-black rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
