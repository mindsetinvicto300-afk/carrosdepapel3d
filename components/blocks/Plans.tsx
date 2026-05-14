'use client';

import { useState } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck, Flame, X, Zap } from 'lucide-react';
import Image from 'next/image';

// ─── Checkout links (fill in after creating products) ───────────────────────
const CHECKOUT_BASICO   = 'https://pay.wiapy.com/MvhdDhRp-9';
const CHECKOUT_COMPLETO = 'https://pay.wiapy.com/MfqkQqvEgS';
const CHECKOUT_DOWNSELL = 'https://pay.wiapy.com/YSMmPeogIZ';
// ────────────────────────────────────────────────────────────────────────────

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
    link: CHECKOUT_BASICO,
    triggerDownsell: true,
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
    link: CHECKOUT_COMPLETO,
    triggerDownsell: false,
  },
];

function DownsellModal({ onClose, onConfirm, onDecline }: {
  onClose: () => void;
  onConfirm: () => void;
  onDecline: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-background border-2 border-primary rounded-2xl shadow-2xl shadow-primary/20 max-w-md w-full overflow-hidden"
        >
          {/* Glow top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary" />

          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 flex flex-col gap-5">
            {/* Badge */}
            <div className="flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
              <Zap className="w-3 h-3" />
              Oferta exclusiva para você
            </div>

            <div>
              <h3 className="text-xl font-extrabold leading-tight mb-1">
                Espera! Que tal a Coleção Completa por menos?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Você escolheu o Básico, mas posso te dar acesso a{' '}
                <strong className="text-foreground">mais de 100 moldes premium</strong>{' '}
                — com todos os bônus incluídos — por apenas um pouquinho a mais.
              </p>
            </div>

            {/* Price block */}
            <div className="bg-muted/40 rounded-xl p-4 flex flex-col items-center gap-1 border border-primary/20">
              <span className="text-xs text-muted-foreground line-through">De R$ 27,90</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold text-muted-foreground">R$</span>
                <span className="text-5xl font-extrabold text-primary tracking-tighter">22,90</span>
              </div>
              <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-3 py-0.5 rounded-full">
                Você economiza R$5 agora
              </span>
              <p className="text-xs text-muted-foreground mt-1">pagamento único — acesso vitalício</p>
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {[
                'Mais de 100 Moldes Premium',
                'Guia Passo a Passo Completo',
                'Bônus: Pacote Filmes + Games',
                'Acesso Vitalício + Suporte Prioritário',
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <div className="rounded-full p-0.5 bg-primary/20 text-primary shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col gap-2 pt-1">
              <Button
                className="w-full h-12 text-sm font-extrabold uppercase tracking-widest bg-gradient-to-r from-primary to-secondary text-primary-foreground border-none hover:scale-105 transition-transform shadow-lg"
                onClick={onConfirm}
              >
                SIM! Quero o Completo por R$22,90
              </Button>
              <button
                onClick={onDecline}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2 text-center py-1"
              >
                Não, prefiro continuar só com os 50 moldes do Básico
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground -mt-1">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Pagamento 100% Seguro</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Plans() {
  const [showDownsell, setShowDownsell] = useState(false);

  const handlePlanClick = (plan: typeof plans[number]) => {
    if (plan.triggerDownsell) {
      setShowDownsell(true);
    } else {
      if (plan.link) window.open(plan.link, '_blank');
    }
  };

  const handleDownsellConfirm = () => {
    setShowDownsell(false);
    if (CHECKOUT_DOWNSELL) window.open(CHECKOUT_DOWNSELL, '_blank');
  };

  const handleDownsellDecline = () => {
    setShowDownsell(false);
    if (CHECKOUT_BASICO) window.open(CHECKOUT_BASICO, '_blank');
  };

  return (
    <>
      {showDownsell && (
        <DownsellModal
          onClose={() => setShowDownsell(false)}
          onConfirm={handleDownsellConfirm}
          onDecline={handleDownsellDecline}
        />
      )}

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

                <Card className={`relative h-full flex flex-col border-2 overflow-hidden ${
                  plan.popular
                    ? 'border-primary shadow-xl bg-black md:scale-105'
                    : 'border-border shadow-lg'
                }`}>

                  {/* Plan mockup image */}
                  <div className="relative w-full aspect-[4/3] bg-black overflow-hidden">
                    <Image
                      src={plan.image}
                      alt={`Mockup do plano ${plan.name}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>

                  <CardHeader className="text-center pb-4 pt-6">
                    <CardTitle className={`text-2xl font-bold mb-1 ${plan.popular ? 'text-white' : ''}`}>
                      {plan.name}
                    </CardTitle>
                    <p className={`text-sm ${plan.popular ? 'text-white/60' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>

                    {plan.originalPrice && (
                      <div className="mt-3 flex flex-col items-center gap-1.5">
                        <span className={`text-sm line-through ${plan.popular ? 'text-white/40' : 'text-muted-foreground'}`}>
                          De R$ {plan.originalPrice}
                        </span>
                        <span className="text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                          {plan.savings}
                        </span>
                      </div>
                    )}

                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className={`text-xl font-bold ${plan.popular ? 'text-white/50' : 'text-muted-foreground'}`}>R$</span>
                      <span className={`font-extrabold tracking-tighter ${plan.popular ? 'text-6xl text-primary' : 'text-5xl'}`}>
                        {plan.price}
                      </span>
                    </div>
                    {plan.popular && (
                      <p className="text-xs text-white/40 mt-1">pagamento único — acesso vitalício</p>
                    )}
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className={`rounded-full p-1 shrink-0 ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                            <Check className="w-4 h-4" />
                          </div>
                          <span className={`text-sm font-medium ${plan.popular ? 'text-white' : 'text-muted-foreground'}`}>
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
                          ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:scale-105'
                          : 'bg-muted hover:bg-muted/80 text-foreground shadow-sm'
                      }`}
                      onClick={() => handlePlanClick(plan)}
                    >
                      {plan.buttonText}
                    </Button>
                    <div className={`flex items-center justify-center gap-2 text-xs ${plan.popular ? 'text-white/40' : 'text-muted-foreground'}`}>
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
    </>
  );
}
