'use client';

import { useState } from 'react';
import { m as motion } from 'framer-motion';
import Image from 'next/image';

type Msg =
  | { type: 'text'; text: string }
  | { type: 'image'; src: string; alt: string };

const testimonials: { id: number; name: string; avatar: string | null; messages: Msg[]; time: string }[] = [
  {
    id: 1,
    name: "Marcelo Oliveira",
    avatar: "/images/avatar-marcelo.jpg",
    messages: [
      { type: 'text', text: "Meu filho de 8 anos amou! Montamos o fusca no final de semana, largou o videogame por um tempão. Valeu cada centavo." },
    ],
    time: "14:30",
  },
  {
    id: 2,
    name: "Juliana Ferreira",
    avatar: "/images/avatar-juliana.jpg",
    messages: [
      { type: 'text', text: "Comprei pra desestressar depois do trabalho e acabou virando um vício kkkk Muito bom o nível de detalhes dos moldes!" },
    ],
    time: "18:47",
  },
  {
    id: 3,
    name: "Ricardo Santos",
    avatar: null,
    messages: [
      { type: 'text', text: "Ó gente... acabei de montar o 5° da coleção. Fica assim ó 👇" },
      { type: 'image', src: '/images/depoimento-estante.jpg', alt: 'Estante com carros de papel 3D montados' },
    ],
    time: "19:45",
  },
  {
    id: 4,
    name: "Fábio Moraes",
    avatar: null,
    messages: [
      { type: 'text', text: "cara fiz uns 4 pra presentear e quando meu amigo viu ele quis comprar kkkk tô vendendo a R$20,00 cada, já paguei o pacote 3x" },
    ],
    time: "11:22",
  },
  {
    id: 5,
    name: "Patrícia Lima",
    avatar: null,
    messages: [
      { type: 'text', text: "juro que achei que ia sair aquele carrinho mequetrefe de origami né? ERRADA. Ficou impecável, minha filha pensou que era de plástico 😂" },
    ],
    time: "16:08",
  },
  {
    id: 6,
    name: "Bruno Carvalho",
    avatar: null,
    messages: [
      { type: 'text', text: "nunca tinha montado nada desse tipo na vida, zero experiência. levei umas 2h no primeiro mas valeu demais. agora tô no 3° e vai bem mais rápido" },
    ],
    time: "20:14",
  },
  {
    id: 7,
    name: "Tiago Freitas",
    avatar: null,
    messages: [
      { type: 'text', text: "pensei que ia gastar cartucho à toa mas não. imprimi tudo em sulfite comum e ficou show. fiz 6 modelos com um cartucho preto" },
    ],
    time: "09:33",
  },
];

const avatarColors = ['bg-blue-500', 'bg-emerald-600', 'bg-purple-600', 'bg-orange-500', 'bg-pink-600', 'bg-teal-600', 'bg-rose-500'];

function AvatarPlaceholder({ name }: { name: string }) {
  const color = avatarColors[name.charCodeAt(0) % avatarColors.length];
  return (
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
      {name[0]}
    </div>
  );
}

function ImageBubble({ src, alt, time }: { src: string; alt: string; time: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none self-end overflow-hidden max-w-[90%] shadow-sm relative z-10">
      {failed ? (
        <div className="w-[200px] aspect-[4/3] bg-gray-300 flex items-center justify-center text-gray-500 text-xs">foto em breve</div>
      ) : (
        <div className="relative w-[200px] aspect-[4/3]">
          <Image src={src} alt={alt} fill className="object-cover" sizes="200px" loading="lazy" onError={() => setFailed(true)} />
        </div>
      )}
      <div className="text-[10px] text-gray-500 text-right px-2 py-1">{time} ✓✓</div>
    </div>
  );
}

function TestimonialCard({ name, avatar, messages, time }: typeof testimonials[number]) {
  return (
    <div className="bg-background rounded-2xl p-2 shadow-sm border w-[290px] shrink-0 flex flex-col select-none">
      <div className="bg-[#075E54] rounded-t-xl p-3 flex items-center gap-3 text-white">
        {avatar ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/20 shrink-0">
            <Image src={avatar} alt={name} fill className="object-cover" sizes="40px" loading="lazy" />
          </div>
        ) : (
          <AvatarPlaceholder name={name} />
        )}
        <div>
          <div className="font-bold text-sm">{name}</div>
          <div className="text-xs opacity-70">online</div>
        </div>
      </div>

      <div className="bg-[#E5DDD5] p-4 flex-1 flex flex-col gap-2 rounded-b-xl relative overflow-hidden min-h-[100px]">
        {messages.map((msg, i) =>
          msg.type === 'text' ? (
            <div key={i} className="bg-[#DCF8C6] p-3 rounded-xl rounded-tr-none self-end max-w-[90%] shadow-sm relative z-10 text-sm text-gray-800 leading-relaxed">
              {msg.text}
              <div className="text-[10px] text-gray-500 text-right mt-1">{time} ✓✓</div>
            </div>
          ) : (
            <ImageBubble key={i} src={msg.src} alt={msg.alt} time={time} />
          )
        )}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
      </div>
    </div>
  );
}

export function SocialProof() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-muted/30 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Quem montou, recomenda!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Veja o que as pessoas estão dizendo após montarem suas primeiras miniaturas.
          </motion.p>
        </div>
      </div>

      {/* Auto-scrolling marquee — full bleed */}
      <div className="flex gap-5 w-max animate-marquee px-5">
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} {...t} />
        ))}
      </div>
    </section>
  );
}
