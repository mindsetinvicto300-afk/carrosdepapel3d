'use client';

import { useState, useEffect } from 'react';
import { m as motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Timer, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

function useCountdown() {
  const getTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);
    const diff = midnight.getTime() - now.getTime();
    return {
      h: String(Math.floor(diff / 3_600_000)).padStart(2, '0'),
      m: String(Math.floor((diff % 3_600_000) / 60_000)).padStart(2, '0'),
      s: String(Math.floor((diff % 60_000) / 1_000)).padStart(2, '0'),
    };
  };

  const [time, setTime] = useState({ h: '00', m: '00', s: '00' });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function Hero() {
  const [today, setToday] = useState('');
  const { h, m, s } = useCountdown();

  useEffect(() => {
    setToday(new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }));
  }, []);

  return (
    <section className="relative w-full bg-background overflow-hidden">
      {/* Urgency Bar */}
      <div className="w-full bg-destructive text-white py-2 px-4 text-center text-sm font-bold flex items-center justify-center gap-2 z-20 relative flex-wrap">
        <Timer className="w-4 h-4 animate-pulse shrink-0" />
        <span>OPORTUNIDADE ÚNICA: Promoção válida somente até hoje, {today}</span>
        <span className="font-mono tracking-widest bg-black/20 px-2 py-0.5 rounded">
          {h}:{m}:{s}
        </span>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full w-fit mx-auto lg:mx-0 font-bold text-sm tracking-widest uppercase">
              <span>+100 MOLDES APROVADOS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1]">
              <span className="text-black">Transforme papel em</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-yellow-400">Maquetes de carros 3D</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
              +100 Moldes prontos de carros de corrida, esportivos, clássicos e icônicos para baixar, imprimir e montar.
            </p>
          </motion.div>

          {/* Image & Button Column */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-muted border shadow-2xl"
            >
              <Image
                src="/images/hero-mockup.png"
                alt="Coleção de carrinhos de papel 3D montados"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 items-center"
            >
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform text-primary-foreground font-extrabold uppercase tracking-widest shadow-lg border-none group" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>
                QUERO COMEÇAR AGORA
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Compra 100% Segura e Acesso Imediato</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
