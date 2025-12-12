"use client";

import Link from 'next/link';

export default function PerfilPage() {
  return (
    <div className="min-h-screen w-full bg-[#DAD8CB] text-[#2D4539] font-sans relative">
      {/* LOGO NO CANTO ESQUERDO */}
      <img
        src="/logo.jpg"
        alt="Logo"
        className="w-48 absolute top-6 left-6"
      />

      {/* BOTÃO VOLTAR - CANTO DIREITO COM SVG */}
      <div className="absolute right-6 top-6">
        <Link href="/principal" aria-label="Voltar">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M21 12a9 9 0 11-9-9" stroke="#2D4539" strokeWidth="1.4" />
            <path d="M10 8l-4 4 4 4" stroke="#2D4539" strokeWidth="1.6" />
          </svg>
        </Link>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex flex-col items-center pt-36">
        {/* Ícone Bootstrap Icons substituído */}
        <div className="w-32 h-32 mb-4 flex items-center justify-center bg-[#2D4539] rounded-full text-[#DAD8CB]">
          <i className="bi bi-person-fill text-6xl"></i>
        </div>

        <h2 className="text-xl font-semibold">Amanda Guerra</h2>
        <h3 className="text-lg font-semibold mt-4">Nutricionista</h3>

        <div className="flex flex-col w-[330px] mt-6 space-y-3">
          <input
            type="text"
            readOnly
            value="Amanda Guerra dos Santos"
            className="border border-[#2D4539] rounded-md px-3 py-1 bg-transparent text-sm"
          />

          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value="CRN-8: XYZ2"
              className="border border-[#2D4539] rounded-md px-3 py-1 w-full bg-transparent text-sm"
            />
            <input
              type="text"
              readOnly
              value="15/07/2000"
              className="border border-[#2D4539] rounded-md px-3 py-1 w-full bg-transparent text-sm"
            />
          </div>

          <input
            type="email"
            readOnly
            value="nutriamanda@gmail.com"
            className="border border-[#2D4539] rounded-md px-3 py-1 bg-transparent text-sm"
          />

          <input
            type="text"
            readOnly
            value="(81) 987654321"
            className="border border-[#2D4539] rounded-md px-3 py-1 bg-transparent text-sm"
          />
        </div>
      </div>
    </div>
  );
}