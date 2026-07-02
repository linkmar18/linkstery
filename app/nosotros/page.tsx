"use client";

import { motion } from "framer-motion";
import { Ghost, Puzzle, Users, Shield } from "lucide-react";

const values = [
  {
    icon: <Puzzle size={28} />,
    title: "Ingenio",
    desc: "Cada acertijo está diseñado para poner a prueba tu mente de formas que nunca imaginaste.",
  },
  {
    icon: <Users size={28} />,
    title: "Conexión",
    desc: "El escape room es el pretexto perfecto para reunir a tus amigos, familia o equipo de trabajo.",
  },
  {
    icon: <Shield size={28} />,
    title: "Calidad",
    desc: "Seleccionamos personalmente cada experiencia para garantizar el más alto estándar.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="max-w-5xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4 block">
            De qué se trata
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
            El misterio tiene un <span className="text-red-600">nuevo hogar</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-xl leading-relaxed mb-12"
        >
          Linkstery no es solo una página de reservas. Es el nexo entre el enigma y el
          jugador. Nacimos para curar las mejores experiencias de escape, conectando
          mentes curiosas con los retos más retorcidos del mundo. Ya sea que quieras
          una experiencia física con actores en vivo, un kit que llegue a tu puerta, o
          un demo gratuito desde tu navegador — aquí encuentras tu misterio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="aspect-video w-full bg-gradient-to-br from-red-900/30 to-zinc-900 border-2 border-red-900/30 rounded-3xl flex items-center justify-center mb-20"
        >
          <Ghost size={80} className="text-red-600/50" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
            >
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center mb-5 text-red-600">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{v.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
