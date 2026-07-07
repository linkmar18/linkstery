"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, CheckCircle, ArrowRight, Lightbulb, Zap, XCircle, RefreshCcw } from "lucide-react";
import Link from "next/link";

// --- CONFIGURACIÓN DE LOS CABLES ---
const CABLES = [
  { id: "amarillo", color: "bg-yellow-400", border: "border-yellow-600", label: "El cable Púrpura es el correcto para el bypass" },
  { id: "blanco", color: "bg-zinc-100", border: "border-zinc-400", label: "El cable Gris NO es el correcto" },
  { id: "purpura", color: "bg-purple-600", border: "border-purple-800", label: "El cable Amarillo está mintiendo" },
  { id: "gris", color: "bg-zinc-500", border: "border-zinc-700", label: "El cable Blanco está diciendo la verdad" },
];

const CORRECT_CABLE = "gris";

export default function NivelCables() {
  const [analysisText, setAnalysisText] = useState("SISTEMA SIN ENERGÍA: Conecte el cable correcto al puerto.");
  const [inputValue, setInputValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isCaptured, setIsCaptured] = useState(false);
  const [isOverSocket, setIsOverSocket] = useState(false);
  const socketRef = useRef<HTMLDivElement>(null);

  // --- LÓGICA DE FALLO ---
  const handleFail = () => {
    const newAttempts = attempts + 1;
    if (newAttempts >= 2) {
      setIsCaptured(true);
    } else {
      setAttempts(newAttempts);
      setAnalysisText(`¡ERROR! CORTO CIRCUITO DETECTADO. INTENTOS RESTANTES: ${2 - newAttempts}`);
    }
  };

  // --- LÓGICA DE COLISIÓN ---
  const checkCollision = (point: { x: number; y: number }) => {
    if (!socketRef.current) return false;
    const rect = socketRef.current.getBoundingClientRect();
    const padding = 400;
    return (
      point.x >= rect.left - padding && point.x <= rect.right + padding &&
      point.y >= rect.top - padding && point.y <= rect.bottom + padding
    );
  };

  const handleDrag = (event: any, info: any, cableLabel: string) => {
    setAnalysisText(`Recuerdo qué: "${cableLabel}"`);
    if (checkCollision(info.point)) {
      setIsOverSocket(true);
    } else {
      setIsOverSocket(false);
    }
  };

  const handleDragEnd = (event: any, info: any, cableId: string) => {
    setIsOverSocket(false);
    if (checkCollision(info.point)) {
      if (cableId === CORRECT_CABLE) {
        setSuccess(true);
      } else {
        handleFail();
      }
    }
  };

  // --- PANTALLA: HAS SIDO CAPTURADA ---
  if (isCaptured) {
    return (
      <div className="min-h-screen bg-red-950 flex flex-col items-center justify-center px-4 text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
          <XCircle size={80} className="text-white mb-6 animate-pulse" />
          <h2 className="text-5xl font-black text-white mb-4 uppercase italic">Has sido capturada</h2>
          <p className="text-red-200 text-lg mb-10 max-w-md">
            El corto circuito alertó a los ladrones. Kimberly ha sido interceptada por el equipo de seguridad.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="flex items-center gap-2 bg-white text-red-900 px-8 py-3 rounded-full font-bold uppercase hover:bg-red-100 transition-all"
          >
            <RefreshCcw size={20} /> Reintentar desde el inicio
          </button>
        </motion.div>
      </div>
    );
  }

  // --- PANTALLA: ÉXITO ---
  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-red-600/10 rounded-full flex items-center justify-center mb-10 border border-red-600/20 shadow-[0_0_50px_rgba(220,38,38,0.15)]">
            <CheckCircle size={56} className="text-red-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Código aceptado</h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-md leading-relaxed">El sistema se desbloquea. Una puerta oculta se revela frente a ti...</p>
          <Link href="/juegos/oficinista/siguiente-piso" className="group bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-bold flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)]">
            Continuar <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center px-4 py-16 font-sans selection:bg-cyan-500/30">
      
      {/* 1. TITULO */}
      <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight text-center">
        lógica de Raymond Smullyan, "Genial!"
      </h1>

      {/* 2. TEXTO DE LA HISTORIA */}
      <p className="text-zinc-400 max-w-2xl mb-12 text-lg leading-relaxed">
        Kimberly llega al piso 12, una zona de entrepiso técnico llena de cables y tuberías de alta tensión. Al 
        intentar abrir la pesada compuerta blindada que lleva a las escaleras de emergencia de los pisos inferiores, 
        se da cuenta de que los ladrones han usado una pequeña carga explosiva para fundir el mecanismo electrónico. 
        La puerta está bloqueada, pero Kimberly ve un panel de bypass con cuatro cables principales que han sido 
        arrancados y cuelgan pelados.
      </p>

      <p className="text-zinc-400 max-w-2xl mb-12 text-lg leading-relaxed">
        Para forzar la apertura magnética, debe conectar el cable correcto al puerto de energía. Si conecta el 
        equivocado, provocará un cortocircuito que la dejará atrapada y enviará una alerta de ubicación exacta 
        a los ladrones. Kimberly sabe unos de los cables da error por la fábula litería de Raymond Smullyan, 
        por los manuales de seguridad que <span className="text-green-500">un cable es el verdadero </span>, 
        mientras que los otros <span className="text-red-500">tres cables son mentiras </span> 
        porque están dañados, y hacen contacto llamando así a los ladrones. Cuando toma un cable ella dice:
      </p>

      {/* 3. DISEÑO VISUAL / INTERACTIVIDAD (PANEL DE CABLES) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="w-full max-w-4xl bg-[#0d0d0d] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col mb-16 text-left"
      >
        <div className="bg-[#151515] px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-500 text-[10px] tracking-widest font-mono uppercase">
            <Zap size={14} className="text-yellow-500" /> <span>BYPASS_TERMINAL_V12</span>
          </div>
          <div className="flex gap-4">
            <span className="text-[10px] font-mono text-red-500 uppercase">Alert Level: High</span>
            <div className="flex gap-1">
              {[...Array(2)].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i < attempts ? "bg-red-600 shadow-[0_0_5px_red]" : "bg-zinc-800"}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col md:flex-row gap-12 min-h-[450px]">
          {/* Lado cables sueltos */}
          <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-8 flex flex-col justify-around relative">
            <span className="absolute top-4 left-4 text-[9px] text-zinc-600 uppercase font-mono tracking-widest">Cables Expuestos</span>
            {CABLES.map((cable) => (
              <div key={cable.id} className="flex items-center gap-4">
                <motion.div
                  drag
                  dragSnapToOrigin
                  onDrag={(e, i) => handleDrag(e, i, cable.label)}
                  onDragEnd={(e, i) => handleDragEnd(e, i, cable.id)}
                  whileDrag={{ scale: 1.1, zIndex: 50 }}
                  className={`w-32 h-4 ${cable.color} rounded-l-full cursor-grab active:cursor-grabbing border-r-4 border-zinc-900 shadow-lg`}
                />
                <span className="text-[10px] font-mono text-zinc-700 uppercase">{cable.id}</span>
              </div>
            ))}
          </div>

          {/* Lado Puerto de Conexión */}
          <div className="flex-1 flex flex-col gap-6 items-center justify-center">
            <div 
              ref={socketRef}
              className={`w-32 h-32 rounded-2xl border-4 border-double transition-all duration-300 flex flex-col items-center justify-center gap-2
                ${isOverSocket ? "border-yellow-400 bg-yellow-500/10 shadow-[0_0_30px_rgba(234,179,8,0.2)]" : "border-zinc-800 bg-black"}
              `}
            >
              <div className="w-10 h-10 bg-zinc-900 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                <Zap size={20} className={isOverSocket ? "text-yellow-400 animate-pulse" : "text-zinc-700"} />
              </div>
              <span className="text-[9px] font-mono text-zinc-600 text-center px-4 uppercase tracking-tighter">Puerto de Energía Principal</span>
            </div>

            {/* Cuadro de texto informativo */}
            <div className="w-full h-24 bg-black border border-zinc-800 p-4 rounded-lg font-mono text-[11px] text-zinc-400 uppercase leading-relaxed shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-1 bg-yellow-500 rounded-full" />
                <span className="text-[9px] text-yellow-600 tracking-widest uppercase">Diagnóstico</span>
              </div>
              {analysisText}
            </div>
          </div>
        </div>

        {/* 4. RESPUESTA DEL ACERTIJO (TERMINAL) */}
        <div className="h-16 bg-black border-t border-zinc-800 flex items-center px-8 font-mono">
          <Terminal size={20} className="text-zinc-600 mr-4" />
          <span className="text-zinc-800 mr-3 font-bold">{">"}</span>
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => {
              setInputValue(e.target.value);
              if (e.target.value.toLowerCase() === "gris") setSuccess(true);
            }} 
            placeholder="INGRESE EL COLOR DEL CABLE..." 
            className="flex-1 bg-transparent border-none outline-none text-zinc-300 text-sm tracking-[0.3em] placeholder:text-zinc-900 uppercase"
            autoComplete="off"
          />
        </div>
      </motion.div>

      {/* 5. BOTONES DE PISTA */}
      <div className="w-full max-w-4xl pt-8 border-t border-zinc-800/60 text-left">
        <div className="flex items-center gap-3 mb-6 font-bold text-zinc-500 text-sm uppercase tracking-widest text-left">
          <Lightbulb size={20} className="text-red-600 fill-red-600/10" /> ¿Necesitas ayuda?
        </div>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3].map((n) => (
            <Link 
              key={n} 
              href={`/juegos/oficinista/sistemas/pista-${n}`} 
              className="px-8 py-3 border border-zinc-800 rounded-full text-white text-sm font-bold transition-all min-w-[120px] text-center hover:border-red-600 hover:text-red-600"
            >
              Pista {n}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}