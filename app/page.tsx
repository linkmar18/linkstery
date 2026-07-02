"use client";
import React, { useState } from 'react';
import { ChevronDown, Ghost, Home, DollarSign, Gift, Mail, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LinksteryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-red-600">
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-3xl font-black tracking-tighter text-red-600">LINKSTERY</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#" className="hover:text-red-500 transition-colors">Inicio</a>
            <a href="#about" className="hover:text-red-500 transition-colors">De qué se trata</a>
            
            <div className="relative group">
              <button 
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-red-500 transition-colors"
              >
                Tipos de Escape <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-zinc-900 border border-red-900/50 p-2 mt-2 rounded-xl shadow-2xl"
                  >
                    <a href="#domicilio" className="flex items-center gap-3 p-3 hover:bg-red-600/10 rounded-lg group">
                      <Home size={18} className="text-red-600" /> 
                      <div>
                        <p className="font-bold">A domicilio</p>
                        <p className="text-xs text-zinc-400">Llevamos el misterio a tu casa</p>
                      </div>
                    </a>
                    <a href="#paga" className="flex items-center gap-3 p-3 hover:bg-red-600/10 rounded-lg">
                      <DollarSign size={18} className="text-red-600" />
                      <div>
                        <p className="font-bold">De paga</p>
                        <p className="text-xs text-zinc-400">Experiencias premium</p>
                      </div>
                    </a>
                    <a href="#gratis" className="flex items-center gap-3 p-3 hover:bg-red-600/10 rounded-lg">
                      <Gift size={18} className="text-red-600" />
                      <div>
                        <p className="font-bold">Gratis</p>
                        <p className="text-xs text-zinc-400">Demos y juegos online</p>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <a href="#contact" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(225,29,72,0.4)]">
              Contactar
            </a>
          </div>

          <button className="md:hidden text-red-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-4 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full -z-10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4 block">¿Podrás escapar?</span>
          <h1 className="text-6xl md:text-8xl font-black mb-6">EL MISTERIO <br /> <span className="text-red-600">NO TIENE LÍMITES</span></h1>
          <p className="text-zinc-400 max-w-2xl text-lg mb-10">
            Descubre Linkstery, la plataforma definitiva de escape rooms. Desde desafíos físicos hasta experiencias digitales gratuitas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 transition-all">
              Explorar Salas <ArrowRight size={20} />
            </button>
            <button className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full text-lg font-bold transition-all">
              Ver Ofertas
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">¿De qué se trata <span className="text-red-600">Linkstery</span>?</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Linkstery no es solo una página de reservas; es el nexo entre el enigma y el jugador. Nacimos para curar las mejores experiencias de escape, conectando mentes curiosas con los retos más retorcidos del mundo.
            </p>
            <ul className="space-y-4">
              {["Puzles únicos", "Ambientes inmersivos", "Soporte 24/7"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold italic underline decoration-red-600">
                  <Ghost className="text-red-600" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-video bg-red-600/20 border-2 border-red-600/30 rounded-3xl flex items-center justify-center relative group overflow-hidden">
             <div className="text-red-600 font-black text-4xl group-hover:scale-110 transition-transform tracking-widest">MISTERIO</div>
          </div>
        </div>
      </section>

      {/* --- CATEGORIES GRID --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Nuestras <span className="text-red-600">Modalidades</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "A Domicilio", icon: <Home />, desc: "Llevamos el kit completo a tu sala. Sin moverte de casa.", id: "domicilio" },
            { title: "Premium", icon: <DollarSign />, desc: "Salas físicas con actores y tecnología de punta.", id: "paga" },
            { title: "Gratis / Demo", icon: <Gift />, desc: "Pruébanos ahora mismo con nuestros juegos web.", id: "gratis" }
          ].map((card) => (
            <div key={card.id} id={card.id} className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-red-600 transition-all group cursor-pointer">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 text-black group-hover:rotate-12 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-zinc-400 mb-6">{card.desc}</p>
              <span className="text-red-600 font-bold flex items-center gap-2 group-hover:underline">
                Ver más <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-20 px-4 bg-red-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Mail size={64} className="mx-auto mb-6" />
          <h2 className="text-5xl font-black mb-6">¿TIENES DUDAS?</h2>
          <p className="text-red-100 text-xl mb-10">Nuestro equipo de Game Masters está listo para responderte.</p>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Tu correo electrónico" className="p-4 rounded-xl bg-white text-black outline-none font-bold" />
            <textarea placeholder="¿En qué podemos ayudarte?" className="p-4 rounded-xl bg-white text-black outline-none min-h-[150px] font-bold"></textarea>
            <button className="bg-zinc-950 text-white p-4 rounded-xl font-black hover:bg-zinc-800 transition-all uppercase tracking-widest">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-zinc-600 border-t border-zinc-900">
        <p>© 2024 LINKSTERY - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}