'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DietasPage() {
  const [tipoDieta, setTipoDieta] = useState('todas'); // 'todas', 'ativa', 'concluidas'
  
  const dietas = [
    {
      id: 1,
      nome: 'Dieta para Emagrecimento',
      nutricionista: 'Dra. Amanda Guerra',
      descricao: 'Plano alimentar para perda de peso saudável',
      calorias: '1800 kcal/dia',
      status: 'ativa',
      dataInicio: '01/03/2024',
      dataTermino: '01/06/2024',
      progresso: 75,
      refeicoes: 6,
      icon: 'bi-apple',
      color: 'bg-green-100',
      textColor: 'text-green-800'
    },
    {
      id: 2,
      nome: 'Dieta Hiperproteica',
      nutricionista: 'Dra. Amanda Guerra',
      descricao: 'Aumento de massa muscular',
      calorias: '2200 kcal/dia',
      status: 'ativa',
      dataInicio: '15/03/2024',
      dataTermino: '15/05/2024',
      progresso: 90,
      refeicoes: 5,
      icon: 'bi-droplet',
      color: 'bg-blue-100',
      textColor: 'text-blue-800'
    },
    {
      id: 3,
      nome: 'Dieta Detox',
      nutricionista: 'Dra. Amanda Guerra',
      descricao: 'Limpeza e desintoxicação',
      calorias: '1500 kcal/dia',
      status: 'concluida',
      dataInicio: '01/02/2024',
      dataTermino: '15/02/2024',
      progresso: 100,
      refeicoes: 4,
      icon: 'bi-leaf',
      color: 'bg-purple-100',
      textColor: 'text-purple-800'
    },
    {
      id: 4,
      nome: 'Dieta Low Carb',
      nutricionista: 'Dra. Amanda Guerra',
      descricao: 'Redução de carboidratos',
      calorias: '1600 kcal/dia',
      status: 'pausada',
      dataInicio: '10/01/2024',
      dataTermino: '10/04/2024',
      progresso: 60,
      refeicoes: 5,
      icon: 'bi-egg',
      color: 'bg-yellow-100',
      textColor: 'text-yellow-800'
    }
  ];

  const alimentos = [
    { grupo: 'Café da Manhã', itens: ['Ovos mexidos', 'Pão integral', 'Queijo branco', 'Suco natural'] },
    { grupo: 'Lanche da Manhã', itens: ['Fruta (maçã/banana)', 'Iogurte natural'] },
    { grupo: 'Almoço', itens: ['Arroz integral', 'Feijão', 'Filé de frango grelhado', 'Salada verde'] },
    { grupo: 'Lanche da Tarde', itens: ['Tapioca', 'Requeijão light', 'Chá verde'] },
    { grupo: 'Jantar', itens: ['Sopa de legumes', 'Peixe assado', 'Salada colorida'] },
    { grupo: 'Ceia', itens: ['Leite morno', 'Biscoito integral'] }
  ];

  const dietasFiltradas = dietas.filter(dieta => {
    if (tipoDieta === 'todas') return true;
    if (tipoDieta === 'ativas') return dieta.status === 'ativa';
    if (tipoDieta === 'concluidas') return dieta.status === 'concluida';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#DAD8CB] text-[#2D4539]">
      {/* HEADER */}
      <div className="bg-white shadow-sm border-b border-[#C8C6BA]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* TÍTULO */}
            <div className="flex items-center gap-3">
              <Link href="/principal" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-arrow-left text-xl"></i>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Minhas Dietas</h1>
                <p className="text-sm text-gray-600">Acompanhe seus planos alimentares</p>
              </div>
            </div>

            {/* BOTÕES */}
            <div className="flex items-center gap-3">
              <Link href="/notificacoes" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-bell text-xl"></i>
              </Link>
              <Link href="/perfil" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-person-circle text-2xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        
        {/* RESUMO */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#7E8F7B]">{dietas.length}</div>
              <p className="text-sm text-gray-600">Dietas no total</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{dietas.filter(d => d.status === 'ativa').length}</div>
              <p className="text-sm text-gray-600">Ativas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{dietas.filter(d => d.status === 'concluida').length}</div>
              <p className="text-sm text-gray-600">Concluídas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{dietas.filter(d => d.status === 'pausada').length}</div>
              <p className="text-sm text-gray-600">Pausadas</p>
            </div>
          </div>
        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setTipoDieta('todas')}
            className={`px-4 py-2 rounded-lg transition-colors ${tipoDieta === 'todas' ? 'bg-[#7E8F7B] text-white' : 'bg-white border border-[#C8C6BA]'}`}
          >
            Todas
          </button>
          <button
            onClick={() => setTipoDieta('ativas')}
            className={`px-4 py-2 rounded-lg transition-colors ${tipoDieta === 'ativas' ? 'bg-[#7E8F7B] text-white' : 'bg-white border border-[#C8C6BA]'}`}
          >
            Ativas
          </button>
          <button
            onClick={() => setTipoDieta('concluidas')}
            className={`px-4 py-2 rounded-lg transition-colors ${tipoDieta === 'concluidas' ? 'bg-[#7E8F7B] text-white' : 'bg-white border border-[#C8C6BA]'}`}
          >
            Concluídas
          </button>
        </div>

        {/* LISTA DE DIETAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {dietasFiltradas.map((dieta) => (
            <div key={dieta.id} className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9] hover:shadow-md transition-shadow">
              
              {/* CABEÇALHO DA DIETA */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${dieta.color}`}>
                    <i className={`bi ${dieta.icon} ${dieta.textColor} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{dieta.nome}</h3>
                    <p className="text-gray-600">{dieta.nutricionista}</p>
                  </div>
                </div>
                
                {/* STATUS */}
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  dieta.status === 'ativa' ? 'bg-green-100 text-green-800' :
                  dieta.status === 'concluida' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {dieta.status === 'ativa' ? 'Ativa' : dieta.status === 'concluida' ? 'Concluída' : 'Pausada'}
                </span>
              </div>

              {/* DESCRIÇÃO */}
              <p className="text-gray-700 mb-4">{dieta.descricao}</p>

              {/* INFORMAÇÕES */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Calorias/dia</p>
                  <p className="font-semibold">{dieta.calorias}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Refeições/dia</p>
                  <p className="font-semibold">{dieta.refeicoes}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Início</p>
                  <p className="font-semibold">{dieta.dataInicio}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Término</p>
                  <p className="font-semibold">{dieta.dataTermino}</p>
                </div>
              </div>

              {/* PROGRESSO */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progresso da dieta</span>
                  <span className="font-semibold">{dieta.progresso}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      dieta.progresso >= 80 ? 'bg-green-500' :
                      dieta.progresso >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${dieta.progresso}%` }}
                  ></div>
                </div>
              </div>

              {/* BOTÕES DE AÇÃO */}
              <div className="flex gap-2">
                <button className="flex-1 bg-[#7E8F7B] text-white py-2 rounded-lg hover:bg-[#6a7a67] transition-colors">
                  <i className="bi bi-eye mr-2"></i>Visualizar
                </button>
                <button className="flex-1 border border-[#7E8F7B] text-[#7E8F7B] py-2 rounded-lg hover:bg-[#7E8F7B] hover:text-white transition-colors">
                  <i className="bi bi-download mr-2"></i>Exportar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DIETA DO DIA */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Dieta de Hoje</h2>
              <p className="text-gray-600">Plano alimentar para segunda-feira, 10 de Março</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total calórico</p>
              <p className="text-2xl font-bold text-[#7E8F7B]">1,850 kcal</p>
            </div>
          </div>

          {/* GRADE DE REFEIÇÕES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {alimentos.map((refeicao, index) => (
              <div key={index} className="border border-[#E7E5D9] rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{refeicao.grupo}</h4>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">07:00</span>
                </div>
                <ul className="space-y-2">
                  {refeicao.itens.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <i className="bi bi-check-circle text-green-500"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-3 text-center text-sm text-[#7E8F7B] hover:text-[#2D4539] font-medium py-2 border border-[#7E8F7B] rounded-lg hover:bg-[#7E8F7B] hover:text-white transition-colors">
                  <i className="bi bi-check-circle mr-2"></i>Marcar como consumido
                </button>
              </div>
            ))}
          </div>

          {/* RECOMENDAÇÕES */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <i className="bi bi-lightbulb text-blue-500 text-2xl mt-1"></i>
              <div>
                <h4 className="font-semibold text-blue-800">Recomendação do nutricionista</h4>
                <p className="text-blue-700">
                  Lembre-se de beber 2L de água durante o dia e realizar as refeições nos horários 
                  indicados para melhor aproveitamento dos nutrientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HISTÓRICO DE CONSUMO */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
          <h2 className="text-2xl font-bold mb-4">Histórico de Consumo</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E7E5D9]">
                  <th className="text-left py-3 text-gray-600">Data</th>
                  <th className="text-left py-3 text-gray-600">Refeições consumidas</th>
                  <th className="text-left py-3 text-gray-600">Calorias</th>
                  <th className="text-left py-3 text-gray-600">Aderência</th>
                  <th className="text-left py-3 text-gray-600"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  { data: '09/03/2024', refeicoes: '5/6', calorias: '1,780 kcal', aderencia: '93%' },
                  { data: '08/03/2024', refeicoes: '4/6', calorias: '1,650 kcal', aderencia: '83%' },
                  { data: '07/03/2024', refeicoes: '6/6', calorias: '1,850 kcal', aderencia: '100%' },
                  { data: '06/03/2024', refeicoes: '5/6', calorias: '1,720 kcal', aderencia: '89%' },
                ].map((item, index) => (
                  <tr key={index} className="border-b border-[#E7E5D9] hover:bg-gray-50">
                    <td className="py-3 font-medium">{item.data}</td>
                    <td className="py-3">{item.refeicoes}</td>
                    <td className="py-3">{item.calorias}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        parseFloat(item.aderencia) >= 90 ? 'bg-green-100 text-green-800' :
                        parseFloat(item.aderencia) >= 80 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.aderencia}
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-[#7E8F7B] hover:text-[#2D4539]">
                        <i className="bi bi-eye"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BOTÕES DE AÇÃO FINAIS */}
        <div className="flex justify-center gap-4 pb-10">
          <button className="flex items-center gap-2 bg-white border border-[#7E8F7B] text-[#7E8F7B] font-semibold py-3 px-6 rounded-lg hover:bg-[#7E8F7B] hover:text-white transition-colors">
            <i className="bi bi-plus-circle"></i>
            Nova Dieta Personalizada
          </button>
          
          <Link href="/chat">
            <button className="flex items-center gap-2 bg-[#2D4539] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1f3328] transition-colors">
              <i className="bi bi-chat"></i>
              Conversar sobre Dieta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}