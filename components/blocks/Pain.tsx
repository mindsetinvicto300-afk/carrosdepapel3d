'use client';

import { m as motion } from 'framer-motion';
import { X } from 'lucide-react';

const pains = [
  "Miniaturas de metal custam R$100, R$300, R$500 cada — montar uma coleção decente virou privilégio de quem tem muito dinheiro sobrando.",
  "Você quer uma atividade para fazer com os filhos, mas tudo que aparece é tela, tela e mais tela — sem nada criativo para colocar nas mãos.",
  "O estresse do dia a dia pede uma válvula de escape, mas hobbies de qualidade parecem todos caros, complexos ou inacessíveis.",
];

export function Pain() {
  return (
    <section className="py-20 w-full bg-[#0A0A0A]">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-white leading-snug"
            >
              Se você já tentou colecionar carros, sabe como é frustrante...
            </motion.h2>
          </div>

          <ul className="flex flex-col gap-6">
            {pains.map((pain, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <X className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                </div>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">{pain}</p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 }}
            className="border-l-2 border-primary pl-5 py-1"
          >
            <p className="text-white/90 text-base md:text-lg font-medium italic leading-relaxed">
              "E se existisse uma forma de ter a garagem dos sonhos por menos de R$30 — e ainda passar horas criando cada modelo com as próprias mãos?"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
