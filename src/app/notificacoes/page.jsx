'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NotificacoesPage() {
  const [notificacoes, setNotificacoes] = useState([
    { 
      id: 1, 
      titulo: 'Nova mensagem', 
      mensagem: 'Dra. Amanda Guerra enviou uma nova mensagem no chat', 
      tempo: '5 min atrás', 
      lida: false,
      tipo: 'chat',
      icon: 'bi-chat'
    },
    { 
      id: 2, 
      titulo: 'Dieta atualizada', 
      mensagem: 'Sua dieta da semana foi atualizada. Confira as novas recomendações', 
      tempo: '2 horas atrás', 
      lida: false,
      tipo: 'dieta',
      icon: 'bi-journal-text'
    },
    { 
      id: 3, 
      titulo: 'Consulta confirmada', 
      mensagem: 'Sua consulta para amanhã às 14:00 foi confirmada', 
      tempo: '1 dia atrás', 
      lida: true,
      tipo: 'consulta',
      icon: 'bi-calendar-check'
    },
    { 
      id: 4, 
      titulo: 'Meta alcançada!', 
      mensagem: 'Parabéns! Você alcançou a meta de beber 3L de água por 7 dias seguidos', 
      tempo: '2 dias atrás', 
      lida: true,
      tipo: 'meta',
      icon: 'bi-trophy'
    },
    { 
      id: 5, 
      titulo: 'Lembrete de exercício', 
      mensagem: 'Não se esqueça do seu treino de hoje à tarde', 
      tempo: '3 dias atrás', 
      lida: true,
      tipo: 'lembrete',
      icon: 'bi-alarm'
    },
    { 
      id: 6, 
      titulo: 'Progresso semanal', 
      mensagem: 'Seu relatório semanal de progresso está disponível', 
      tempo: '1 semana atrás', 
      lida: true,
      tipo: 'relatorio',
      icon: 'bi-graph-up'
    }
  ]);

  const marcarComoLida = (id) => {
    setNotificacoes(notificacoes.map(notif => 
      notif.id === id ? { ...notif, lida: true } : notif
    ));
  };

  const marcarTodasComoLidas = () => {
    setNotificacoes(notificacoes.map(notif => ({ ...notif, lida: true })));
  };

  const excluirNotificacao = (id) => {
    setNotificacoes(notificacoes.filter(notif => notif.id !== id));
  };

  const notificacoesNaoLidas = notificacoes.filter(n => !n.lida).length;

  return (
    <div className="min-h-screen bg-[#DAD8CB] text-[#2D4539]">
      {/* HEADER */}
      <div className="bg-white shadow-sm border-b border-[#C8C6BA]">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* TÍTULO E CONTADOR */}
            <div className="flex items-center gap-3">
              <Link href="/principal" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-arrow-left text-xl"></i>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Notificações</h1>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <p className="text-sm text-gray-600">
                    {notificacoesNaoLidas} {notificacoesNaoLidas === 1 ? 'não lida' : 'não lidas'}
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÕES DE AÇÃO */}
            <div className="flex items-center gap-2">
              {notificacoesNaoLidas > 0 && (
                <button 
                  onClick={marcarTodasComoLidas}
                  className="text-sm text-[#7E8F7B] hover:text-[#2D4539] px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <i className="bi bi-check-all mr-1"></i> Marcar todas como lidas
                </button>
              )}
              <Link href="/perfil" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-person-circle text-2xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-4xl mx-auto p-4 md:p-6">
        
        {/* FILTROS */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button className="px-4 py-2 bg-white border border-[#C8C6BA] rounded-lg text-sm hover:bg-gray-50 transition-colors">
            <i className="bi bi-funnel mr-2"></i>Todas
          </button>
          <button className="px-4 py-2 bg-white border border-[#C8C6BA] rounded-lg text-sm hover:bg-gray-50 transition-colors">
            <i className="bi bi-chat mr-2"></i>Mensagens
          </button>
          <button className="px-4 py-2 bg-white border border-[#C8C6BA] rounded-lg text-sm hover:bg-gray-50 transition-colors">
            <i className="bi bi-journal-text mr-2"></i>Dietas
          </button>
          <button className="px-4 py-2 bg-white border border-[#C8C6BA] rounded-lg text-sm hover:bg-gray-50 transition-colors">
            <i className="bi bi-calendar-check mr-2"></i>Consultas
          </button>
        </div>

        {/* LISTA DE NOTIFICAÇÕES */}
        <div className="space-y-3">
          {notificacoes.length === 0 ? (
            <div className="text-center py-10">
              <i className="bi bi-bell text-5xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-600">Nenhuma notificação</h3>
              <p className="text-gray-500">Você está em dia com tudo!</p>
            </div>
          ) : (
            notificacoes.map((notificacao) => (
              <div 
                key={notificacao.id} 
                className={`bg-white rounded-xl p-4 shadow-sm border transition-all hover:shadow-md ${
                  notificacao.lida ? 'border-[#E7E5D9]' : 'border-[#7E8F7B] border-l-4'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* ÍCONE */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    notificacao.lida ? 'bg-gray-100' : 'bg-blue-50'
                  }`}>
                    <i className={`bi ${notificacao.icon} text-xl ${
                      notificacao.lida ? 'text-gray-500' : 'text-[#7E8F7B]'
                    }`}></i>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-semibold ${notificacao.lida ? 'text-gray-700' : 'text-[#2D4539]'}`}>
                          {notificacao.titulo}
                          {!notificacao.lida && (
                            <span className="ml-2 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                          )}
                        </h3>
                        <p className="text-gray-600 mt-1">{notificacao.mensagem}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">
                            <i className="bi bi-clock mr-1"></i>{notificacao.tempo}
                          </span>
                          {notificacao.tipo === 'chat' && (
                            <Link 
                              href="/chat" 
                              className="text-sm text-[#7E8F7B] hover:text-[#2D4539] font-medium"
                            >
                              <i className="bi bi-arrow-right-circle mr-1"></i>Abrir chat
                            </Link>
                          )}
                        </div>
                      </div>
                      
                      {/* BOTÕES DE AÇÃO */}
                      <div className="flex gap-2">
                        {!notificacao.lida && (
                          <button 
                            onClick={() => marcarComoLida(notificacao.id)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            title="Marcar como lida"
                          >
                            <i className="bi bi-check text-green-600"></i>
                          </button>
                        )}
                        <button 
                          onClick={() => excluirNotificacao(notificacao.id)}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          title="Excluir"
                        >
                          <i className="bi bi-trash text-red-500"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* BOTÕES INFERIORES */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#C8C6BA]">
          <div className="text-sm text-gray-600">
            Mostrando {notificacoes.length} notificaç{notificacoes.length === 1 ? 'ão' : 'ões'}
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => setNotificacoes([])}
              className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm"
            >
              <i className="bi bi-trash mr-2"></i>Limpar todas
            </button>
            
            <Link href="/configuracoes">
              <button className="px-4 py-2 bg-[#7E8F7B] text-white rounded-lg hover:bg-[#6a7a67] transition-colors text-sm">
                <i className="bi bi-gear mr-2"></i>Configurar notificações
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}