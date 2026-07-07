"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Pista3() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24 max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Pista 3 (Solución)
          </span>
          <h1 className="text-3xl font-bold text-white mb-6">
            Respuesta directa
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Pondremos en la codigo de verificación: 
            <span className="text-red-500"> BETA=2 </span>
            Ingresa en ese orden para desbloquear el sistema.
          </p>
          <Link
            href="/juegos/oficinista/maquinas"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 font-bold transition-colors"
          >
            <ArrowLeft size={18} /> Volver al acertijo
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
