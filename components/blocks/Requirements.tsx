'use client';

import { motion } from 'framer-motion';
import { Printer, FileText, Scissors } from 'lucide-react';

export function Requirements() {
  const reqs = [
    {
      title: "1. Impressora Comum",
      description: "Funciona em qualquer impressora doméstica A4 (Jato de tinta ou Laser).",
      icon: Printer,
    },
    {
      title: "2. Papel Acessível",
      description: "Use sulfite mais grosso ou papel fotográfico/180g (encontrado em qualquer papelaria) para maior durabilidade.",
      icon: FileText,
    },
    {
      title: "3. Cola e Tesoura",
      description: "Cola branca escolar, tesoura sem ponta e régua. Materiais simples que você já tem na gaveta.",
      icon: Scissors,
    }
  ];

  return (
    <section className="py-24 bg-background w-full">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Sem Equipamentos Caros
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Tudo o que você precisa já está em casa
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reqs.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-background border border-primary/10 shadow-sm rounded-2xl p-8 text-center hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                <req.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{req.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {req.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
