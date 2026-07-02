"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RoomCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  gradient?: string;
  features?: string[];
}

export default function RoomCard({
  title,
  description,
  icon,
  href,
  gradient = "from-red-900/20 to-zinc-900",
  features,
}: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={href}
        className={`group relative block bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 hover:border-red-600 transition-all cursor-pointer bg-gradient-to-br ${gradient} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-colors" />

        <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 text-black group-hover:rotate-12 transition-transform">
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-zinc-400 mb-6">{description}</p>

        {features && (
          <ul className="mb-6 space-y-2">
            {features.map((f) => (
              <li key={f} className="text-sm text-zinc-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <span className="text-red-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
          Ver más <ArrowRight size={16} />
        </span>
      </Link>
    </motion.div>
  );
}
