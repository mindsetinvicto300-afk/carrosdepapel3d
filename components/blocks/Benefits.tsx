'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Trophy, Brain, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Benefits() {
  const benefits = [
    {
      title: "Conexão em Família",
      description: "Uma atividade criativa para fazer com os filhos ou netos. Menos telas, mais conversas e uma garagem dos sonhos construída juntos.",
      icon: Users,
      image: "/images/benefit-familia.jpg",
    },
    {
      title: "Sua Própria Coleção Exclusiva",
      description: "Tenha os carros mais famosos e desejados do mundo na sua estante por uma fração do preço das miniaturas de metal tradicionais.",
      icon: Trophy,
      image: "/images/benefit-colecao.jpg",
    },
    {
      title: "Terapia Anti-Estresse",
      description: "Desconecte-se das preocupações e foque no momento presente. Recortar e montar réplicas perfeitas é uma forma simples de relaxar a mente.",
      icon: Brain,
      image: "/images/benefit-antistress.jpg",
    },
    {
      title: "Diversão para Todas as Idades",
      description: "Seu filho fica preso no celular por horas? A montagem de moldes de carro 3D instigam a criatividade e raciocínio, além de ser muito divertida.",
      icon: Sparkles,
      image: "/images/benefit-fun.jpg",
    }
  ];

  return (
    <section className="py-24 bg-muted/50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Por que começar hoje?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Descubra os benefícios reais de adquirir nossos moldes hoje:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Card className="h-full border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all bg-background overflow-hidden">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center">
                    <div className="bg-primary/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-white">
                      <benefit.icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <CardHeader className="text-center pb-2 pt-4">
                  <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
