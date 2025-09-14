// pages/obrigado.jsx

import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Obrigado() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-10 text-center max-w-md">
        <CheckCircle className="mx-auto h-16 w-16 text-violet-500 mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Obrigada!
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Sua mensagem foi enviada com sucesso. Em breve entrarei em contato.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium shadow-md hover:from-blue-700 hover:to-purple-700 transition"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
