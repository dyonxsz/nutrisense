'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PrincipalProfissionalPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pacientes] = useState([
    { id: 1, nome: 'Ruan Pereira', ultimaConsulta: '2 dias atrás', status: 'ativo' },
    { id: 2, nome: 'Maria Silva', ultimaConsulta: '1 semana atrás', status: 'ativo' },
    { id: 3, nome: 'Carlos Santos', ultimaConsulta: '3 dias atrás', status: 'pendente' },
    { id: 4, nome: 'Ana Oliveira', ultimaConsulta: 'Hoje', status: 'ativo' },
  ]);

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
              <h1 className="text-2xl font-bold text-[#2D4539]">NUTRISENSE <span className="text-sm font-normal">PROFISSIONAL</span></h1>
            </Link>

            {/* BOTÕES SUPERIORES */}
            <div className="flex items-center gap-3">
              {/* NOTIFICAÇÕES */}
              <Link href="/notificacoes" className="relative p-3 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-bell text-xl text-[#2D4539]"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </Link>

              {/* PERFIL PROFISSIONAL */}
              <Link href="/perfil" className="p-3 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-person-badge text-2xl text-[#2D4539]"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto p-6 pb-20">
        {/* BARRA DE PESQUISA */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-xl">
            <div className="flex items-center bg-white border border-[#C8C6BA] rounded-full px-6 py-3 shadow-sm">
              <i className="bi bi-search text-gray-500 mr-3"></i>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Pesquise pacientes, dietas ou consultas..."
                className="w-full text-gray-700 bg-transparent outline-none placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* SAUDAÇÃO PROFISSIONAL */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#2D4539] mb-2">
            Olá Dra. Amanda Guerra!
          </h2>
          <p className="text-gray-600">
            Bem-vinda ao seu painel profissional. Gerencie seus pacientes e acompanhe seus progressos.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="bg-white px-4 py-2 rounded-lg border border-[#E7E5D9]">
              <p className="text-sm text-gray-500">CRN-8</p>
              <p className="font-semibold">XYZ2</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-[#E7E5D9]">
              <p className="text-sm text-gray-500">Pacientes ativos</p>
              <p className="font-semibold">12</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-[#E7E5D9]">
              <p className="text-sm text-gray-500">Consultas hoje</p>
              <p className="font-semibold">3</p>
            </div>
          </div>
        </div>

        {/* SEÇÃO DE PACIENTES */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E7E5D9] mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-[#2D4539]">Seus Pacientes</h3>
            <Link href="/pacientes" className="text-[#7E8F7B] hover:text-[#2D4539] font-semibold flex items-center gap-2">
              Ver todos <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pacientes.map((paciente) => (
              <div key={paciente.id} className="border border-[#E7E5D9] rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      paciente.status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {paciente.nome.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{paciente.nome}</h4>
                      <p className="text-sm text-gray-500">Última consulta: {paciente.ultimaConsulta}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    paciente.status === 'ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {paciente.status === 'ativo' ? 'Ativo' : 'Pendente'}
                  </span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button className="flex-1 bg-[#7E8F7B] text-white py-2 rounded-lg text-sm hover:bg-[#6a7a67] transition-colors">
                    <i className="bi bi-chat mr-2"></i> Mensagem
                  </button>
                  <button className="flex-1 border border-[#7E8F7B] text-[#7E8F7B] py-2 rounded-lg text-sm hover:bg-[#7E8F7B] hover:text-white transition-colors">
                    <i className="bi bi-calendar mr-2"></i> Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACESSO RÁPIDO PARA PROFISSIONAIS */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#2D4539] mb-6">Ferramentas Profissionais</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* PACIENTES */}
            <Link href="/pacientes">
              <div className="bg-white p-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#E7E5D9]">
                <div className="w-14 h-14 bg-[#2D4539] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-people text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-[#2D4539]">Pacientes</h4>
                <p className="text-sm text-gray-600 mt-1">Gerencie seus pacientes</p>
              </div>
            </Link>

            {/* DIETAS */}
            <Link href="/dietas">
              <div className="bg-white p-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#E7E5D9]">
                <div className="w-14 h-14 bg-[#2D4539] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-journal-text text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-[#2D4539]">Dietas</h4>
                <p className="text-sm text-gray-600 mt-1">Crie e gerencie dietas</p>
              </div>
            </Link>

            {/* CONSULTAS */}
            <Link href="/consultas">
              <div className="bg-white p-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#E7E5D9]">
                <div className="w-14 h-14 bg-[#2D4539] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-calendar-check text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-[#2D4539]">Consultas</h4>
                <p className="text-sm text-gray-600 mt-1">Agende consultas</p>
              </div>
            </Link>

            {/* RELATÓRIOS */}
            <Link href="/relatorios">
              <div className="bg-white p-5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-[#E7E5D9]">
                <div className="w-14 h-14 bg-[#2D4539] rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="bi bi-graph-up text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-[#2D4539]">Relatórios</h4>
                <p className="text-sm text-gray-600 mt-1">Relatórios e análises</p>
              </div>
            </Link>
          </div>
        </div>

        {/* LEMBRETES RÁPIDOS */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E7E5D9]">
          <h3 className="text-xl font-semibold text-[#2D4539] mb-4">Lembretes e Tarefas</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border border-[#E7E5D9] rounded-lg">
              <i className="bi bi-clock text-[#7E8F7B]"></i>
              <div className="flex-1">
                <p className="font-medium">Consulta com Ruan Pereira</p>
                <p className="text-sm text-gray-500">Hoje, 14:00</p>
              </div>
              <button className="text-[#7E8F7B] hover:text-[#2D4539]">
                <i className="bi bi-check-circle"></i>
              </button>
            </div>
            <div className="flex items-center gap-3 p-3 border border-[#E7E5D9] rounded-lg">
              <i className="bi bi-file-text text-[#7E8F7B]"></i>
              <div className="flex-1">
                <p className="font-medium">Revisar dieta de Maria Silva</p>
                <p className="text-sm text-gray-500">Pendente desde ontem</p>
              </div>
              <button className="text-[#7E8F7B] hover:text-[#2D4539]">
                <i className="bi bi-check-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}