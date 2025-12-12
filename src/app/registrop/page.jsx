'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegistroProfissionalPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    crn: '',
    especialidade: '',
    experiencia: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('usuarioLogado', JSON.stringify({
      nome: formData.nome || 'Dra. Amanda Guerra',
      email: formData.email || 'nutri@teste.com',
      tipo: 'profissional',
      crn: formData.crn || 'CRN-8 XYZ2'
    }));
    
    alert('Cadastro profissional realizado!');
    router.push('/profissional');
  };

  return (
    <div className="min-h-screen bg-[#DAD8CB] text-[#2D4539] flex flex-col items-center justify-center p-4">
      
      {/* LOGO */}
      <div className="text-center mb-8">
        <img src="/logo.jpg" alt="Logo" className="w-32 mx-auto mb-4 rounded-lg" />
        <h1 className="text-3xl font-bold">Cadastro Profissional</h1>
        <p className="text-gray-600">Para nutricionistas e profissionais de saúde</p>
      </div>

      {/* FORMULÁRIO */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <form onSubmit={handleSubmit}>
          
          {/* DADOS PROFISSIONAIS */}
          <div className="space-y-4 mb-6">
            <h3 className="font-bold text-lg mb-2">Dados Profissionais</h3>
            
            <div>
              <label className="block text-sm mb-1">Nome completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Dr(a). Nome Completo"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1">Email profissional</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1">Telefone</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="(11) 99999-9999"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1">Número do CRN</label>
              <input
                type="text"
                name="crn"
                value={formData.crn}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="CRN-8 12345"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1">Especialidade</label>
              <select
                name="especialidade"
                value={formData.especialidade}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              >
                <option value="">Selecione</option>
                <option value="clinica">Nutrição Clínica</option>
                <option value="esportiva">Nutrição Esportiva</option>
                <option value="infantil">Nutrição Infantil</option>
                <option value="outra">Outra</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-1">Experiência</label>
              <select
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              >
                <option value="">Selecione</option>
                <option value="0-2">0-2 anos</option>
                <option value="3-5">3-5 anos</option>
                <option value="6-10">6-10 anos</option>
                <option value="10+">Mais de 10 anos</option>
              </select>
            </div>
          </div>

          {/* SENHA */}
          <div className="space-y-4 mb-8">
            <h3 className="font-bold text-lg mb-2">Segurança</h3>
            
            <div>
              <label className="block text-sm mb-1">Senha</label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Digite uma senha"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1">Confirmar senha</label>
              <input
                type="password"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Digite novamente"
              />
            </div>
          </div>

          {/* BOTÕES */}
          <button
            type="submit"
            className="w-full bg-[#2D4539] text-white py-3 rounded-lg font-bold hover:bg-[#1f3328] transition-colors mb-4"
          >
            Cadastrar como Profissional
          </button>
             {/* VOLTAR */}
          <div className="text-center">
            <Link href="/registro" className="text-[#7E8F7B] font-medium hover:underline">
              ← Voltar para registro de paciente
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}