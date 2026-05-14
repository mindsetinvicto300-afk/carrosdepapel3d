'use client';

import { m as motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, BookOpen, Film, Gamepad2 } from 'lucide-react';
import Image from 'next/image';

export function Bonuses() {
  const bonuses = [
    {
      title: "Guia de Montagem Perfeita",
      description: "O passo a passo completo revelando os segredos de dobra e colagem para que suas maquetes pareçam miniaturas reais de metal.",
      value: "R$ 47,00",
      icon: BookOpen,
      image: "/images/bonus-guia-montagem.jpg",
    },
    {
      title: "Pacote - Filmes",
      description: "Tenha os carros mais icônicos do cinema na sua estante. Inclui moldes raros de franquias famosas para impressionar qualquer visita.",
      value: "R$ 67,00",
      icon: Film,
      image: "/images/bonus-filmes.jpg",
    },
    {
      title: "Pacote - Games",
      description: "As máquinas virtuais mais lendárias dos videogames trazidas para o mundo real. Moldes detalhados para os verdadeiros fãs.",
      value: "R$ 67,00",
      icon: Gamepad2,
      image: "/images/bonus-games.jpg",
    }
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground w-full">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Gift className="w-4 h-4" />
            <span>Bônus Especiais</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Levando hoje, você ganha presentes exclusivos
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Card className="h-full border-none shadow-xl bg-background text-foreground overflow-hidden">
                <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={bonus.image}
                    alt={bonus.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-2 left-2 bg-primary/80 w-8 h-8 rounded-full flex items-center justify-center text-white">
                    <bonus.icon className="w-4 h-4" />
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <h3 className="text-2xl font-bold mb-3">{bonus.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {bonus.description}
                  </p>
                  <div className="mt-auto w-full pt-4 border-t">
                    <p className="text-sm text-muted-foreground line-through">Valor normal: {bonus.value}</p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-500">HOJE: GRÁTIS</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
