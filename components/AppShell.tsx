"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isGame = pathname.startsWith("/juegos");

  if (isGame) {
    return (
      <>
        <div className="fixed top-0 left-0 z-50 p-6">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-red-600 hover:text-red-500 transition-colors"
          >
            LINKSTERY
          </Link>
        </div>
        <main className="flex-1">{children}</main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
