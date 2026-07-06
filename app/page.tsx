"use client";

import { Ghost, Home, DollarSign, Gamepad2, Monitor, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";

const rooms = [
  {
    title: "A Domicilio",
    icon: <Home size={28} />,
    desc: "Llevamos el kit completo a tu sala. Sin moverte de casa.",
    href: "/explorar#domicilio",
    features: ["Kit físico", "Guía en vivo", "45-60 min"],
  },
  {
    title: "Premium",
    icon: <DollarSign size={28} />,
    desc: "Salas físicas con actores y tecnología de punta.",
    href: "/explorar#premium",
    features: ["Actores reales", "Realidad aumentada", "Alta tecnología"],
  },
  {
    title: "Juegos Gratis",
    icon: <Gamepad2 size={28} />,
    desc: "Pruébanos ahora mismo con nuestros juegos web.",
    href: "/explorar#gratis",
    features: ["Sin registro", "Multiplataforma", "Sin descargas"],
  },
  {
    title: "Online de Paga",
    icon: <Monitor size={28} />,
    desc: "Experiencias digitales premium desde cualquier dispositivo.",
    href: "/explorar#online-paga",
    features: ["En vivo", "Alta producción", "Multijugador"],
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About preview */}
      <section className="py-24 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              ¿De qué se trata <span className="text-red-600">Linkstery</span>?
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Linkstery no es solo una página de reservas; es el nexo entre el
              enigma y el jugador. Nacimos para curar las mejores experiencias
              de escape, conectando mentes curiosas con los retos más retorcidos
              del mundo.
            </p>
            <ul className="space-y-4">
              {["Puzles únicos", "Ambientes inmersivos", "Soporte 24/7"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-bold underline decoration-red-600 text-zinc-200"
                  >
                    <Ghost className="text-red-600 shrink-0" size={20} />{" "}
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline mt-6"
            >
              Saber más <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video bg-gradient-to-br from-red-900/30 to-zinc-900 border-2 border-red-900/30 rounded-3xl flex items-center justify-center group overflow-hidden"
          >
            <div className="text-red-600/60 font-black text-5xl group-hover:scale-110 transition-transform tracking-widest select-none">
              MISTERIO
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white">
            Nuestras <span className="text-red-600">Modalidades</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
            Cuatro formas de vivir el misterio. Elige tu experiencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, i) => (
            <RoomCard
              key={room.title}
              title={room.title}
              description={room.desc}
              icon={room.icon}
              href={room.href}
              features={room.features}
            />
          ))}
        </div>
      </section>
    </>
  );
}
