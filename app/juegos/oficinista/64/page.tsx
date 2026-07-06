"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Lightbulb, XCircle } from "lucide-react";
import Link from "next/link";

// El orden correcto: 1. Amarillo, 2. Rojo, 3. Azul, 4. Verde
const CORRECT_SEQUENCE = ["Amarillo", "Roja", "Azul", "Verde"];

export default function Page2() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleColorClick = (color: string) => {
    if (success) return;

    const newSequence = [...sequence, color];
    setSequence(newSequence);

    // Cuando llega a 4 intentos, verificamos
    if (newSequence.length === 4) {
      if (JSON.stringify(newSequence) === JSON.stringify(CORRECT_SEQUENCE)) {
        setSuccess(true);
        setError(false);
      } else {
        setError(true);
        // Reiniciamos la secuencia después de un breve momento para que el usuario intente de nuevo
        setTimeout(() => {
          setSequence([]);
          setError(false);
        }, 1000);
      }
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Secuencia Correcta
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            El mecanismo se ha desbloqueado correctamente.
          </p>
          {/* Redirección a oficinista/0420 */}
          <Link
            href="/juegos/oficinista/maquinas"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)]"
          >
            Continuar <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full text-center"
        >
          {/* 1. TITULO */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight text-center">
            ¡No tengo tiempo para palanquitas!
          </h1>

          {/* 2. TEXTO DE LA HISTORIA */}
          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            Kimberly logra bajar varios pisos por las escaleras de servicio, pero se detiene en 
            el piso 25 al escuchar que los ladrones están usando el elevador de carga para transportar 
            algo pesado hacia el último piso. Ella sabe que, si logra bloquear el sistema de poleas 
            desde el cuarto de máquinas de este piso, el elevador se detendrá entre niveles, atrapando 
            a los criminales. Al entrar al cuarto de máquinas activa rapidamente la consola, ve un panel 
            de control con una serie de palancas de colores, con una información clave para ella. Un pequeño 
            manual técnico codificado dentro de la computadora dice: "Para detener el flujo sin romper el motor, 
            sigue la lógica de la luz".
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            Hay cuatro palancas de colores: 
            <span className="text-red-500">Roja</span>, 
            <span className="text-green-500"> Verde</span>, 
            <span className="text-blue-500"> Azul</span> y  
            <span className="text-yellow-500"> Amarilla</span>
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            Las instrucciones dicen:
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            La <span className="text-red-500">Roja</span> no es la primera ni la última.
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            La <span className="text-blue-500"> Azul</span> está inmediatamente después de la Roja.
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            La <span className="text-yellow-500"> Amarilla</span> es la primera.
          </p>

          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 mb-10 bg-zinc-900 flex items-center justify-center">
            <img
              src="/images/oficinista-maquinas.jpg"
              alt="Terminal de acceso"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            ¿En qué orden debe Kimberly activar las palancas para bloquear 
            el <span className="text-green-500"> elevador</span>?
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8">
            <div className="flex justify-center gap-4 mb-8">
              {/* Indicadores de progreso */}
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className={`w-4 h-4 rounded-full border-2 ${
                    sequence.length > i ? "bg-white border-white" : "border-zinc-700"
                  } transition-all`}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button
                onClick={() => handleColorClick("Roja")}
                className="bg-red-600 hover:bg-red-500 text-white font-bold py-8 rounded-xl transition-transform active:scale-95"
              >
                Roja
              </button>
              <button
                onClick={() => handleColorClick("Verde")}
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-8 rounded-xl transition-transform active:scale-95"
              >
                Verde
              </button>
              <button
                onClick={() => handleColorClick("Azul")}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-8 rounded-xl transition-transform active:scale-95"
              >
                Azul
              </button>
              <button
                onClick={() => handleColorClick("Amarillo")}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-8 rounded-xl transition-transform active:scale-95"
              >
                Amarillo
              </button>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center gap-2 mt-6 text-red-500"
                >
                  <XCircle size={18} />
                  <span className="text-sm font-bold uppercase tracking-widest">Secuencia Incorrecta - Reiniciando</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="w-full max-w-4xl pt-8 border-t border-zinc-800/60">
        <div className="flex items-center gap-3 mb-6 font-bold text-zinc-500 text-sm uppercase tracking-widest">
          <Lightbulb size={20} className="text-red-600 fill-red-600/10" /> ¿Necesitas ayuda?
        </div>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3].map((n) => (
            <Link key={n} href={`/juegos/oficinista/sistemas/pista-${n}`} className="px-8 py-3 border border-zinc-800 rounded-full text-white text-sm font-bold hover:bg-zinc-900 hover:border-zinc-700 transition-all min-w-[120px] text-center">
              Pista {n}
            </Link>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
}