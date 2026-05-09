'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Flame } from 'lucide-react';
import Image from 'next/image';

const plans = [
  {
    name: "Básico",
    price: "19,90",
    originalPrice: null,
    savings: null,
    description: "Ideal para quem quer começar um novo hobby.",
    image: "/images/planobasico.png",
    features: [
      "50 Moldes de Carrinhos",
      "Instruções em PDF",
      "Acesso Vitalício",
      "Suporte por Email",
    ],
    popular: false,
    buttonText: "COMEÇAR AGORA",
    link: "#checkout-iniciante",
  },
  {
    name: "Completo",
    price: "27,90",
    originalPrice: "97,00",
    savings: "Você economiza R$69",
    description: "O pacote completo para construir a garagem dos sonhos.",
    image: "/images/planocompleto.png",
    features: [
      "Mais de 100 Moldes Premium",
      "Guia Passo a Passo Completo",
      "Bônus: Pacote Filmes + Games",
      "Acesso Vitalício",
      "Suporte Prioritário",
    ],
    popular: true,
    buttonText: "QUERO A COLEÇÃO COMPLETA",
    link: "#checkout-mestre",
  },
];

export function Plans() {
  return (
    <section id="plans" className="py-24 bg-muted/30 w-full scroll-mt-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Escolha o pacote ideal para você
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Acesso imediato após a confirmação do pagamento.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className={`relative ${plan.popular ? 'pt-5' : ''}`}
            >
              {/* Badge — on wrapper so it's never clipped */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-lg">
                  <Flame className="w-3 h-3" />
                  Mais Escolhido
                </div>
              )}

              {/* Glow ring for popular plan */}
              {plan.popular && (
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/60 via-primary/20 to-transparent blur-sm pointer-events-none" />
              )}

              <Card className={`relative h-full flex flex-col border-2 overflow-hidden ${
                plan.popular
                  ? 'border-primary shadow-2xl shadow-primary/20 bg-gradient-to-b from-primary/5 to-background md:scale-105'
                  : 'border-border shadow-lg'
              }`}>

                {/* Plan mockup image */}
                <div className={`relative w-full overflow-hidden ${plan.popular ? 'aspect-[4/3]' : 'aspect-[4/3]'} bg-muted`}>
                  <Image
                    src={plan.image}
                    alt={`Mockup do plano ${plan.name}`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <CardHeader className="text-center pb-4 pt-6">
                  <CardTitle className="text-2xl font-bold mb-1">{plan.name}</CardTitle>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>

                  {/* Value anchoring */}
                  {plan.originalPrice && (
                    <div className="mt-3 flex flex-col items-center gap-1.5">
                      <span className="text-sm text-muted-foreground line-through">
                        De R$ {plan.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                        {plan.savings}
                      </span>
                    </div>
                  )}

                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-xl font-bold text-muted-foreground">R$</span>
                    <span className={`font-extrabold tracking-tighter ${plan.popular ? 'text-6xl text-primary' : 'text-5xl'}`}>
                      {plan.price}
                    </span>
                  </div>
                  {plan.popular && (
                    <p className="text-xs text-muted-foreground mt-1">pagamento único — acesso vitalício</p>
                  )}
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className={`rounded-full p-1 shrink-0 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className={`text-sm font-medium ${plan.popular ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 pb-8 pt-4">
                  <Button
                    className={`w-full h-14 text-base font-extrabold uppercase tracking-widest border-none transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:scale-105 hover:shadow-primary/40'
                        : 'bg-muted hover:bg-muted/80 text-foreground shadow-sm'
                    }`}
                    onClick={() => window.open(plan.link, '_blank')}
                  >
                    {plan.buttonText}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
