'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EstatisticasPage() {
  const [periodo, setPeriodo] = useState('mes'); // 'semana', 'mes', 'ano'
  
  // Dados simulados
  const dadosPeso = [
    { mes: 'Jan', peso: 85 },
    { mes: 'Fev', peso: 83 },
    { mes: 'Mar', peso: 82 },
    { mes: 'Abr', peso: 80 },
    { mes: 'Mai', peso: 79 },
    { mes: 'Jun', peso: 78 },
  ];
  
  const dadosIMC = [
    { mes: 'Jan', imc: 28.5 },
    { mes: 'Fev', imc: 27.8 },
    { mes: 'Mar', imc: 27.4 },
    { mes: 'Abr', imc: 27.0 },
    { mes: 'Mai', imc: 26.7 },
    { mes: 'Jun', imc: 26.3 },
  ];
  
  const metricas = [
    { titulo: 'Peso Atual', valor: '78 kg', variacao: '-7 kg', positivo: true, icon: 'bi-speedometer2' },
    { titulo: 'IMC', valor: '26.3', variacao: '-2.2', positivo: true, icon: 'bi-graph-up' },
    { titulo: 'Meta de Peso', valor: '72 kg', progresso: '83%', icon: 'bi-bullseye' },
    { titulo: 'Dias Consecutivos', valor: '24 dias', variacao: '+4 dias', positivo: true, icon: 'bi-calendar-check' },
  ];
  
  const habitos = [
    { nome: 'Água Consumida', atual: '2.1L', meta: '3L', porcentagem: 70, icon: 'bi-droplet' },
    { nome: 'Exercícios', atual: '4/5', meta: '5 dias', porcentagem: 80, icon: 'bi-heart-pulse' },
    { nome: 'Sono', atual: '7.2h', meta: '8h', porcentagem: 90, icon: 'bi-moon' },
    { nome: 'Refeições', atual: '5/6', meta: '6 por dia', porcentagem: 83, icon: 'bi-egg-fried' },
  ];

  const maxPeso = Math.max(...dadosPeso.map(d => d.peso));
  const minPeso = Math.min(...dadosPeso.map(d => d.peso));

  return (
    <div className="min-h-screen bg-[#DAD8CB] text-[#2D4539]">
      {/* HEADER */}
      <div className="bg-white shadow-sm border-b border-[#C8C6BA]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* LOGO E TÍTULO */}
            <div className="flex items-center gap-3">
              <Link href="/principal" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-arrow-left text-xl"></i>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Estatísticas</h1>
                <p className="text-sm text-gray-600">Acompanhe seu progresso de saúde</p>
              </div>
            </div>

            {/* BOTÕES SUPERIORES */}
            <div className="flex items-center gap-3">
              <Link href="/notificacoes" className="relative p-3 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-bell text-xl"></i>
              </Link>
              <Link href="/perfil" className="p-3 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-person-circle text-2xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        
        {/* FILTRO DE PERÍODO */}
        <div className="flex justify-end">
          <div className="inline-flex rounded-lg border border-[#C8C6BA] bg-white p-1">
            {['semana', 'mes', 'ano'].map((p) => (
              <button
                key={p}
                onClick={() => setPeriodo(p)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                  periodo === p 
                    ? 'bg-[#7E8F7B] text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* MÉTRICAS PRINCIPAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metricas.map((metrica, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-[#E7E5D9]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-600">{metrica.titulo}</p>
                  <h3 className="text-2xl font-bold mt-1">{metrica.valor}</h3>
                </div>
                <i className={`bi ${metrica.icon} text-2xl text-[#7E8F7B]`}></i>
              </div>
              
              {metrica.variacao && (
                <div className={`inline-flex items-center text-sm ${metrica.positivo ? 'text-green-600' : 'text-red-600'}`}>
                  <i className={`bi ${metrica.positivo ? 'bi-arrow-up' : 'bi-arrow-down'} mr-1`}></i>
                  {metrica.variacao} 
                  <span className="text-gray-500 ml-1">desde o início</span>
                </div>
              )}
              
              {metrica.progresso && (
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progresso</span>
                    <span className="font-semibold">{metrica.progresso}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#7E8F7B] h-2 rounded-full" 
                      style={{ width: metrica.progresso }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* GRÁFICOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* GRÁFICO DE PESO */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-semibold">Evolução do Peso</h3>
                <p className="text-sm text-gray-600">Últimos 6 meses</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{dadosPeso[dadosPeso.length - 1].peso} kg</p>
                <p className="text-sm text-green-600">
                  <i className="bi bi-arrow-down mr-1"></i>
                  {maxPeso - minPeso} kg perdidos
                </p>
              </div>
            </div>
            
            {/* Gráfico simplificado */}
            <div className="h-48 flex items-end space-x-4 pt-6">
              {dadosPeso.map((item, index) => {
                const altura = ((item.peso - minPeso) / (maxPeso - minPeso)) * 100 + 20;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-[#7E8F7B] rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${altura}%` }}
                    ></div>
                    <div className="mt-2 text-center">
                      <p className="text-sm font-semibold">{item.peso}kg</p>
                      <p className="text-xs text-gray-500 mt-1">{item.mes}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GRÁFICO DE IMC */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-semibold">Evolução do IMC</h3>
                <p className="text-sm text-gray-600">Classificação de saúde</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{dadosIMC[dadosIMC.length - 1].imc}</p>
                <div className={`text-sm px-2 py-1 rounded-full inline-block ${
                  dadosIMC[dadosIMC.length - 1].imc < 25 ? 'bg-green-100 text-green-800' :
                  dadosIMC[dadosIMC.length - 1].imc < 30 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {dadosIMC[dadosIMC.length - 1].imc < 25 ? 'Normal' :
                   dadosIMC[dadosIMC.length - 1].imc < 30 ? 'Sobrepeso' : 'Obesidade'}
                </div>
              </div>
            </div>
            
            {/* Linha de classificação IMC */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Baixo peso</span>
                <span>Normal</span>
                <span>Sobrepeso</span>
                <span>Obesidade</span>
              </div>
              <div className="h-2 bg-gradient-to-r from-blue-300 via-green-300 via-yellow-300 to-red-300 rounded-full"></div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>&lt;18.5</span>
                <span>18.5-24.9</span>
                <span>25-29.9</span>
                <span>&gt;30</span>
              </div>
            </div>
            
            {/* Linha do tempo do IMC */}
            <div className="h-32 relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 border-dashed"></div>
              </div>
              {dadosIMC.map((item, index) => (
                <div 
                  key={index} 
                  className="absolute flex flex-col items-center transition-transform hover:scale-110"
                  style={{ 
                    left: `${(index / (dadosIMC.length - 1)) * 100}%`,
                    bottom: `${(item.imc - 25) * 20}%` // Ajuste para visualização
                  }}
                >
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow ${
                    item.imc < 25 ? 'bg-green-500' :
                    item.imc < 30 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div className="mt-6 text-center">
                    <p className="text-xs font-semibold">{item.imc}</p>
                    <p className="text-xs text-gray-500">{item.mes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HÁBITOS E METAS */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
          <h3 className="text-xl font-semibold mb-6">Hábitos Saudáveis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {habitos.map((habito, index) => (
              <div key={index} className="border border-[#E7E5D9] rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#7E8F7B] rounded-full flex items-center justify-center">
                      <i className={`bi ${habito.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">{habito.nome}</h4>
                      <p className="text-sm text-gray-500">Meta: {habito.meta}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{habito.atual}</span>
                    <span className="font-semibold">{habito.porcentagem}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        habito.porcentagem >= 80 ? 'bg-green-500' :
                        habito.porcentagem >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${habito.porcentagem}%` }}
                    ></div>
                  </div>
                </div>
                
                <button className="w-full mt-3 text-center text-sm text-[#7E8F7B] hover:text-[#2D4539] font-medium py-2 border border-[#7E8F7B] rounded-lg hover:bg-[#7E8F7B] hover:text-white transition-colors">
                  <i className="bi bi-plus-circle mr-2"></i>Registrar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RECOMENDAÇÕES */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
          <h3 className="text-xl font-semibold mb-4">Recomendações Personalizadas</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <i className="bi bi-lightbulb text-2xl text-blue-500 mt-1"></i>
              <div>
                <h4 className="font-semibold text-blue-800">Continue assim!</h4>
                <p className="text-blue-700">
                  Seu progresso no peso está excelente. Mantenha o ritmo atual de exercícios 
                  e continue com a dieta prescrita pela nutricionista.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <i className="bi bi-exclamation-triangle text-2xl text-yellow-500 mt-1"></i>
              <div>
                <h4 className="font-semibold text-yellow-800">Água: atenção necessária</h4>
                <p className="text-yellow-700">
                  Você está bebendo apenas 70% da água recomendada. Tente aumentar o consumo 
                  para 3L diários para melhor hidratação e metabolismo.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <i className="bi bi-check-circle text-2xl text-green-500 mt-1"></i>
              <div>
                <h4 className="font-semibold text-green-800">Meta próxima</h4>
                <p className="text-green-700">
                  Você está a apenas 6kg da sua meta de peso! Mantenha a consistência e 
                  você alcançará seu objetivo em aproximadamente 2 meses.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button className="inline-flex items-center gap-2 bg-[#7E8F7B] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6a7a67] transition-colors">
              <i className="bi bi-download"></i>
              Exportar Relatório Completo
            </button>
          </div>
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="flex justify-center gap-4 pb-10">
          <Link href="/objetivos">
            <button className="flex items-center gap-2 bg-white border border-[#7E8F7B] text-[#7E8F7B] font-semibold py-3 px-6 rounded-lg hover:bg-[#7E8F7B] hover:text-white transition-colors">
              <i className="bi bi-bullseye"></i>
              Ver Objetivos
            </button>
          </Link>
          
          <Link href="/chat">
            <button className="flex items-center gap-2 bg-[#2D4539] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1f3328] transition-colors">
              <i className="bi bi-chat"></i>
              Conversar com Nutricionista
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}