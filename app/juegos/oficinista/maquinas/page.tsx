"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Terminal, Cpu, ChevronLeft, ArrowRight, Lightbulb, CheckCircle } from "lucide-react";
import Link from "next/link";

// --- CONFIGURACIÓN DE TEXTOS POR CARPETA ---
const FOLDER_DATA: Record<string, string> = {
  CORRUPTA: "___H_ + Beta = 10",
  BETA: "Gamma - Delta = 2",
  GAMMA: "_L_4_ × Delta = 12",
  DELTA: "Beta ÷ Gamma = 1",
  Corrupta: "4___A es el número primo más pequeño que existe",
};

const FOLDERS = Object.keys(FOLDER_DATA);
const CORRECT_COMMAND = "BETA=2";

export default function Page2() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setInputValue(val);
    if (val === CORRECT_COMMAND) {
      setSuccess(true);
    }
  };

  const handleBack = () => setActiveFolder(null);

  if (success) {
    return (
      <div className="min-h-screen bg-[#05080f] flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            <CheckCircle size={48} className="text-cyan-400" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4 tracking-widest uppercase">
            Acceso Concedido
          </h2>
          <p className="text-cyan-400/60 font-mono mb-8 italic">Desencriptando archivos del sistema...</p>
          <Link
            href="/juegos/oficinista/sistemas"
            className="bg-cyan-600 hover:bg-cyan-500 text-black px-10 py-4 rounded-md text-lg font-bold inline-flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] uppercase tracking-tighter"
          >
            Entrar al Sistema <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center px-4 py-16 font-sans selection:bg-cyan-500/30">
      
      {/* 1. TITULO */}
      <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight text-center">
        Mirame mamá, ya soy Hacker!
      </h1>

      {/* 2. TEXTO DE LA HISTORIA */}
      <p className="text-zinc-300 max-w-2xl mb-12 text-lg leading-relaxed">
        Tras dejar a los ladrones atrapados en el piso 25, Kimberly evita las escaleras principales y 
        se desliza por un ducto de ventilación hasta el Piso 18, el Hub de Mantenimiento que controla el 
        aire acondicionado y la presión del edificio. Sabe que los ladrones pronto saldrán del elevador 
        por la escotilla de emergencia. Para retrasarlos, decide manipular las válvulas de presión y 
        llenar el hueco del ascensor con vapor denso, bloqueando su visibilidad. Sin embargo, el panel 
        de control hidráulico es un sistema analógico-digital antiguo diseñado por ingenieros que amaban 
        los sistemas de ecuaciones. Para abrir las válvulas de vapor, debe resolver una igualdad de 
        energía que aparece en la pantalla táctil.
      </p>

      <p className="text-zinc-300 max-w-2xl mb-12 text-lg leading-relaxed">
        El panel muestra cuatro módulos de presión auque una esta dañada: /@#$_, Beta, Gamma y Delta. Kimberly debe encontrar 
        el valor del módulo Beta para liberar el vapor. El sistema le da las siguientes pistas:
      </p>

      {/* Ventana Estilo OS_KIMBERLY */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-[#05080f] border border-cyan-900/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col"
        style={{ minHeight: "500px" }}
      >
        {/* Barra Superior */}
        <div className="bg-[#05080f] px-5 py-4 border-b border-cyan-900/30 flex items-center justify-between">
          <div className="flex items-center gap-3 text-cyan-500/80">
            <Cpu size={18} />
            <span className="text-sm font-mono tracking-[0.2em] uppercase">OS_KIMBERLY_V2.1</span>
          </div>
          <div className="flex gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-900/40" />
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-800/60" />
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-600/80 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
          </div>
        </div>

        {/* Contenido (Carpetas o Texto) */}
        <div 
          className="flex-1 relative p-10 cursor-default"
          onClick={handleBack}
        >
          <AnimatePresence mode="wait">
            {!activeFolder ? (
              /* GRID DE CARPETAS (Vista Principal) */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-10"
              >
                {FOLDERS.map((name) => (
                  <button
                    key={name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveFolder(name);
                    }}
                    className="flex flex-col items-center gap-5 group transition-all"
                  >
                    <div className="relative">
                      <Folder 
                        size={64} 
                        strokeWidth={1.5}
                        className="text-cyan-500 group-hover:text-cyan-300 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]" 
                      />
                    </div>
                    <span className="text-sm font-mono tracking-[0.3em] text-cyan-100 group-hover:text-white transition-colors uppercase">
                      {name}
                    </span>
                  </button>
                ))}
              </motion.div>
            ) : (
              /* VISTA DE CONTENIDO (Dentro de la Carpeta) */
              <motion.div
                key="folder-content"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-2 text-cyan-500/60 hover:text-cyan-400 mb-8 font-mono text-xs uppercase tracking-widest transition-colors group"
                >
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                  Volver al Directorio
                </button>
                
                <div className="flex items-center gap-4 mb-8 border-b border-cyan-900/30 pb-6">
                  <Folder size={32} className="text-cyan-400 shadow-cyan-500" />
                  <h2 className="text-2xl font-mono text-white tracking-widest uppercase">{activeFolder}</h2>
                </div>

                <div className="bg-black/30 border border-cyan-900/20 p-8 rounded-lg font-mono text-cyan-100/80 leading-relaxed shadow-inner">
                  <span className="text-cyan-500 mr-2 opacity-50 tracking-tighter">DATA_STREAM_{activeFolder}:</span>
                  {FOLDER_DATA[activeFolder]}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Terminal Inferior */}
        <div className="bg-[#020408] px-6 py-4 border-t border-cyan-900/30 flex items-center gap-4 group">
          <div className="flex items-center gap-2 text-cyan-500">
            <span className="font-mono text-lg font-bold tracking-tighter group-focus-within:animate-pulse">
              {">"}_
            </span>
            <span className="font-mono text-lg font-bold tracking-tighter text-cyan-600">
              {">"}
            </span>
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="INGRESA COMANDO..."
            className="flex-1 bg-transparent border-none outline-none text-cyan-400 font-mono tracking-[0.2em] placeholder:text-cyan-900/60 uppercase"
            autoFocus
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </motion.div>

      <p className="text-zinc-300 max-w-2xl mb-12 text-lg leading-relaxed">
        Para resolver necesitas poner con Mayusculas y todo unido:  
        <span className="text-green-500"> CARACTER</span>
        <span className="text-blue-500">signo</span>
        <span className="text-red-500">VALOR</span>
      </p>

      {/* Decoración inferior */}
      <div className="mt-8 flex gap-20">
         <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent"></div>
         <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent"></div>
      </div>

      <div className="w-full max-w-4xl pt-8 border-t border-zinc-800/60">
        <div className="flex items-center gap-3 mb-6 font-bold text-zinc-500 text-sm uppercase tracking-widest">
          <Lightbulb size={20} className="text-red-600 fill-red-600/10" /> ¿Necesitas ayuda?
        </div>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3].map((n) => (
            <Link key={n} href={`/juegos/oficinista/maquinas/pista-${n}`} className="px-8 py-3 border border-zinc-800 rounded-full text-white text-sm font-bold hover:bg-zinc-900 hover:border-zinc-700 transition-all min-w-[120px] text-center">
              Pista {n}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}