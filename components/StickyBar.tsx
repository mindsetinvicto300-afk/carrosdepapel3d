'use client';

import { useState, useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap } from 'lucide-react';

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToPlans = () =>
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A] border-t border-white/10 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-3 flex items-center gap-4">
            {/* Info — hidden on mobile */}
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-white font-bold text-sm">Carros de Papel 3D</span>
              <span className="text-white/40 text-xs">+100 moldes · Acesso imediato · Garantia 7 dias</span>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center gap-3 ml-auto">
              <div className="text-right hidden sm:block">
                <div className="text-white/30 text-xs line-through">De R$ 97,00</div>
                <div className="text-white font-extrabold text-lg leading-none">R$ 27,90</div>
              </div>

              <Button
                onClick={scrollToPlans}
                className="h-11 px-6 bg-gradient-to-r from-primary to-secondary text-white font-extrabold uppercase tracking-widest text-sm border-none hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
              >
                <Zap className="w-4 h-4 mr-1.5" />
                QUERO AGORA
              </Button>

              <div className="hidden md:flex items-center gap-1 text-xs text-white/40">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Seguro</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
