"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Lightbulb, XCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

// 1. Cambiamos el código correcto
const CORRECT_ANSWER = "15O";

export default function Page2() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Comparamos ignorando espacios y asegurando mayúsculas
    if (value.trim().toUpperCase() === CORRECT_ANSWER) {
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
          {/* 2. Cambiamos la ruta de redirección */}
          <Link
            href="/juegos/oficinista/15O"
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
          <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-10 leading-tight">
            El cierre electromagnéc... ¿Qué?
          </h1>

          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 mb-10 bg-zinc-900 flex items-center justify-center">
            <img
              src="/images/oficinista-110.png"
              alt="Terminal de acceso"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const p = e.currentTarget.parentElement;
                if (p) {
                  const d = document.createElement("div");
                  d.className = "flex flex-col items-center justify-center gap-3 text-zinc-600";
                  d.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span class="text-sm">Próximamente</span>`;
                  p.appendChild(d);
                }
              }}
            />
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            Kimberly logra cruzar la puerta secreta justo cuando escucha el "ding" 
            del elevador llegando al piso 40. Baja rápidamente por una escalera de 
            caracol metálica que no aparecía en los planos normales, sino en los 
            documentos "rompecabezas" que analizó hace apenas una hora. Llega al 
            piso 39, el corazón de los servidores del edificio. Para evitar que 
            los ladrones rastreen su posición a través del GPS de su tarjeta de 
            acceso, Kimberly debe entrar al cuarto de control de red y desactivar 
            el rastreo interno. Sin embargo, la puerta tiene un teclado táctil con 
            un sistema de seguridad visual: una serie de figuras que debe completar 
            para demostrar que conoce la lógica del sistema.
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            En la pantalla del servidor aparece la siguiente secuencia lógica de números 
            y letras que Kimberly reconoce como parte del cifrado del edificio:
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            <span className="text-red-500">"1A, 3C, 6F, 10J, ?"</span>
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            ¿Cuál es el siguiente par de caracteres <span className="text-red-500">(número y letra) </span> 
            que Kimberly debe ingresar para desbloquear la consola y ocultar su rastro?
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 mb-8">
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-4">
              Ingresa el código
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                maxLength={3}
                value={value}
                onChange={(e) => {
                  // 3. Permitimos cualquier carácter (letras y números) y lo pasamos a mayúsculas
                  const v = e.target.value.toUpperCase().slice(0, 3);
                  setValue(v);
                  setError(false);
                }}
                placeholder="___"
                className="flex-1 bg-zinc-900 border-2 border-zinc-700 focus:border-red-600 outline-none text-white text-2xl font-mono tracking-[0.5em] text-center px-6 py-4 rounded-xl transition-colors"
                autoFocus
              />
              <button
                type="submit"
                disabled={value.length !== 3}
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
                  <span className="text-sm">
                    Código incorrecto. El sistema sigue bloqueado...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pistas section */}
          <div className="border-t border-zinc-800 pt-8 mt-8">
            <div className="flex items-center gap-2 mb-4 text-zinc-500">
              <Lightbulb size={16} className="text-red-600" />
              <span className="text-sm font-bold uppercase tracking-widest">
                ¿Necesitas ayuda?
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/juegos/oficinista/110/pista-1"
                className="px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-400 hover:border-red-600 hover:text-red-500 text-sm font-bold transition-all"
              >
                Pista 1
              </Link>
              <Link
                href="/juegos/oficinista/110/pista-2"
                className="px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-400 hover:border-red-600 hover:text-red-500 text-sm font-bold transition-all"
              >
                Pista 2
              </Link>
              <Link
                href="/juegos/oficinista/110/pista-3"
                className="px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-400 hover:border-red-600 hover:text-red-500 text-sm font-bold transition-all"
              >
                Pista 3
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}