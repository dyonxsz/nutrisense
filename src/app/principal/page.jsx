'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PrincipalPacientePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#DAD8CB]">
      {/* HEADER SUPERIOR */}
      <div className="bg-white shadow-sm border-b border-[#C8C6BA]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* LOGO E NOME */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img 
                src="/logo.jpg" 
                alt="NutriSense Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <h1 className="text-2xl font-bold text-[#2D4539]">NUTRISENSE</h1>
            </Link>

            {/* BOTÕES SUPERIORES */}
            <div className="flex items-center gap-3">
              {/* NOTIFICAÇÕES */}
              <Link href="/notificacoes" className="relative p-3 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-bell text-xl text-[#2D4539]"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* PERFIL */}
              <Link href="/perfil" className="p-3 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-person-circle text-2xl text-[#2D4539]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto p-6 pb-20">
        {/* BARRA DE PESQUISA */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-xl">
            <div className="flex items-center bg-white border border-[#C8C6BA] rounded-full px-6 py-3 shadow-sm">
              <i className="bi bi-search text-gray-500 mr-3"></i>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquise por recursos, dietas ou conversas..."
                className="w-full text-gray-700 bg-transparent outline-none placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* SAUDAÇÃO */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2D4539] mb-2">
            Olá Ruan Pereira, bem-vindo ao NutriSense!
          </h2>
          <p className="text-gray-600">
            Sua saúde em boas mãos. Acompanhe seu progresso e conecte-se com seu nutricionista.
          </p>
        </div>

        {/* CARDS DE INFORMAÇÃO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* CARD DO NUTRICIONISTA */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E7E5D9]">
            <div className="flex items-center mb-4">
              <div className="bg-[#2D4539] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                AG
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2D4539]">Nutricionista Amanda Guerra</h3>
                <p className="text-sm text-gray-500">CRN-8: XYZ2</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Para garantir uma alimentação saudável e equilibrada,
              é importante distribuir as refeições ao longo do dia,
              priorizando alimentos frescos e minimamente
              processados. Além disso, busque incluir uma variedade
              de nutrientes em cada refeição.
            </p>
          </div>

          {/* CARD DE PROGRESSO */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E7E5D9]">
            <div className="flex items-center mb-4">
              <div className="bg-[#2D4539] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                RP
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2D4539]">Seu Progresso</h3>
                <p className="text-sm text-gray-500">IMC: 27.5 (Sobrepeso)</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Com base no seu IMC de 27,5, isso indica que você está
              na faixa de sobrepeso. O próximo passo é adotar
              mudanças no estilo de vida, como uma alimentação
              equilibrada e a prática regular de exercícios.
            </p>
          </div>
        </div>

        {/* ACESSO RÁPIDO PARA PACIENTES */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#2D4539] mb-6">Acesso Rápido</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* CHAT */}
            <Link href="/chat">
              <div className="bg-white p-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#E7E5D9]">
                <div className="w-14 h-14 bg-[#7E8F7B] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-chat-heart text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-[#2D4539]">Chat</h4>
                <p className="text-sm text-gray-600 mt-1">Converse com nutricionista</p>
              </div>
            </Link>

            {/* OBJETIVOS */}
            <Link href="/objetivos">
              <div className="bg-white p-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#E7E5D9]">
                <div className="w-14 h-14 bg-[#7E8F7B] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-bullseye text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-[#2D4539]">Objetivos</h4>
                <p className="text-sm text-gray-600 mt-1">Acompanhe suas metas</p>
              </div>
            </Link>

            {/* ESTATÍSTICAS */}
            <Link href="/estatisticas">
              <div className="bg-white p-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#E7E5D9]">
                <div className="w-14 h-14 bg-[#7E8F7B] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-bar-chart text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-[#2D4539]">Estatísticas</h4>
                <p className="text-sm text-gray-600 mt-1">Veja seu progresso</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}