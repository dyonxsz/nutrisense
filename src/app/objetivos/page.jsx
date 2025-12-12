'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ObjetivosPage() {
  const [objetivos, setObjetivos] = useState([
    {
      id: 1,
      titulo: 'Perda de peso',
      descricao: 'Alcançar peso de 72kg',
      progresso: 83,
      meta: '72 kg',
      atual: '78 kg',
      inicio: '15/01/2024',
      previsao: '15/07/2024',
      categoria: 'saude',
      icon: 'bi-speedometer2',
      subobjetivos: [
        { id: 1, texto: 'Exercícios 5x por semana', concluido: true },
        { id: 2, texto: 'Reduzir açúcar refinado', concluido: true },
        { id: 3, texto: 'Dormir 8h por noite', concluido: false },
        { id: 4, texto: 'Beber 3L de água/dia', concluido: true },
      ]
    },
    {
      id: 2,
      titulo: 'Melhorar alimentação',
      descricao: 'Seguir dieta prescrita',
      progresso: 75,
      meta: '100% adesão',
      atual: '75%',
      inicio: '01/02/2024',
      previsao: '01/08/2024',
      categoria: 'nutricao',
      icon: 'bi-egg-fried',
      subobjetivos: [
        { id: 1, texto: '6 refeições por dia', concluido: true },
        { id: 2, texto: 'Mais vegetais verdes', concluido: true },
        { id: 3, texto: 'Reduzir alimentos processados', concluido: false },
      ]
    },
    {
      id: 3,
      titulo: 'Aumentar atividade física',
      descricao: 'Consistência nos exercícios',
      progresso: 90,
      meta: '30 dias consecutivos',
      atual: '24 dias',
      inicio: '10/03/2024',
      previsao: '10/04/2024',
      categoria: 'exercicio',
      icon: 'bi-heart-pulse',
      subobjetivos: [
        { id: 1, texto: 'Caminhada diária', concluido: true },
        { id: 2, texto: 'Musculação 3x/semana', concluido: true },
        { id: 3, texto: 'Alongamento matinal', concluido: false },
      ]
    },
    {
      id: 4,
      titulo: 'Melhorar qualidade do sono',
      descricao: 'Sono regular e reparador',
      progresso: 60,
      meta: '8h por noite',
      atual: '7.2h',
      inicio: '01/04/2024',
      previsao: '01/07/2024',
      categoria: 'bemestar',
      icon: 'bi-moon',
      subobjetivos: [
        { id: 1, texto: 'Desligar telas 1h antes', concluido: true },
        { id: 2, texto: 'Ambiente escuro e silencioso', concluido: false },
        { id: 3, texto: 'Horário fixo para dormir', concluido: true },
      ]
    }
  ]);

  const toggleSubobjetivo = (objetivoId, subobjetivoId) => {
    setObjetivos(objetivos.map(objetivo => {
      if (objetivo.id === objetivoId) {
        return {
          ...objetivo,
          subobjetivos: objetivo.subobjetivos.map(sub => 
            sub.id === subobjetivoId 
              ? { ...sub, concluido: !sub.concluido } 
              : sub
          )
        };
      }
      return objetivo;
    }));
  };

  return (
    <div className="min-h-screen bg-[#DAD8CB] text-[#2D4539]">
      {/* HEADER */}
      <div className="bg-white shadow-sm border-b border-[#C8C6BA]">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* TÍTULO */}
            <div className="flex items-center gap-3">
              <Link href="/principal" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-arrow-left text-xl"></i>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Meus Objetivos</h1>
                <p className="text-sm text-gray-600">Acompanhe e gerencie suas metas de saúde</p>
              </div>
            </div>

            {/* BOTÕES */}
            <div className="flex items-center gap-3">
              <Link href="/estatisticas" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-graph-up text-xl"></i>
              </Link>
              <Link href="/perfil" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-person-circle text-2xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        
        {/* RESUMO */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9] mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#7E8F7B]">4</div>
              <p className="text-sm text-gray-600">Objetivos ativos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">77%</div>
              <p className="text-sm text-gray-600">Progresso médio</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2</div>
              <p className="text-sm text-gray-600">Próximos da conclusão</p>
            </div>
          </div>
        </div>

        {/* BOTÃO NOVO OBJETIVO */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Seus Objetivos</h2>
          <button className="flex items-center gap-2 bg-[#7E8F7B] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#6a7a67] transition-colors">
            <i className="bi bi-plus-circle"></i>
            Novo Objetivo
          </button>
        </div>

        {/* LISTA DE OBJETIVOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {objetivos.map((objetivo) => (
            <div key={objetivo.id} className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9] hover:shadow-md transition-shadow">
              
              {/* CABEÇALHO DO OBJETIVO */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#7E8F7B] rounded-full flex items-center justify-center">
                    <i className={`bi ${objetivo.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{objetivo.titulo}</h3>
                    <p className="text-gray-600">{objetivo.descricao}</p>
                  </div>
                </div>
                
                {/* STATUS */}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  objetivo.progresso >= 80 ? 'bg-green-100 text-green-800' :
                  objetivo.progresso >= 50 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {objetivo.progresso}%
                </span>
              </div>

              {/* BARRA DE PROGRESSO */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progresso</span>
                  <span className="font-semibold">{objetivo.progresso}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      objetivo.progresso >= 80 ? 'bg-green-500' :
                      objetivo.progresso >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${objetivo.progresso}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Início: {objetivo.inicio}</span>
                  <span>Previsão: {objetivo.previsao}</span>
                </div>
              </div>

              {/* METAS NUMÉRICAS */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Meta</p>
                  <p className="text-lg font-semibold">{objetivo.meta}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Atual</p>
                  <p className="text-lg font-semibold">{objetivo.atual}</p>
                </div>
              </div>

              {/* SUB-OBJETIVOS */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tarefas:</h4>
                <div className="space-y-2">
                  {objetivo.subobjetivos.map((sub) => (
                    <div 
                      key={sub.id} 
                      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() => toggleSubobjetivo(objetivo.id, sub.id)}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        sub.concluido 
                          ? 'bg-green-500 border-green-500 text-white' 
                          : 'border-gray-300'
                      }`}>
                        {sub.concluido && <i className="bi bi-check text-xs"></i>}
                      </div>
                      <span className={`flex-1 ${sub.concluido ? 'line-through text-gray-500' : ''}`}>
                        {sub.texto}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTÕES DE AÇÃO */}
              <div className="flex gap-2">
                <button className="flex-1 bg-[#7E8F7B] text-white py-2 rounded-lg hover:bg-[#6a7a67] transition-colors">
                  <i className="bi bi-pencil-square mr-2"></i>Editar
                </button>
                <button className="flex-1 border border-[#7E8F7B] text-[#7E8F7B] py-2 rounded-lg hover:bg-[#7E8F7B] hover:text-white transition-colors">
                  <i className="bi bi-chat mr-2"></i>Discutir
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* OBJETIVOS CONCLUÍDOS */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Objetivos Concluídos</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="bi bi-trophy text-green-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Reduzir refrigerante - Concluído!</h3>
                  <p className="text-gray-600">0 refrigerantes por 30 dias consecutivos</p>
                  <p className="text-sm text-green-600 mt-1">
                    <i className="bi bi-check-circle mr-1"></i>Concluído em 15/05/2024
                  </p>
                </div>
              </div>
              <button className="text-green-600 hover:text-green-800">
                <i className="bi bi-arrow-clockwise text-xl"></i>
              </button>
            </div>
          </div>
        </div>

        {/* MOTIVAÇÃO */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <i className="bi bi-stars text-3xl text-blue-500"></i>
            <div>
              <h3 className="font-semibold text-blue-800">Continue assim!</h3>
              <p className="text-blue-700">
                Seu progresso está excelente. Mantenha a consistência e você alcançará 
                todos os seus objetivos em breve. Lembre-se de comemorar cada conquista!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}