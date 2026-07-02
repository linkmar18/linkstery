"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Home, DollarSign, Gift, ArrowLeft, Clock, Users, Star } from "lucide-react";
import Link from "next/link";

const rooms = {
  domicilio: {
    title: "A Domicilio",
    icon: <Home size={32} />,
    tagline: "El misterio llega a tu puerta",
    description:
      "Transformamos tu sala, jardín o cualquier espacio en una sala de escape completa. Recibirás un kit físico con todo lo necesario: candados, mapas, pistas selladas y más. Un game master te guiará virtualmente en tiempo real para que la experiencia sea perfecta.",
    highlights: [
      { icon: <Clock size={18} />, label: "Duración", value: "45-60 min" },
      { icon: <Users size={18} />, label: "Jugadores", value: "1-6" },
      { icon: <Star size={18} />, label: "Dificultad", value: "Media" },
    ],
    gradient: "from-red-950 via-zinc-900 to-black",
  },
  premium: {
    title: "Premium",
    icon: <DollarSign size={32} />,
    tagline: "La experiencia física definitiva",
    description:
      "Salas físicas diseñadas con producción cinematográfica. Actores en vivo, efectos especiales, realidad aumentada y escenarios hiperrealistas te sumergirán en una historia que nunca olvidarás. Cada sala es una obra de arte interactiva.",
    highlights: [
      { icon: <Clock size={18} />, label: "Duración", value: "60-90 min" },
      { icon: <Users size={18} />, label: "Jugadores", value: "2-8" },
      { icon: <Star size={18} />, label: "Dificultad", value: "Alta" },
    ],
    gradient: "from-red-900 via-zinc-900 to-black",
  },
  gratis: {
    title: "Gratis / Online",
    icon: <Gift size={32} />,
    tagline: "Juega ahora, sin registrarte",
    description:
      "Demos y experiencias completas directamente desde tu navegador. Sin descargas, sin registro, sin compromiso. Resuelve acertijos, descifra códigos y compite con amigos desde cualquier dispositivo. Perfecto para una prueba rápida.",
    highlights: [
      { icon: <Clock size={18} />, label: "Duración", value: "15-30 min" },
      { icon: <Users size={18} />, label: "Jugadores", value: "1-4" },
      { icon: <Star size={18} />, label: "Dificultad", value: "Baja-Media" },
    ],
    gradient: "from-red-800 via-zinc-900 to-black",
  },
};

type RoomKey = keyof typeof rooms;

const fallbackKeys: Record<string, RoomKey> = {
  domicilio: "domicilio",
  premium: "premium",
  gratis: "gratis",
};

export default function RoomDetailPage() {
  const params = useParams();
  const idRaw = typeof params.id === "string" ? params.id : "";
  const key = fallbackKeys[idRaw];
  const room = key ? rooms[key] : null;

  if (!room) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] pt-20 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-black text-red-600 mb-4">404</h1>
          <p className="text-zinc-400 text-xl mb-8">
            Esta sala no existe... o sigue siendo un misterio.
          </p>
          <Link
            href="/explorar"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} /> Volver a explorar
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen bg-[#0a0a0a] pt-20 bg-gradient-to-b ${room.gradient}`}>
      <section className="max-w-5xl mx-auto px-4 py-24">
        <Link
          href="/explorar"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors mb-12"
        >
          <ArrowLeft size={18} /> Volver a explorar
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mb-6 text-black">
            {room.icon}
          </div>

          <span className="text-red-600 font-bold tracking-[0.3em] uppercase mb-2 block">
            {room.tagline}
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            {room.title}
          </h1>

          <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl mb-12">
            {room.description}
          </p>

          <div className="flex flex-wrap gap-8 mb-12">
            {room.highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-3 bg-zinc-900/50 px-6 py-3 rounded-xl border border-zinc-800"
              >
                <span className="text-red-600">{h.icon}</span>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">
                    {h.label}
                  </p>
                  <p className="font-bold text-white">{h.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contacto"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
          >
            Reservar experiencia
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
