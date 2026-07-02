"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Home, DollarSign, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    label: "A Domicilio",
    href: "/explorar#domicilio",
    icon: <Home size={18} />,
    desc: "Llevamos el misterio a tu casa",
  },
  {
    label: "Premium",
    href: "/explorar#premium",
    icon: <DollarSign size={18} />,
    desc: "Experiencias físicas de alto nivel",
  },
  {
    label: "Gratis",
    href: "/explorar#gratis",
    icon: <Gift size={18} />,
    desc: "Demos y juegos online",
  },
];

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-black tracking-tighter text-red-600"
        >
          LINKSTERY
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-red-500"
                  : "hover:text-red-500 text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Categories dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-500 transition-colors text-white">
              Explorar <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-zinc-900 border border-red-900/50 p-2 mt-2 rounded-xl shadow-2xl"
                >
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="flex items-center gap-3 p-3 hover:bg-red-600/10 rounded-lg group"
                    >
                      <span className="text-red-600">{cat.icon}</span>
                      <div>
                        <p className="font-bold text-white">{cat.label}</p>
                        <p className="text-xs text-zinc-400">{cat.desc}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/contacto"
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(225,29,72,0.4)] text-white"
          >
            Contactar
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-red-600"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-t border-red-900/30 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {[...navLinks, { label: "Contacto", href: "/contacto" }].map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-red-500"
                        : "text-white hover:text-red-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest mt-2">
                Categorías
              </span>
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 p-2 hover:bg-red-600/10 rounded-lg"
                >
                  <span className="text-red-600">{cat.icon}</span>
                  <div>
                    <p className="font-bold text-white">{cat.label}</p>
                    <p className="text-xs text-zinc-400">{cat.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
