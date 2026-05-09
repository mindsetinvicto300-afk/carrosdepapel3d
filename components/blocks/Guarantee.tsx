'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Guarantee() {
  return (
    <section className="py-24 bg-background w-full">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 border-2 border-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-32 h-32 mb-8">
              <Image
                src="/images/badge-guarantee-7days.png"
                alt="Garantia de 7 dias"
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Garantia Incondicional de 7 Dias
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Temos tanta confiança na qualidade dos nossos moldes que oferecemos risco zero. 
              Baixe os arquivos, imprima, tente montar. Se por qualquer motivo você não gostar 
              ou achar que não é para você, basta enviar um e-mail em até 7 dias que 
              devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
            
            <div className="inline-block bg-background border px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
              Seu risco nesta compra é absolutamente ZERO.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
