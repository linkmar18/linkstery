"use client";

import { useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps: Record<string, {
  title: string;
  image: string;
  text: string;
}> = {
  "1": {
    title: "Día 1: El Despacho Sombrío",
    image: "/images/oficinista-p1.jpg",
    text: "Son las 7:43 de la mañana. El edificio está en silencio. Demasiado silencio. Cuando entras al despacho, notas que algo no encaja: el café de ayer sigue en la taza, el monitor parpadea con un mensaje que no enviaste, y la foto familiar en tu escritorio ha sido reemplazada por un sobre sin remitente. Tu instinto te dice que salgas, pero la puerta se cierra detrás de ti con un clic metálico. El teléfono en tu escritorio suena una vez y se corta. Alguien —o algo— quiere que estés aquí. El primer acertijo está frente a ti, escondido entre los papeles que cubren tu escritorio. No hay vuelta atrás.",
  },
};

export default function GameStepPage() {
  const params = useParams();
  const step = typeof params.step === "string" ? params.step : "1";
  const data = steps[step] || steps["1"];

  const currentStep = Number(step);
  const nextStep = currentStep + 1;
  const hasNext = currentStep < 15;

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-24 max-w-3xl mx-auto w-full">
        {/* Step indicator */}
        <div className="mb-8 text-zinc-600 font-mono text-sm tracking-widest">
          PASO {step} / 15
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-white text-center mb-10 leading-tight">
          {data.title}
        </h1>

        {/* Image */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 mb-10 bg-zinc-900 flex items-center justify-center">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                const div = document.createElement("div");
                div.className =
                  "flex flex-col items-center justify-center gap-3 text-zinc-600";
                div.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  <span class="text-sm">Próximamente</span>
                `;
                parent.appendChild(div);
              }
            }}
          />
        </div>

        {/* Narrative text */}
        <div className="text-zinc-300 text-lg leading-relaxed mb-12 text-left w-full">
          {data.text}
        </div>

        {/* Next button */}
        {hasNext && (
          <Link
            href={`/juegos/oficinista/${nextStep}`}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
          >
            Siguiente <ArrowRight size={20} />
          </Link>
        )}

        {!hasNext && (
          <Link
            href="/"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
          >
            Volver al inicio
          </Link>
        )}
      </div>
    </div>
  );
}
