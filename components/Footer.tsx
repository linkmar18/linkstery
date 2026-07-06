import { Ghost } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link href="/" className="text-3xl font-black tracking-tighter text-red-600">
            LINKSTERY
          </Link>
          <p className="text-zinc-500 mt-4 max-w-md">
            El nexo entre el enigma y el jugador. Experiencias de escape room
            que desafían los límites de la realidad.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
            Navegación
          </h4>
          <div className="flex flex-col gap-3 text-zinc-400">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Inicio
            </Link>
            <Link href="/nosotros" className="hover:text-red-500 transition-colors">
              Nosotros
            </Link>
            <Link href="/explorar" className="hover:text-red-500 transition-colors">
              Explorar
            </Link>
            <Link href="/contacto" className="hover:text-red-500 transition-colors">
              Contacto
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
            Categorías
          </h4>
          <div className="flex flex-col gap-3 text-zinc-400">
            <Link
              href="/explorar#domicilio"
              className="hover:text-red-500 transition-colors"
            >
              A Domicilio
            </Link>
            <Link
              href="/explorar#premium"
              className="hover:text-red-500 transition-colors"
            >
              Premium
            </Link>
            <Link
              href="/explorar#gratis"
              className="hover:text-red-500 transition-colors"
            >
              Juegos Gratis
            </Link>
            <Link
              href="/explorar#online-paga"
              className="hover:text-red-500 transition-colors"
            >
              Online de Paga
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900 py-6 text-center text-zinc-600 text-sm">
        <p className="flex items-center justify-center gap-2">
          <Ghost size={16} className="text-red-600" />
          © {new Date().getFullYear()} LINKSTERY &mdash; Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
