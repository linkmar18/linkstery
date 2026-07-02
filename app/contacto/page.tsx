"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
  email: string;
  message: string;
}

interface Touched {
  email: boolean;
  message: boolean;
}

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>({ email: "", message: "" });
  const [touched, setTouched] = useState<Touched>({
    email: false,
    message: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError = touched.email && !emailRegex.test(form.email);
  const messageError = touched.message && form.message.trim().length < 10;

  const isValid =
    emailRegex.test(form.email) && form.message.trim().length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, message: true });

    if (!isValid) return;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] pt-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-red-600" />
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            ¡Mensaje enviado!
          </h2>
          <p className="text-zinc-400 text-lg">
            Un Game Master te responderá en las próximas 24 horas. Revisa tu
            bandeja de entrada.
          </p>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-20">
      <section className="max-w-3xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Mail size={48} className="mx-auto mb-6 text-red-600" />
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-white">
            ¿TIENES <span className="text-red-600">DUDAS</span>?
          </h1>
          <p className="text-zinc-400 text-xl">
            Nuestro equipo de Game Masters está listo para responderte.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onBlur={() => setTouched({ ...touched, email: true })}
                placeholder="tu@correo.com"
                className={`w-full p-4 rounded-xl bg-zinc-900 border-2 text-white outline-none transition-colors ${
                  emailError
                    ? "border-red-600 focus:border-red-500"
                    : touched.email && !emailError
                    ? "border-green-700 focus:border-green-600"
                    : "border-zinc-800 focus:border-red-600"
                }`}
              />
              {emailError && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600">
                  <AlertCircle size={20} />
                </span>
              )}
            </div>
            {emailError && (
              <p className="text-red-500 text-sm mt-1">
                Ingresa un correo válido
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">
              Mensaje
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onBlur={() => setTouched({ ...touched, message: true })}
              placeholder="¿En qué podemos ayudarte?"
              rows={6}
              className={`w-full p-4 rounded-xl bg-zinc-900 border-2 text-white outline-none resize-none transition-colors ${
                messageError
                  ? "border-red-600 focus:border-red-500"
                  : touched.message && !messageError
                  ? "border-green-700 focus:border-green-600"
                  : "border-zinc-800 focus:border-red-600"
              }`}
            />
            {messageError && (
              <p className="text-red-500 text-sm mt-1">
                El mensaje debe tener al menos 10 caracteres
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid && touched.email && touched.message}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-white p-4 rounded-xl font-black transition-all uppercase tracking-widest text-lg flex items-center justify-center gap-3"
          >
            <Send size={20} />
            Enviar Mensaje
          </button>
        </motion.form>
      </section>
    </main>
  );
}
