'use client';

import { motion } from 'framer-motion';

export function Showcase() {
  // Placeholder array for gallery items
  const galleryItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="py-24 bg-background w-full">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            O Que Você Pode Criar
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Confira o nível de detalhes das montagens reais feitas com nossos moldes.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-muted border flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
              <span className="text-sm text-muted-foreground font-medium relative z-10">[Carro {item}]</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
