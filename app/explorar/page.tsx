"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, DollarSign, Gift, Sparkles } from "lucide-react";
import RoomCard from "@/components/RoomCard";

const rooms = [
  {
    id: "domicilio",
    category: "A Domicilio",
    icon: <Home size={28} />,
    description:
      "Llevamos el kit completo a tu sala. Sin moverte de casa, transformamos tu espacio en una sala de escape.",
    features: ["Kit físico entregado en tu puerta", "Guía virtual en vivo", "1-6 jugadores", "45-60 min de juego"],
    gradient: "from-red-950/30 to-zinc-900",
  },
  {
    id: "premium",
    category: "Premium",
    icon: <DollarSign size={28} />,
    description:
      "Salas físicas con actores en vivo, efectos especiales y tecnología de punta para una experiencia inmersiva total.",
    features: ["Actores profesionales", "Efectos especiales", "Realidad aumentada", "2-8 jugadores"],
    gradient: "from-red-900/40 to-zinc-900",
  },
  {
    id: "gratis",
    category: "Gratis / Online",
    icon: <Gift size={28} />,
    description:
      "Demos y juegos de navegador gratuitos. Pruébanos ahora mismo sin compromiso desde cualquier dispositivo.",
    features: ["Sin registro", "Multiplataforma", "Actualizaciones semanales", "1-4 jugadores"],
    gradient: "from-red-800/20 to-zinc-900",
  },
];

const filters = [
  { id: "all", label: "Todos" },
  { id: "domicilio", label: "A Domicilio" },
  { id: "premium", label: "Premium" },
  { id: "gratis", label: "Gratis" },
];

export default function ExplorarPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? rooms
      : rooms.filter((r) => r.id === activeFilter);

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4 block">
            Encuentra tu escape
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            Explora nuestras <span className="text-red-600">modalidades</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Tres formas de vivir el misterio. Elige la que más se adapte a ti y
            prepárate para desafiar tus límites.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeFilter === f.id
                  ? "bg-red-600 text-white shadow-[0_0_15px_rgba(225,29,72,0.4)]"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {f.id === "all" ? null : null}
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((room, i) => (
            <div key={room.id} id={room.id}>
              <RoomCard
                title={room.category}
                description={room.description}
                icon={room.icon}
                href={`/explorar/${room.id}`}
                gradient={room.gradient}
                features={room.features}
              />
            </div>
          ))}
        </div>

        {/* Extra info for filtered state */}
        {filtered.length === 0 && (
          <p className="text-zinc-500 text-center py-20">
            No se encontraron salas para esta categoría.
          </p>
        )}

        {/* All rooms highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-red-950/20 to-zinc-900 border border-red-900/30 text-center"
        >
          <Sparkles size={40} className="mx-auto mb-4 text-red-600" />
          <h3 className="text-3xl font-bold text-white mb-2">
            ¿No sabes por dónde empezar?
          </h3>
          <p className="text-zinc-400 mb-6">
            Todos nuestros rooms están diseñados para principiantes y expertos por igual.
          </p>
          <button
            onClick={() => setActiveFilter("gratis")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            Probar un demo gratis
          </button>
        </motion.div>
      </section>
    </main>
  );
}
