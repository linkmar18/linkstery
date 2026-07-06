"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page1() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24 max-w-3xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-10 leading-tight">
            Día 1: El Despacho Sombrío
          </h1>

          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 mb-10 bg-zinc-900 flex items-center justify-center">
            <img
              src="/images/oficinista.jpg"
              alt="Despacho sombrío"
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

          <p className="text-zinc-300 text-lg leading-relaxed mb-12 text-left">
            <span className="text-red-600">Kimberly</span> es un talentoso analista de software que, tras finalizar su 
            jornada laboral, acepta un último favor de su jefe: revisar una serie 
            de documentos altamente confidenciales relacionados con la seguridad 
            del edificio. Los archivos están protegidos mediante complejos sistemas 
            de cifrado y rompecabezas digitales, por lo que solo alguien con sus 
            conocimientos puede descifrarlos.
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-12 text-left">
            Antes de irse, su jefe también le pide que inspeccione el sistema de 
            cámaras de seguridad, ya que varias dejaron de funcionar después de 
            haber sido aparentemente manipuladas y saboteadas. Tras horas de trabajo, 
            Kimberly consigue restaurar el sistema y decide comprobar que todo 
            funcione correctamente.
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-12 text-left">
            Sin embargo, al activar las cámaras, presencia una escena inquietante: 
            los guardias de seguridad del vestíbulo están inconscientes y presentan 
            claros signos de haber sido atacados. Al revisar las demás cámaras, 
            descubre que un grupo de ladrones ha logrado infiltrarse en el edificio 
            y se ha dividido para registrar cada piso. Mientras tanto, el grupo 
            principal se dirige al último nivel, donde se encuentra la oficina de 
            su jefe, utilizando el ascensor como acceso directo.
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-12 text-left">
            Atrapado dentro del edificio y sin saber en quién confiar, Kimberly 
            deberá usar su inteligencia, resolver acertijos y aprovechar los 
            sistemas de seguridad para detener el robo antes de que sea demasiado 
            tarde.
          </p>

          <div className="flex justify-center">
            <Link
              href="/juegos/oficinista/2"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
            >
              Siguiente <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
