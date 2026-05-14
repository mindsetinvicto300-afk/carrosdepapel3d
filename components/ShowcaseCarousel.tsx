'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { m as motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Car } from 'lucide-react';
import { showcaseCars } from '@/data/showcase-cars';

function ImagePlaceholder({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02] gap-3">
      <Car className="w-10 h-10 text-white/20" />
      <span className="text-white/30 text-sm font-medium">{name}</span>
    </div>
  );
}

export function ShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const activeCar = showcaseCars[activeIndex];
  const mainFailed = failedImages.has(activeCar.id);

  const markFailed = useCallback((id: number) => {
    setFailedImages(prev => new Set(prev).add(id));
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    const thumbEl = thumbsRef.current?.children[index] as HTMLElement | undefined;
    thumbEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, []);

  const goPrev = useCallback(() => {
    goTo((activeIndex - 1 + showcaseCars.length) % showcaseCars.length);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo((activeIndex + 1) % showcaseCars.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goPrev, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  return (
    <section
      ref={containerRef}
      role="region"
      aria-label="Galeria de carros 3D montados"
      className="py-24 w-full bg-[#0A0A0A]"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            O Que Você Pode Criar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60"
          >
            Confira o nível de detalhes das montagens reais feitas com nossos moldes.
          </motion.p>
        </div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative w-full max-w-[900px] mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white/5"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {mainFailed ? (
                <ImagePlaceholder name={activeCar.name} />
              ) : (
                <Image
                  src={activeCar.image}
                  alt={activeCar.alt}
                  fill
                  className="object-cover"
                  priority={activeCar.id === 1}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 900px"
                  onError={() => markFailed(activeCar.id)}
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Prev arrow */}
          <button
            onClick={goPrev}
            aria-label="Carro anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-all duration-200
              opacity-100 md:opacity-0 md:group-hover:opacity-100
              focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next arrow */}
          <button
            onClick={goNext}
            aria-label="Próximo carro"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-all duration-200
              opacity-100 md:opacity-0 md:group-hover:opacity-100
              focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Counter badge */}
          <div className="absolute top-3 right-3 z-20 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
            {activeIndex + 1} / {showcaseCars.length}
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          ref={thumbsRef}
          className="flex gap-2 lg:gap-3 mt-4 overflow-x-auto snap-x snap-mandatory md:overflow-visible md:justify-center px-4 md:px-0 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none' }}
        >
          {showcaseCars.map((car, index) => {
            const thumbFailed = failedImages.has(car.id);
            return (
              <button
                key={car.id}
                onClick={() => goTo(index)}
                aria-label={`Ver ${car.name}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className={[
                  'relative shrink-0 rounded-lg overflow-hidden snap-center bg-white/5',
                  'transition-opacity duration-150',
                  'outline-none focus-visible:ring-2 focus-visible:ring-orange-500',
                  'w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]',
                  activeIndex === index
                    ? 'border-2 border-[#E10600] opacity-100'
                    : 'border-2 border-transparent opacity-60 hover:opacity-100',
                ].join(' ')}
              >
                {thumbFailed ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Car className="w-5 h-5 text-white/20" />
                  </div>
                ) : (
                  <Image
                    src={car.image}
                    alt={car.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 60px, (max-width: 1024px) 70px, 80px"
                    onError={() => markFailed(car.id)}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
