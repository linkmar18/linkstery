"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ghost } from "lucide-react";
import Link from "next/link";

export default function SinopsisPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Ghost size={48} className="mx-auto mb-6 text-red-600" />

          <span className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4 block">
            Juego gratuito
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            El <span className="text-red-600">Oficinista</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 text-left">
            Kimberly, un analista de software, se queda hasta tarde en la oficina 
            para ayudar a su jefe a revisar unos documentos protegidos por complejos
            sistemas de seguridad y reparar unas cámaras que fueron manipuladas. Al
            terminar y reactivar el sistema de vigilancia, descubre que los guardias
            del lobby han sido atacados y que un grupo de ladrones se ha infiltrado
            en el edificio. Mientras algunos recorren cada piso, el grupo principal
            se dirige a la oficina de su jefe en el último nivel. Ahora, Kimberly
            deberá usar su ingenio para resolver acertijos, superar los sistemas
            de seguridad y detener el robo antes de que sea demasiado tarde.
          </p>

          <p className="text-zinc-500 text-base leading-relaxed mb-12 text-left border-l-2 border-red-600/50 pl-4 italic">
            Duración estimada: 15 min &middot; 1-2 jugadores &middot; Dificultad: Media
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 text-left">
            Este escape room no tiene restricciones. Puedes utilizar una calculadora,
            un cuaderno, lápiz o cualquier herramienta que te ayude a resolver 
            los desafíos. Si algún acertijo resulta demasiado complicado, también 
            eres libre de consultar páginas web para buscar pistas o descifrar códigos.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 text-left">
            El objetivo es disfrutar la experiencia y poner a prueba tu capacidad 
            de observación, lógica y resolución de problemas.  
            <span className="text-red-500"> ¡Buena suerte!</span>
          </p>

          <Link
            href="/juegos/oficinista/1"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
          >
            Comenzar Desafío <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
