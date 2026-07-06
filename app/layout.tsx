import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "@/components/AppShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkstery — El misterio no tiene límites",
  description:
    "Linkstery es la plataforma definitiva de escape rooms. Descubre experiencias a domicilio, salas premium y juegos online gratis.",
  openGraph: {
    title: "Linkstery — El misterio no tiene límites",
    description:
      "La plataforma definitiva de escape rooms. Experiencias a domicilio, premium y online.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white selection:bg-linkstery-red selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
