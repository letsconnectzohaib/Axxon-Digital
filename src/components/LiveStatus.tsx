import React from 'react';
import { motion } from 'motion/react';
import { Activity, Server, ShieldCheck } from 'lucide-react';

const LiveStatus: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 p-12 rounded-[32px] bg-[#151619] border border-white/10">
        <div className="flex-1">
          <h3 className="text-3xl font-medium text-white mb-4">System Status</h3>
          <p className="text-[#8E9299] leading-relaxed">
            We maintain full transparency with our infrastructure. Our systems are monitored 24/7 to ensure maximum performance and security for your brand.
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
              <Activity className="text-green-500" size={24} />
            </div>
            <span className="text-xs text-white uppercase tracking-widest">Uptime</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
              <Server className="text-blue-500" size={24} />
            </div>
            <span className="text-xs text-white uppercase tracking-widest">Latency</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
              <ShieldCheck className="text-purple-500" size={24} />
            </div>
            <span className="text-xs text-white uppercase tracking-widest">Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatus;
