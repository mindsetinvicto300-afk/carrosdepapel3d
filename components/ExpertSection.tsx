'use client';

import { m as motion } from 'framer-motion';
import Image from 'next/image';

const expert = {
  name: "Marcelo Andrade",
  handle: "@mecanicadepapel",
  shortTitle: "Designer de moldes 3D em papel há mais de 15 anos",
  tagline: "Mais de 200 modelos criados — agora nas suas mãos.",
  bio: "Marcelo Andrade desenha carros 3D em papel há mais de 15 anos. Começou como hobby e transformou em ofício: cada molde da coleção foi criado por ele, do esboço ao recorte final. Na página @mecanicadepapel, divide os bastidores do processo e dá acesso aos mesmos moldes que você vai receber neste pacote — para hobbyistas, pais e colecionadores que querem viver a sensação de transformar uma folha impressa num carro pronto pra exibir na estante.",
  imageUrl: "/images/expert.png",
  imageAlt: "Marcelo Andrade, designer de moldes de carrinhos 3D em papel há mais de 15 anos, criador da página @mecanicadepapel",
  instagramUrl: "https://instagram.com/mecanicadepapel",
};

export function ExpertSection() {
  return (
    <section
      role="region"
      aria-labelledby="expert-heading"
      className="py-20 md:py-24 w-full bg-[#0A0A0A]"
    >
      <div className="container mx-auto px-4 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >

          {/* Image column — 40% */}
          <div className="flex-shrink-0 flex justify-center lg:w-[40%]">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-1 rounded-2xl bg-[#E10600]/20 blur-xl pointer-events-none" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden ring-2 ring-red-600/30"
              >
                <Image
                  src={expert.imageUrl}
                  alt={expert.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 420px"
                />
              </motion.div>
            </div>
          </div>

          {/* Text column — 60% */}
          <div className="flex flex-col gap-5 text-center lg:text-left lg:w-[60%]">

            {/* Eyebrow */}
            <span className="text-[#E10600] text-sm font-bold tracking-widest uppercase">
              Por trás da oficina
            </span>

            {/* Name */}
            <h2
              id="expert-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              {expert.name}
            </h2>

            {/* Handle + short title */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2 sm:gap-3">
              <a
                href={expert.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil de Marcelo Andrade no Instagram (abre em nova aba)"
                className="flex items-center gap-1.5 text-[#FF6B00] font-medium hover:text-[#FF6B00]/80 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                {expert.handle}
              </a>
              <span className="hidden sm:inline text-white/20">·</span>
              <span className="text-[#B8B8B8] text-sm">{expert.shortTitle}</span>
            </div>

            {/* Tagline */}
            <blockquote className="text-xl md:text-2xl italic font-semibold text-white/90 leading-snug border-l-2 border-[#E10600] pl-4 lg:pl-5 text-left">
              "{expert.tagline}"
            </blockquote>

            {/* Bio */}
            <p className="text-base leading-relaxed max-w-prose text-[#B8B8B8] mx-auto lg:mx-0">
              {expert.bio}
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
