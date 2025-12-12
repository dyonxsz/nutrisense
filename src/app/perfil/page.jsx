'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState('dados');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nome: "Ruan Pereira",
    email: "ruan.pereira@email.com",
    telefone: "(11) 98765-4321",
    dataNascimento: "05/08/1985",
    altura: "1.75",
    peso: "85",
    objetivo: "Perda de peso",
    restricoes: "Lactose",
    nutricionista: "Dra. Amanda Guerra",
    imc: "27.5",
    plano: "Premium"
  });

  const [tempData, setTempData] = useState({ ...userData });

  const handleEdit = () => {
    setIsEditing(true);
    setTempData({ ...userData });
  };

  const handleSave = () => {
    setUserData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...userData });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setTempData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Calcular IMC baseado em peso e altura
  const calcularIMC = () => {
    const alturaEmMetros = parseFloat(tempData.altura);
    const pesoEmKg = parseFloat(tempData.peso);
    
    if (alturaEmMetros > 0 && pesoEmKg > 0) {
      const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);
      return imc.toFixed(1);
    }
    return "27.5";
  };

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
              {/* VOLTAR PARA PÁGINA PRINCIPAL */}
              <Link href="/principal" className="flex items-center gap-2 px-4 py-2 bg-[#7E8F7B] text-white rounded-full hover:bg-[#6D7C6A] transition-colors">
                <i className="bi bi-arrow-left"></i>
                <span>Voltar</span>
              </Link>

              {/* NOTIFICAÇÕES */}
              <Link href="/notificacoes" className="relative p-3 hover:bg-[#F0EFE7] rounded-full transition-colors">
                <i className="bi bi-bell text-xl text-[#2D4539]"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL DO PERFIL */}
      <div className="max-w-4xl mx-auto p-6">
        {/* CABEÇALHO DO PERFIL */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E7E5D9]">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* FOTO DE PERFIL */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-[#2D4539] to-[#7E8F7B] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                RP
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-[#7E8F7B] text-white p-2 rounded-full hover:bg-[#6D7C6A] transition-colors">
                  <i className="bi bi-camera"></i>
                </button>
              )}
            </div>

            {/* INFORMAÇÕES DO USUÁRIO */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-[#2D4539] mb-2">
                    {isEditing ? (
                      <input
                        type="text"
                        value={tempData.nome}
                        onChange={(e) => handleChange('nome', e.target.value)}
                        className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-3 py-2 text-3xl font-bold text-[#2D4539] w-full md:w-auto"
                      />
                    ) : (
                      userData.nome
                    )}
                  </h1>
                  <p className="text-gray-600">
                    <i className="bi bi-star-fill text-yellow-500 mr-1"></i>
                    Plano {userData.plano}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0">
                  {isEditing ? (
                    <div className="flex gap-3">
                      <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-[#2D4539] text-white rounded-full hover:bg-[#1E3529] transition-colors font-medium"
                      >
                        Salvar
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors font-medium"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handleEdit}
                      className="px-6 py-2 bg-[#7E8F7B] text-white rounded-full hover:bg-[#6D7C6A] transition-colors font-medium flex items-center gap-2"
                    >
                      <i className="bi bi-pencil"></i>
                      Editar Perfil
                    </button>
                  )}
                </div>
              </div>

              {/* STATUS DO IMC */}
              <div className="inline-flex items-center bg-gradient-to-r from-[#2D4539] to-[#7E8F7B] text-white px-4 py-2 rounded-full">
                <i className="bi bi-graph-up mr-2"></i>
                <span className="font-medium">IMC: {calcularIMC()} (Sobrepeso)</span>
              </div>
            </div>
          </div>
        </div>

        {/* ABA DE NAVEGAÇÃO */}
        <div className="flex border-b border-[#C8C6BA] mb-8 overflow-x-auto">
          {['dados', 'saude', 'historico', 'configuracoes'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'text-[#2D4539] border-b-2 border-[#2D4539]'
                  : 'text-gray-600 hover:text-[#2D4539] hover:bg-[#F0EFE7]'
              }`}
            >
              {tab === 'dados' && 'Dados Pessoais'}
              {tab === 'saude' && 'Saúde'}
              {tab === 'historico' && 'Histórico'}
              {tab === 'configuracoes' && 'Configurações'}
            </button>
          ))}
        </div>

        {/* CONTEÚDO DA ABA SELECIONADA */}
        <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#E7E5D9]">
          {/* DADOS PESSOAIS */}
          {activeTab === 'dados' && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D4539] mb-6">Dados Pessoais</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="bi bi-envelope mr-2"></i>
                    E-mail
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={tempData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700"
                    />
                  ) : (
                    <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700">
                      {userData.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="bi bi-telephone mr-2"></i>
                    Telefone
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={tempData.telefone}
                      onChange={(e) => handleChange('telefone', e.target.value)}
                      className="w-full bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700"
                    />
                  ) : (
                    <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700">
                      {userData.telefone}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="bi bi-calendar-event mr-2"></i>
                    Data de Nascimento
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempData.dataNascimento}
                      onChange={(e) => handleChange('dataNascimento', e.target.value)}
                      className="w-full bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700"
                    />
                  ) : (
                    <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700">
                      {userData.dataNascimento}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="bi bi-person-vcard mr-2"></i>
                    Nutricionista
                  </label>
                  <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700">
                    {userData.nutricionista}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SAÚDE */}
          {activeTab === 'saude' && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D4539] mb-6">Informações de Saúde</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="bi bi-rulers mr-2"></i>
                    Altura (metros)
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      step="0.01"
                      value={tempData.altura}
                      onChange={(e) => handleChange('altura', e.target.value)}
                      className="w-full bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700"
                    />
                  ) : (
                    <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700">
                      {userData.altura} m
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="bi bi-speedometer2 mr-2"></i>
                    Peso (kg)
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      step="0.1"
                      value={tempData.peso}
                      onChange={(e) => handleChange('peso', e.target.value)}
                      className="w-full bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700"
                    />
                  ) : (
                    <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700">
                      {userData.peso} kg
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="bi bi-bullseye mr-2"></i>
                    Objetivo Principal
                  </label>
                  {isEditing ? (
                    <select
                      value={tempData.objetivo}
                      onChange={(e) => handleChange('objetivo', e.target.value)}
                      className="w-full bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700"
                    >
                      <option value="Perda de peso">Perda de peso</option>
                      <option value="Ganho de massa">Ganho de massa</option>
                      <option value="Manutenção">Manutenção</option>
                      <option value="Melhorar alimentação">Melhorar alimentação</option>
                    </select>
                  ) : (
                    <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700">
                      {userData.objetivo}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <i className="bi bi-exclamation-triangle mr-2"></i>
                    Restrições Alimentares
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempData.restricoes}
                      onChange={(e) => handleChange('restricoes', e.target.value)}
                      className="w-full bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700"
                      placeholder="Ex: Lactose, Glúten"
                    />
                  ) : (
                    <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg px-4 py-3 text-gray-700">
                      {userData.restricoes}
                    </div>
                  )}
                </div>
              </div>

              {/* CÁLCULO DO IMC */}
              <div className="mt-8 p-6 bg-gradient-to-r from-[#F8F8F5] to-[#E7E5D9] rounded-xl border border-[#C8C6BA]">
                <h3 className="text-xl font-bold text-[#2D4539] mb-4 flex items-center">
                  <i className="bi bi-calculator mr-3"></i>
                  Cálculo do IMC
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">
                      Altura: {isEditing ? tempData.altura : userData.altura} m
                    </p>
                    <p className="text-gray-600">
                      Peso: {isEditing ? tempData.peso : userData.peso} kg
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#2D4539]">
                      {calcularIMC()}
                    </div>
                    <div className={`px-4 py-1 rounded-full text-sm font-medium ${
                      parseFloat(calcularIMC()) < 18.5 ? 'bg-blue-100 text-blue-800' :
                      parseFloat(calcularIMC()) < 25 ? 'bg-green-100 text-green-800' :
                      parseFloat(calcularIMC()) < 30 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {parseFloat(calcularIMC()) < 18.5 ? 'Abaixo do peso' :
                       parseFloat(calcularIMC()) < 25 ? 'Peso normal' :
                       parseFloat(calcularIMC()) < 30 ? 'Sobrepeso' :
                       'Obesidade'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* HISTÓRICO */}
          {activeTab === 'historico' && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D4539] mb-6">Histórico de Consultas</h2>
              
              <div className="space-y-4">
                {[
                  { date: '15/03/2024', time: '10:00', type: 'Consulta Online', status: 'Concluída' },
                  { date: '01/03/2024', time: '14:30', type: 'Ajuste de Dieta', status: 'Concluída' },
                  { date: '15/02/2024', time: '11:00', type: 'Consulta Online', status: 'Concluída' },
                  { date: '01/02/2024', time: '16:00', type: 'Acompanhamento', status: 'Concluída' },
                  { date: '28/03/2024', time: '09:00', type: 'Consulta Online', status: 'Agendada' },
                ].map((consulta, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg hover:bg-[#F0EFE7] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#2D4539] text-white rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs">MAR</span>
                        <span className="font-bold">15</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2D4539]">{consulta.type}</h4>
                        <p className="text-sm text-gray-600">{consulta.date} às {consulta.time}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      consulta.status === 'Concluída' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {consulta.status}
                    </div>
                  </div>
                ))}
              </div>

              {/* HISTÓRICO DE MEDIDAS */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#2D4539] mb-4">Evolução de Medidas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#2D4539]">-2.5 kg</div>
                    <div className="text-sm text-gray-600">Último mês</div>
                  </div>
                  <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#2D4539]">-5 kg</div>
                    <div className="text-sm text-gray-600">Total</div>
                  </div>
                  <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#2D4539]">90%</div>
                    <div className="text-sm text-gray-600">Dias na dieta</div>
                  </div>
                  <div className="bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-[#2D4539]">28</div>
                    <div className="text-sm text-gray-600">Consultas realizadas</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONFIGURAÇÕES */}
          {activeTab === 'configuracoes' && (
            <div>
              <h2 className="text-2xl font-bold text-[#2D4539] mb-6">Configurações da Conta</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#2D4539]">Notificações</h4>
                    <p className="text-sm text-gray-600">Receber lembretes e atualizações</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7E8F7B]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#2D4539]">Privacidade</h4>
                    <p className="text-sm text-gray-600">Gerenciar visibilidade do perfil</p>
                  </div>
                  <button className="px-4 py-2 text-sm bg-[#7E8F7B] text-white rounded-full hover:bg-[#6D7C6A] transition-colors">
                    Configurar
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#2D4539]">Alterar Senha</h4>
                    <p className="text-sm text-gray-600">Atualize sua senha de acesso</p>
                  </div>
                  <button className="px-4 py-2 text-sm bg-white border border-[#7E8F7B] text-[#7E8F7B] rounded-full hover:bg-[#F0EFE7] transition-colors">
                    Alterar
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#F8F8F5] border border-[#C8C6BA] rounded-lg">
                  <div>
                    <h4 className="font-semibold text-[#2D4539] text-red-600">Excluir Conta</h4>
                    <p className="text-sm text-gray-600">Remover permanentemente sua conta</p>
                  </div>
                  <button className="px-4 py-2 text-sm bg-red-50 border border-red-200 text-red-600 rounded-full hover:bg-red-100 transition-colors">
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RODAPÉ DO PERFIL */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Seus dados estão protegidos conforme nossa Política de Privacidade
          </p>
        </div>
      </div>
    </div>
  );
}