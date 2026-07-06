"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Home, DollarSign, Gamepad2, Monitor, ArrowLeft, Clock, Users, Star } from "lucide-react";
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
    title: "Juegos Gratis",
    icon: <Gamepad2 size={32} />,
    tagline: "Juega ahora, sin registrarte",
    description:
      "Juegos de navegador gratuitos. Sin descargas, sin registro, sin compromiso. Resuelve acertijos, descifra códigos y compite con amigos desde cualquier dispositivo.",
    highlights: [
      { icon: <Clock size={18} />, label: "Duración", value: "15-45 min" },
      { icon: <Users size={18} />, label: "Jugadores", value: "1-4" },
      { icon: <Star size={18} />, label: "Dificultad", value: "Baja-Media" },
    ],
    gradient: "from-emerald-900 via-zinc-900 to-black",
  },
  "online-paga": {
    title: "Online de Paga",
    icon: <Monitor size={32} />,
    tagline: "La experiencia digital premium",
    description:
      "Experiencias digitales premium con game masters en vivo, producción profesional y acertijos diseñados por expertos. Conéctate desde casa y vive un escape room interactivo con la misma calidad que una sala física, pero sin moverte.",
    highlights: [
      { icon: <Clock size={18} />, label: "Duración", value: "60-90 min" },
      { icon: <Users size={18} />, label: "Jugadores", value: "2-8" },
      { icon: <Star size={18} />, label: "Dificultad", value: "Media-Alta" },
    ],
    gradient: "from-red-800 via-zinc-900 to-black",
  },
};

type RoomKey = keyof typeof rooms;

const fallbackKeys: Record<string, RoomKey> = {
  domicilio: "domicilio",
  premium: "premium",
  gratis: "gratis",
  "online-paga": "online-paga",
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

          {key !== "gratis" && (
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
          )}

          {/* Games list for Juegos Gratis */}
          {key === "gratis" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-white">
                Juegos disponibles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Oficinista Card */}
                <a
                  href="/juegos/oficinista/sinopsis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-red-600 transition-all overflow-hidden block cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 relative flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/oficinista.jpg"
                      alt="Oficinista"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          const placeholder = document.createElement("div");
                          placeholder.className =
                            "flex flex-col items-center justify-center gap-3 text-zinc-600";
                          placeholder.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <span class="text-sm">Próximamente</span>
                          `;
                          parent.appendChild(placeholder);
                        }
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white">
                        Oficinista
                      </h3>
                      <span className="bg-emerald-900/50 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">
                        GRATIS
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-4">
                      Un día normal en la oficina se convierte en una pesadilla.
                      Descubre qué está pasando mientras el reloj avanza.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-red-600" /> 45 min
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={14} className="text-red-600" /> 1-2 jug.
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Star size={14} className="text-red-600" /> Media
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          )}

          {key === "gratis" ? (
            <a
              href="/juegos/oficinista/sinopsis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
            >
              Jugar ahora
            </a>
          ) : (
            <Link
              href="/contacto"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold inline-flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(225,29,72,0.5)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)]"
            >
              Reservar experiencia
            </Link>
          )}
        </motion.div>
      </section>
    </main>
  );
}
