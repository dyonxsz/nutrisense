'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConsultasPage() {
  const [filtro, setFiltro] = useState('agendadas'); // 'agendadas', 'realizadas', 'canceladas'
  const [modalAberto, setModalAberto] = useState(false);
  const [consultaSelecionada, setConsultaSelecionada] = useState(null);

  const consultas = [
    {
      id: 1,
      data: '15/03/2024',
      horario: '14:00',
      tipo: 'presencial',
      nutricionista: 'Dra. Amanda Guerra',
      status: 'agendada',
      duracao: '45 min',
      local: 'Clínica Saúde Total',
      endereco: 'Av. Principal, 123 - Sala 301',
      motivo: 'Acompanhamento mensal - Revisão de dieta',
      valor: 'R$ 180,00',
      icon: 'bi-calendar-check',
      color: 'bg-blue-100',
      textColor: 'text-blue-800'
    },
    {
      id: 2,
      data: '22/03/2024',
      horario: '10:30',
      tipo: 'online',
      nutricionista: 'Dra. Amanda Guerra',
      status: 'agendada',
      duracao: '30 min',
      local: 'Consulta Online',
      endereco: 'Via Google Meet',
      motivo: 'Dúvidas sobre nova dieta',
      valor: 'R$ 150,00',
      icon: 'bi-camera-video',
      color: 'bg-green-100',
      textColor: 'text-green-800'
    },
    {
      id: 3,
      data: '08/03/2024',
      horario: '16:00',
      tipo: 'presencial',
      nutricionista: 'Dra. Amanda Guerra',
      status: 'realizada',
      duracao: '60 min',
      local: 'Clínica Saúde Total',
      endereco: 'Av. Principal, 123 - Sala 301',
      motivo: 'Primeira consulta - Avaliação completa',
      valor: 'R$ 250,00',
      icon: 'bi-check-circle',
      color: 'bg-green-100',
      textColor: 'text-green-800'
    },
    {
      id: 4,
      data: '01/03/2024',
      horario: '11:00',
      tipo: 'online',
      nutricionista: 'Dra. Amanda Guerra',
      status: 'realizada',
      duracao: '40 min',
      local: 'Consulta Online',
      endereco: 'Via Google Meet',
      motivo: 'Ajuste de cardápio semanal',
      valor: 'R$ 150,00',
      icon: 'bi-check-circle',
      color: 'bg-green-100',
      textColor: 'text-green-800'
    },
    {
      id: 5,
      data: '28/02/2024',
      horario: '15:30',
      tipo: 'presencial',
      nutricionista: 'Dra. Amanda Guerra',
      status: 'cancelada',
      duracao: '45 min',
      local: 'Clínica Saúde Total',
      endereco: 'Av. Principal, 123 - Sala 301',
      motivo: 'Emergência pessoal',
      valor: 'R$ 180,00',
      icon: 'bi-x-circle',
      color: 'bg-red-100',
      textColor: 'text-red-800'
    }
  ];

  const proximasConsultas = consultas.filter(c => c.status === 'agendada');
  const consultasRealizadas = consultas.filter(c => c.status === 'realizada');
  const consultasCanceladas = consultas.filter(c => c.status === 'cancelada');

  const consultasFiltradas = filtro === 'agendadas' ? proximasConsultas :
                            filtro === 'realizadas' ? consultasRealizadas :
                            consultasCanceladas;

  const abrirModal = (consulta) => {
    setConsultaSelecionada(consulta);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setConsultaSelecionada(null);
  };

  const confirmarPresenca = (id) => {
    alert(`Presença confirmada para consulta #${id}!`);
  };

  const cancelarConsulta = (id) => {
    if (window.confirm('Tem certeza que deseja cancelar esta consulta?')) {
      alert(`Consulta #${id} cancelada com sucesso!`);
    }
  };

  const reagendarConsulta = (id) => {
    alert(`Opções de reagendamento para consulta #${id}`);
  };

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
                <h1 className="text-2xl font-bold">Minhas Consultas</h1>
                <p className="text-sm text-gray-600">Agende e acompanhe suas consultas</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{proximasConsultas.length}</div>
              <p className="text-sm text-gray-600">Próximas consultas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{consultasRealizadas.length}</div>
              <p className="text-sm text-gray-600">Realizadas</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{consultasCanceladas.length}</div>
              <p className="text-sm text-gray-600">Canceladas</p>
            </div>
          </div>
        </div>

        {/* BOTÃO NOVA CONSULTA */}
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFiltro('agendadas')}
              className={`px-4 py-2 rounded-lg transition-colors ${filtro === 'agendadas' ? 'bg-[#7E8F7B] text-white' : 'bg-white border border-[#C8C6BA]'}`}
            >
              Agendadas ({proximasConsultas.length})
            </button>
            <button
              onClick={() => setFiltro('realizadas')}
              className={`px-4 py-2 rounded-lg transition-colors ${filtro === 'realizadas' ? 'bg-[#7E8F7B] text-white' : 'bg-white border border-[#C8C6BA]'}`}
            >
              Realizadas ({consultasRealizadas.length})
            </button>
            <button
              onClick={() => setFiltro('canceladas')}
              className={`px-4 py-2 rounded-lg transition-colors ${filtro === 'canceladas' ? 'bg-[#7E8F7B] text-white' : 'bg-white border border-[#C8C6BA]'}`}
            >
              Canceladas ({consultasCanceladas.length})
            </button>
          </div>

          <button className="flex items-center gap-2 bg-[#2D4539] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1f3328] transition-colors">
            <i className="bi bi-plus-circle"></i>
            Nova Consulta
          </button>
        </div>

        {/* LISTA DE CONSULTAS */}
        <div className="space-y-4">
          {consultasFiltradas.length === 0 ? (
            <div className="bg-white rounded-xl p-8 text-center">
              <i className="bi bi-calendar-x text-4xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600">Nenhuma consulta {filtro}</h3>
              <p className="text-gray-500">Quando houver consultas {filtro}, elas aparecerão aqui.</p>
            </div>
          ) : (
            consultasFiltradas.map((consulta) => (
              <div key={consulta.id} className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9] hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  
                  {/* INFORMAÇÕES DA CONSULTA */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${consulta.color}`}>
                        <i className={`bi ${consulta.icon} ${consulta.textColor} text-xl`}></i>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{consulta.nutricionista}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            consulta.status === 'agendada' ? 'bg-blue-100 text-blue-800' :
                            consulta.status === 'realizada' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {consulta.status === 'agendada' ? 'Agendada' : 
                             consulta.status === 'realizada' ? 'Realizada' : 'Cancelada'}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            consulta.tipo === 'online' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {consulta.tipo === 'online' ? 'Online' : 'Presencial'}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Data e Horário</p>
                            <p className="font-semibold">{consulta.data} às {consulta.horario}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Duração</p>
                            <p className="font-semibold">{consulta.duracao}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Valor</p>
                            <p className="font-semibold">{consulta.valor}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm text-gray-600">Motivo da consulta</p>
                          <p className="font-medium">{consulta.motivo}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600">Local</p>
                          <p className="font-medium">{consulta.local}</p>
                          <p className="text-sm text-gray-500">{consulta.endereco}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTÕES DE AÇÃO */}
                  <div className="flex flex-col gap-2 min-w-[200px]">
                    {consulta.status === 'agendada' && (
                      <>
                        <button
                          onClick={() => confirmarPresenca(consulta.id)}
                          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <i className="bi bi-check-circle mr-2"></i>Confirmar Presença
                        </button>
                        <button
                          onClick={() => abrirModal(consulta)}
                          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <i className="bi bi-info-circle mr-2"></i>Ver Detalhes
                        </button>
                        <button
                          onClick={() => reagendarConsulta(consulta.id)}
                          className="w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <i className="bi bi-calendar2-week mr-2"></i>Reagendar
                        </button>
                        <button
                          onClick={() => cancelarConsulta(consulta.id)}
                          className="w-full border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <i className="bi bi-x-circle mr-2"></i>Cancelar
                        </button>
                      </>
                    )}
                    
                    {consulta.status === 'realizada' && (
                      <>
                        <button
                          onClick={() => abrirModal(consulta)}
                          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <i className="bi bi-eye mr-2"></i>Ver Detalhes
                        </button>
                        <button className="w-full border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition-colors">
                          <i className="bi bi-file-earmark-text mr-2"></i>Ver Relatório
                        </button>
                        <button className="w-full border border-gray-600 text-gray-600 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <i className="bi bi-star mr-2"></i>Avaliar Consulta
                        </button>
                      </>
                    )}
                    
                    {consulta.status === 'cancelada' && (
                      <>
                        <button
                          onClick={() => abrirModal(consulta)}
                          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <i className="bi bi-eye mr-2"></i>Ver Detalhes
                        </button>
                        <button className="w-full border border-[#7E8F7B] text-[#7E8F7B] py-2 rounded-lg hover:bg-[#7E8F7B] hover:text-white transition-colors">
                          <i className="bi bi-calendar2-plus mr-2"></i>Agendar Nova
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* PRÓXIMA CONSULTA (DESTAQUE) */}
        {proximasConsultas.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-2">📅 Sua próxima consulta</h2>
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-3xl font-bold">{proximasConsultas[0].data}</div>
                  <div className="text-2xl font-bold">às {proximasConsultas[0].horario}</div>
                </div>
                <p className="text-blue-800">
                  Com {proximasConsultas[0].nutricionista} • {proximasConsultas[0].tipo === 'online' ? 'Online' : 'Presencial'}
                </p>
                <p className="text-blue-700 mt-2">
                  <i className="bi bi-info-circle mr-2"></i>
                  {proximasConsultas[0].motivo}
                </p>
              </div>
              
              <div className="flex flex-col gap-2">
                {proximasConsultas[0].tipo === 'online' ? (
                  <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                    <i className="bi bi-camera-video mr-2"></i>
                    Acessar Sala Virtual
                  </button>
                ) : (
                  <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                    <i className="bi bi-geo-alt mr-2"></i>
                    Ver Rota no Mapa
                  </button>
                )}
                <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors">
                  <i className="bi bi-alarm mr-2"></i>
                  Definir Lembrete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CALENDÁRIO SIMPLES */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E7E5D9]">
          <h2 className="text-2xl font-bold mb-4">Calendário de Consultas</h2>
          
          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((dia) => (
              <div key={dia} className="font-semibold text-gray-600 py-2">{dia}</div>
            ))}
            
            {Array.from({ length: 31 }, (_, i) => {
              const dia = i + 1;
              const temConsulta = consultas.some(c => {
                const dataDia = parseInt(c.data.split('/')[0]);
                return dataDia === dia;
              });
              
              return (
                <div
                  key={dia}
                  className={`p-3 rounded-lg border ${
                    temConsulta 
                      ? 'bg-[#7E8F7B] text-white border-[#7E8F7B]' 
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {dia}
                  {temConsulta && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>}
                </div>
              );
            })}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#7E8F7B] rounded"></div>
              <span className="text-sm text-gray-600">Dia com consulta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-gray-300 rounded"></div>
              <span className="text-sm text-gray-600">Dia sem consulta</span>
            </div>
          </div>
        </div>

        {/* INFORMAÇÕES IMPORTANTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <i className="bi bi-exclamation-triangle text-yellow-500 text-2xl"></i>
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Política de Cancelamento</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Cancelamentos com até 24h de antecedência: sem custos</li>
                  <li>• Cancelamentos com menos de 24h: 50% do valor</li>
                  <li>• Não comparecimento: cobrança integral</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <i className="bi bi-check-circle text-green-500 text-2xl"></i>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Dicas para sua consulta</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Chegue 10 minutos antes do horário</li>
                  <li>• Traga seus exames recentes</li>
                  <li>• Anote suas dúvidas antes da consulta</li>
                  <li>• Para online: teste sua conexão antes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE DETALHES */}
      {modalAberto && consultaSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Detalhes da Consulta</h2>
              <button onClick={fecharModal} className="p-2 hover:bg-gray-100 rounded-full">
                <i className="bi bi-x text-2xl"></i>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Nutricionista</p>
                  <p className="font-semibold text-lg">{consultaSelecionada.nutricionista}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Status</p>
                  <p className={`font-semibold text-lg ${
                    consultaSelecionada.status === 'agendada' ? 'text-blue-600' :
                    consultaSelecionada.status === 'realizada' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {consultaSelecionada.status === 'agendada' ? 'Agendada' : 
                     consultaSelecionada.status === 'realizada' ? 'Realizada' : 'Cancelada'}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Data</p>
                  <p className="font-semibold">{consultaSelecionada.data}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Horário</p>
                  <p className="font-semibold">{consultaSelecionada.horario}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tipo de Consulta</p>
                <p className="font-semibold">{consultaSelecionada.tipo === 'online' ? 'Online' : 'Presencial'}</p>
                <p className="text-sm text-gray-500 mt-1">{consultaSelecionada.local}</p>
                <p className="text-sm text-gray-500">{consultaSelecionada.endereco}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Motivo</p>
                <p className="font-semibold">{consultaSelecionada.motivo}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Duração</p>
                  <p className="font-semibold">{consultaSelecionada.duracao}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Valor</p>
                  <p className="font-semibold">{consultaSelecionada.valor}</p>
                </div>
              </div>
              
              {consultaSelecionada.status === 'agendada' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <i className="bi bi-info-circle text-blue-500 text-xl"></i>
                    <div>
                      <h4 className="font-semibold text-blue-800">Próximos passos</h4>
                      <p className="text-blue-700 text-sm">
                        {consultaSelecionada.tipo === 'online' 
                          ? 'O link da sala virtual será enviado 1 hora antes da consulta.'
                          : 'Chegue 10 minutos antes do horário marcado.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={fecharModal}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50"
              >
                Fechar
              </button>
              
              {consultaSelecionada.status === 'agendada' && (
                <button
                  onClick={() => {
                    confirmarPresenca(consultaSelecionada.id);
                    fecharModal();
                  }}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                >
                  Confirmar Presença
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}