'use client';

import { m as motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Preciso de uma impressora especial?",
      answer: "Não! Você pode imprimir todos os moldes em qualquer impressora A4 comum, seja jato de tinta ou laser. Se preferir, pode até levar os arquivos num pen drive para imprimir em uma gráfica rápida perto da sua casa."
    },
    {
      question: "Qual o melhor papel para imprimir?",
      answer: "Recomendamos papel sulfite mais encorpado (120g a 180g) ou papel fotográfico fosco para que a miniatura fique bem firme. Papel sulfite comum (75g) também funciona para praticar."
    },
    {
      question: "Nunca montei nada de papel, vou conseguir?",
      answer: "Com certeza! Os moldes vêm com linhas marcadas indicando exatamente onde dobrar e onde colar. Além disso, incluímos um guia passo a passo ensinando os segredos para uma montagem perfeita."
    },
    {
      question: "Como vou receber os moldes?",
      answer: "Assim que o pagamento for aprovado, você receberá um e-mail com o link de acesso a uma pasta no Google Drive com todos os arquivos em PDF organizados. É só clicar no link, abrir a pasta e baixar os moldes na hora — sem app, sem cadastro extra."
    },
    {
      question: "Os carrinhos ficam do tamanho de um Hot Wheels?",
      answer: "Eles ficam um pouco maiores, dependendo de como você imprimir. Em média, imprimindo em folha A4, eles ficam com cerca de 10 a 15 centímetros de comprimento, perfeitos para a estante."
    }
  ];

  return (
    <section className="py-24 bg-muted/10 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Tire suas dúvidas antes de começar.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 py-2">
                <AccordionTrigger className="text-left font-medium text-lg hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-5 text-base">Pronto para começar sua coleção?</p>
          <Button
            size="lg"
            className="h-14 px-10 text-base font-extrabold uppercase tracking-widest bg-gradient-to-r from-primary to-secondary text-primary-foreground border-none hover:scale-105 transition-transform shadow-lg"
            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VER OS PLANOS
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
