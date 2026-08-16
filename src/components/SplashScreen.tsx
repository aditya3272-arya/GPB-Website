import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BankLogo } from './BankLogo';
import { Lock } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fast, smooth loading progression
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + 4;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // When progress reaches 100%, trigger smooth exit
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 450);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 250);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#00142E] text-white select-none px-6 py-8"
        >
          {/* Subtle Top Status & Skip */}
          <div className="w-full max-w-4xl flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#C5A059]">
              <Lock size={12} className="text-[#C5A059]" />
              <span>Secure Banking Portal</span>
            </div>

            <button
              onClick={handleSkip}
              className="text-[10px] uppercase font-bold tracking-[0.18em] text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Skip
            </button>
          </div>

          {/* Minimalist Premium Brand Presentation */}
          <div className="flex flex-col items-center text-center max-w-sm mx-auto my-auto">
            {/* Bank Emblem */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 drop-shadow-lg"
            >
              <BankLogo size={84} showText={false} />
            </motion.div>

            {/* Typography Lockup */}
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-1.5"
            >
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase">
                Gurukul PREMIER Bank
              </h1>
              <div className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.3em] text-[#C5A059] uppercase">
                Trust • Grow • Prosper
              </div>
            </motion.div>

            {/* Sleek Minimalist Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-48 mt-8 space-y-2"
            >
              <div className="w-full bg-[#002D62] h-[2px] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C5A059] transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[9.5px] font-mono text-slate-400 tracking-wider">
                <span className="font-sans text-[10px] text-slate-400">Loading portal</span>
                <span>{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Clean Bottom Copyright & Credentials */}
          <div className="w-full max-w-4xl text-center text-[10px] font-medium text-slate-500 tracking-wide">
            Gurukul The School • Student Banking System
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
