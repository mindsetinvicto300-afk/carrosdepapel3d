'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function SocialProof() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-background rounded-2xl p-2 shadow-sm border mx-auto w-full max-w-sm flex flex-col"
            >
              {/* Fake WhatsApp Header */}
              <div className="bg-[#075E54] rounded-t-xl p-3 flex items-center gap-3 text-white">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/20">
                  <Image
                    src={['/images/avatar-marcelo.jpg', '/images/avatar-juliana.jpg', '/images/avatar-ricardo.jpg'][index]}
                    alt={['Marcelo', 'Juliana', 'Ricardo'][index]}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm">{['Marcelo Oliveira', 'Juliana Ferreira', 'Ricardo Santos'][index]}</div>
                  <div className="text-xs opacity-80">online</div>
                </div>
              </div>
              
              {/* Fake Chat Body */}
              <div className="bg-[#E5DDD5] p-4 flex-1 flex flex-col gap-3 rounded-b-xl relative overflow-hidden">
                <div className="bg-[#DCF8C6] p-3 rounded-xl rounded-tr-none self-end max-w-[85%] shadow-sm relative z-10 text-sm text-gray-800">
                  {index === 0 && "Meu filho de 8 anos amou! Montamos o fusca no final de semana, largou o videogame por um tempão. Valeu cada centavo."}
                  {index === 1 && "Comprei pra desestressar depois do trabalho e acabou virando um vício kkkk Muito bom o nível de detalhes dos moldes!"}
                  {index === 2 && "Achei que ia gastar muita tinta mas é bem tranquilo. Já tenho 4 JDM montados na minha estante, parecem de ferro."}
                  <div className="text-[10px] text-gray-500 text-right mt-1">14:{30 + index}</div>
                </div>
                
                {/* Doodles background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
