"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lightbulb, XCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

// 1. Cambiamos el código a "64"
const CORRECT_ANSWER = "64";

export default function Page2() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === CORRECT_ANSWER) {
      setSuccess(true);
      setError(false);
    } else {
      setError(true);
      setSuccess(false);
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
          <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-red-600" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Código aceptado
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            El sistema se desbloquea. Una puerta oculta se revela frente a ti...
          </p>
          {/* 2. Cambiamos el link de destino a 64 */}
          <Link
            href="/juegos/oficinista/64"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
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
          className="w-full"
        >
          
          {/* 1. TITULO */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight text-center">
            ¿Por qué apesta tanto la ventilación?
          </h1>

          {/* 2. TEXTO DE LA HISTORIA */}
          <p className="text-zinc-300 max-w-2xl mb-8 text-lg leading-relaxed">
            <span className="text-red-500">Kimberly</span> decide no usar las escaleras principales porque escucha pasos subiendo. 
            Utiliza un ducto de mantenimiento y se desliza hasta el piso 32, el área de 
            Contabilidad. Al salir del ducto, ve las linternas de dos ladrones recorriendo 
            el pasillo. Se esconde bajo un escritorio pesado de madera. Para distraerlos y 
            ganar tiempo para llegar a la otra sala del edificio, decide hackear el sistema 
            de aspersores de incendios de la sala contigua desde su tableta. Sin embargo, el 
            sistema de emergencia pide un código de confirmación rápido basado en una secuencia 
            lógica que el jefe de seguridad dejó anotada en un post-it debajo del teclado, pero 
            está incompleta.
          </p>

          <p className="text-zinc-300 max-w-2xl mb-8 text-lg leading-relaxed">
            En el post-it se lee la siguiente secuencia que Kimberly debe completar 
            para activar los aspersores:
          </p>


          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 mb-10 bg-zinc-900 flex items-center justify-center">
            <img
              src="/images/oficinista-64.png"
              alt="Terminal de acceso"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            "2, 4, 8, 16, 32, <span className="text-red-500">...?"</span>
          </p>
          

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            ¿Cuál es el siguiente número que Kimberly debe presionar para activar 
            el agua y crear la distracción?
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8">
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">
              Ingresa el código
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                // 3. Cambiamos a 2 dígitos y solo números
                maxLength={2}
                value={value}
                onChange={(e) => {
                  const v = e.target.value.replace(/[^0-9]/g, "").slice(0, 2);
                  setValue(v);
                  setError(false);
                }}
                placeholder="__"
                className="flex-1 bg-zinc-900 border-2 border-zinc-700 focus:border-red-600 outline-none text-white text-2xl font-mono tracking-[0.5em] text-center px-6 py-4 rounded-xl transition-colors"
                autoFocus
              />
              <button
                type="submit"
                // El botón se habilita al tener 2 dígitos
                disabled={value.length !== 2}
                className="bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                Enviar Respuesta <ArrowRight size={18} />
              </button>
            </form>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 mt-4 text-red-500"
                >
                  <XCircle size={18} />
                  <span className="text-sm">Código incorrecto.</span>
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