'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ChatPage() {
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: 'Olá Ruan! Como você está se sentindo com a nova dieta?', remetente: 'nutricionista', hora: '10:30', lida: true },
    { id: 2, texto: 'Estou me adaptando bem! Só estou com um pouco de fome entre as refeições da tarde.', remetente: 'eu', hora: '10:32', lida: true },
    { id: 3, texto: 'Isso é normal nos primeiros dias. Tente comer uma fruta ou iogurte natural nos lanches. Posso ajustar suas porções se continuar.', remetente: 'nutricionista', hora: '10:35', lida: true },
    { id: 4, texto: 'Obrigado! Vou tentar com uma maçã hoje à tarde.', remetente: 'eu', hora: '10:36', lida: true },
    { id: 5, texto: 'Perfeito! E como está a prática de exercícios? Conseguiu fazer os 30 minutos diários?', remetente: 'nutricionista', hora: '11:00', lida: true },
    { id: 6, texto: 'Sim, estou caminhando todas as manhãs antes do trabalho!', remetente: 'eu', hora: '11:02', lida: true },
  ]);
  
  const [novaMensagem, setNovaMensagem] = useState('');
  const [digitando, setDigitando] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [mensagens]);

  const enviarMensagem = () => {
    if (novaMensagem.trim() === '') return;
    
    const novaMsg = {
      id: mensagens.length + 1,
      texto: novaMensagem,
      remetente: 'eu',
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      lida: true
    };
    
    setMensagens([...mensagens, novaMsg]);
    setNovaMensagem('');
    
    // Simular resposta automática
    setTimeout(() => {
      const respostas = [
        'Entendi! Vou analisar essa questão.',
        'Isso é ótimo! Continue assim.',
        'Podemos discutir isso na próxima consulta.',
        'Recomendo anotar essa observação no seu diário alimentar.',
        'Você está no caminho certo!'
      ];
      
      const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
      
      const resposta = {
        id: mensagens.length + 2,
        texto: respostaAleatoria,
        remetente: 'nutricionista',
        hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        lida: true
      };
      
      setMensagens(prev => [...prev, resposta]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviarMensagem();
    }
  };

  return (
    <div className="min-h-screen bg-[#DAD8CB] text-[#2D4539] flex flex-col">
      {/* HEADER */}
      <div className="bg-white shadow-sm border-b border-[#C8C6BA]">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            
            {/* INFO DO NUTRICIONISTA */}
            <div className="flex items-center gap-3">
              <Link href="/principal" className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-arrow-left text-xl"></i>
              </Link>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#2D4539] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AG</span>
                </div>
                <div>
                  <h1 className="font-bold">Dra. Amanda Guerra</h1>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm text-gray-600">Online agora</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTÕES DE AÇÃO */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-telephone text-xl"></i>
              </button>
              <button className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-camera-video text-xl"></i>
              </button>
              <button className="p-2 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-three-dots-vertical text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ÁREA DE MENSAGENS */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          
          {/* DATA HOJE */}
          <div className="text-center my-6">
            <span className="bg-gray-200 text-gray-700 text-sm px-4 py-1 rounded-full">
              Hoje
            </span>
          </div>

          {/* MENSAGENS */}
          <div className="space-y-4">
            {mensagens.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.remetente === 'eu' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md lg:max-w-lg rounded-2xl px-4 py-3 ${
                    msg.remetente === 'eu'
                      ? 'bg-[#7E8F7B] text-white rounded-br-none'
                      : 'bg-white border border-[#C8C6BA] rounded-bl-none'
                  }`}
                >
                  <p>{msg.texto}</p>
                  <div className={`text-xs mt-2 flex justify-between items-center ${
                    msg.remetente === 'eu' ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    <span>{msg.hora}</span>
                    {msg.remetente === 'eu' && (
                      <span className="ml-2">
                        {msg.lida ? (
                          <i className="bi bi-check2-all"></i>
                        ) : (
                          <i className="bi bi-check2"></i>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {/* INDICADOR DE DIGITANDO */}
            {digitando && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#C8C6BA] rounded-2xl rounded-bl-none px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* ÁREA DE DIGITAÇÃO */}
      <div className="bg-white border-t border-[#C8C6BA] p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            {/* BOTÕES ADICIONAIS */}
            <div className="flex items-center gap-2">
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <i className="bi bi-paperclip text-xl text-gray-600"></i>
              </button>
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
                <i className="bi bi-camera text-xl text-gray-600"></i>
              </button>
            </div>
            
            {/* INPUT DE TEXTO */}
            <div className="flex-1 relative">
              <textarea
                value={novaMensagem}
                onChange={(e) => {
                  setNovaMensagem(e.target.value);
                  setDigitando(e.target.value.length > 0);
                }}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="w-full border border-[#C8C6BA] rounded-2xl py-3 px-4 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-[#7E8F7B] focus:border-transparent"
                rows="1"
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
              
              {/* CONTADOR DE CARACTERES */}
              {novaMensagem.length > 0 && (
                <div className="absolute right-3 bottom-3 text-xs text-gray-500">
                  {novaMensagem.length}/500
                </div>
              )}
            </div>
            
            {/* BOTÃO ENVIAR */}
            <button
              onClick={enviarMensagem}
              disabled={novaMensagem.trim() === ''}
              className={`p-3 rounded-full transition-colors ${
                novaMensagem.trim() === ''
                  ? 'bg-gray-200 text-gray-400'
                  : 'bg-[#7E8F7B] text-white hover:bg-[#6a7a67]'
              }`}
            >
              <i className="bi bi-send text-xl"></i>
            </button>
          </div>
          
          {/* MENSAGENS RÁPIDAS */}
          <div className="flex flex-wrap gap-2 mt-3">
            {['Como está minha dieta?', 'Preciso de uma receita', 'Estou com dúvida', 'Agendar consulta'].map((texto, index) => (
              <button
                key={index}
                onClick={() => setNovaMensagem(texto)}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
              >
                {texto}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MENU INFERIOR */}
      <div className="bg-white border-t border-[#C8C6BA]">
        <div className="max-w-4xl mx-auto px-4 py-2">
          <div className="flex justify-between">
            <Link href="/estatisticas" className="flex flex-col items-center text-gray-600 hover:text-[#7E8F7B] transition-colors p-2">
              <i className="bi bi-graph-up text-lg"></i>
              <span className="text-xs mt-1">Estatísticas</span>
            </Link>
            
            <Link href="/objetivos" className="flex flex-col items-center text-gray-600 hover:text-[#7E8F7B] transition-colors p-2">
              <i className="bi bi-bullseye text-lg"></i>
              <span className="text-xs mt-1">Objetivos</span>
            </Link>
            
            <Link href="/dietas" className="flex flex-col items-center text-gray-600 hover:text-[#7E8F7B] transition-colors p-2">
              <i className="bi bi-journal-text text-lg"></i>
              <span className="text-xs mt-1">Dieta</span>
            </Link>
            
            <Link href="/consultas" className="flex flex-col items-center text-gray-600 hover:text-[#7E8F7B] transition-colors p-2">
              <i className="bi bi-calendar-check text-lg"></i>
              <span className="text-xs mt-1">Consultas</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}