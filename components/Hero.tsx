"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-4 flex flex-col items-center text-center overflow-hidden min-h-screen justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4 block">
          ¿Podrás escapar?
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white">
          EL MISTERIO <br />{" "}
          <span className="text-red-600">NO TIENE LÍMITES</span>
        </h1>
        <p className="text-zinc-400 max-w-2xl text-lg mb-10">
          Descubre Linkstery, la plataforma definitiva de escape rooms. Desde
          desafíos físicos hasta experiencias digitales gratuitas.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/explorar"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
          >
            Explorar Salas <ArrowRight size={20} />
          </Link>
          <Link
            href="/nosotros"
            className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full text-lg font-bold transition-all"
          >
            Conócenos
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
