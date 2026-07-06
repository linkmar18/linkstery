"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, CheckCircle, ArrowRight, Scan, Lightbulb } from "lucide-react";
import Link from "next/link";

// --- CONFIGURACIÓN DE TEXTOS EDITABLES ---
const SHAPE_DATA = {
  circle: "te",
  triangle: "tetable",
  square: "texle"
};

const CORRECT_ANSWER = "234";

export default function PaginaOficinista() {
  const [analysisText, setAnalysisText] = useState("SISTEMA EN ESPERA...");
  const [inputValue, setInputValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [isOverScanner, setIsOverScanner] = useState(false); // Nuevo estado para feedback visual
  const scannerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    if (val === CORRECT_ANSWER) setSuccess(true);
  };

  // Función mejorada para detectar colisión durante el arrastre
  const checkCollision = (point: { x: number; y: number }) => {
    if (!scannerRef.current) return false;
    const rect = scannerRef.current.getBoundingClientRect();
    
    // Añadimos un pequeño margen de error (10px) para que sea más fácil de detectar
    return (
      point.x >= rect.left - 10 &&
      point.x <= rect.right + 10 &&
      point.y >= rect.top - 10 &&
      point.y <= rect.bottom + 10
    );
  };

  const handleDrag = (event: any, info: any) => {
    if (checkCollision(info.point)) {
      setIsOverScanner(true);
    } else {
      setIsOverScanner(false);
    }
  };

  const handleDragEnd = (event: any, info: any, type: keyof typeof SHAPE_DATA) => {
    setIsOverScanner(false);
    if (checkCollision(info.point)) {
      setAnalysisText(SHAPE_DATA[type]);
    }
  };

  // --- PANTALLA DE ÉXITO ---
  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-red-600/10 rounded-full flex items-center justify-center mb-10 border border-red-600/20 shadow-[0_0_50px_rgba(220,38,38,0.15)]">
            <CheckCircle size={56} className="text-red-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Código aceptado</h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-md leading-relaxed">El sistema se desbloquea. Una puerta oculta se revela frente a ti...</p>
          <Link href="/juegos/oficinista/modelo/0420" className="group bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-bold flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]">
            Continuar <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center px-4 py-16 font-sans selection:bg-cyan-500/30">
      
      {/* 1. TITULO */}
      <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight text-center">titulo</h1>

      {/* 2. TEXTO DE LA HISTORIA */}
      <p className="text-zinc-300 text-center max-w-2xl mb-12 text-lg leading-relaxed">aqui va estar el texto de la historia</p>

      {/* 3. DISEÑO VISUAL / INTERACTIVIDAD */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl bg-[#0a0f16]/80 border border-cyan-900/30 rounded-xl overflow-hidden shadow-2xl flex flex-col mb-16">
        
        <div className="bg-[#05080f] px-5 py-4 border-b border-cyan-900/40 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-500/60 text-[10px] tracking-widest font-mono uppercase">
            <Cpu size={14} /> <span>OBJECT_ANALYZER_V4.0</span>
          </div>
          <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-cyan-950" /><div className="w-3 h-3 rounded-full bg-cyan-500/40" /></div>
        </div>

        <div className="p-8 flex flex-col md:flex-row gap-10 min-h-[400px]">
          {/* Muestras */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10 bg-black/30 rounded-xl border border-white/5 p-6">
            <span className="text-[10px] text-cyan-800 font-mono uppercase tracking-[0.3em]">Muestras</span>
            <div className="flex md:flex-col gap-10">
              {["circle", "triangle", "square"].map((type) => (
                <motion.div
                  key={type}
                  drag
                  dragSnapToOrigin
                  onDrag={handleDrag}
                  onDragEnd={(e, i) => handleDragEnd(e, i, type as keyof typeof SHAPE_DATA)}
                  whileDrag={{ scale: 1.1, zIndex: 50 }}
                  className={`
                    w-16 h-16 border-2 cursor-grab active:cursor-grabbing transition-colors
                    ${type === "circle" ? "rounded-full border-cyan-500/50" : ""}
                    ${type === "triangle" ? "border-green-500/50" : ""}
                    ${type === "square" ? "border-purple-500/50" : ""}
                  `}
                  style={type === "triangle" ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" } : {}}
                />
              ))}
            </div>
          </div>

          {/* Escáner */}
          <div className="flex-[2] flex flex-col gap-6">
            <div 
              ref={scannerRef} 
              className={`
                flex-1 border-2 border-dashed rounded-2xl relative flex flex-col items-center justify-center transition-all duration-300
                ${isOverScanner ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)]" : "border-cyan-900/30 bg-black/40"}
              `}
            >
              <Scan size={48} className={`transition-colors duration-300 ${isOverScanner ? "text-cyan-400" : "text-cyan-900"}`} />
              <span className={`text-[10px] font-mono uppercase tracking-widest mt-2 ${isOverScanner ? "text-cyan-400" : "text-cyan-900"}`}>
                {isOverScanner ? "OBJETO DETECTADO" : "ZONA DE ESCANEO"}
              </span>
              <motion.div animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-[1px] bg-cyan-500/20" />
            </div>
            
            <div className="h-32 bg-black/60 border border-cyan-900/30 p-6 rounded-xl font-mono text-xs text-cyan-100/70 uppercase leading-relaxed shadow-inner">
              {analysisText}
            </div>
          </div>
        </div>

        {/* 4. RESPUESTA DEL ACERTIJO */}
        <div className="h-16 bg-black border-t border-cyan-900/40 flex items-center px-8 font-mono">
          <Terminal size={20} className="text-cyan-500 mr-4" />
          <span className="text-cyan-900 mr-3 font-bold text-lg leading-none">{">"}</span>
          <input type="text" value={inputValue} onChange={handleInputChange} placeholder="INGRESE CÓDIGO DE ANULACIÓN..." className="flex-1 bg-transparent border-none outline-none text-cyan-400 text-sm tracking-[0.3em] placeholder:text-cyan-950 uppercase" autoFocus autoComplete="off" />
        </div>
      </motion.div>

      {/* 5. BOTONES DE PISTA */}
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
  );
}