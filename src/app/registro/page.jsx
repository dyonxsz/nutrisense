'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegistroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    altura: '',
    peso: '',
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
    
    // Salvar dados
    localStorage.setItem('usuarioLogado', JSON.stringify({
      nome: formData.nome || 'Ruan Pereira',
      email: formData.email || 'teste@email.com',
      tipo: 'paciente',
      altura: formData.altura,
      peso: formData.peso
    }));
    
    alert('Cadastro realizado!');
    router.push('/principal');
  };

  return (
    <div className="min-h-screen bg-[#DAD8CB] text-[#2D4539] flex flex-col items-center justify-center p-4">
      
      {/* LOGO */}
      <div className="text-center mb-8">
        <img src="/logo.jpg" alt="Logo" className="w-32 mx-auto mb-4 rounded-lg" />
        <h1 className="text-3xl font-bold">Criar Conta</h1>
        <p className="text-gray-600">Preencha seus dados abaixo</p>
      </div>

      {/* FORMULÁRIO SIMPLES */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <form onSubmit={handleSubmit}>
          
          {/* DADOS PESSOAIS */}
          <div className="space-y-4 mb-6">
            <h3 className="font-bold text-lg mb-2">Dados Pessoais</h3>
            
            <div>
              <label className="block text-sm mb-1">Nome completo</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7E8F7B]"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7E8F7B]"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7E8F7B]"
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          {/* INFORMAÇÕES DE SAÚDE */}
          <div className="space-y-4 mb-6">
            <h3 className="font-bold text-lg mb-2">Informações de Saúde (opcional)</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Altura (cm)</label>
                <input
                  type="number"
                  name="altura"
                  value={formData.altura}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  placeholder="175"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">Peso (kg)</label>
                <input
                  type="number"
                  name="peso"
                  value={formData.peso}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  placeholder="78.5"
                />
              </div>
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

          {/* BOTÃO DE CADASTRO */}
          <button
            type="submit"
            className="w-full bg-[#7E8F7B] text-white py-3 rounded-lg font-bold hover:bg-[#6a7a67] transition-colors mb-4"
          >
            Criar Minha Conta
          </button>

          {/* LOGIN */}
          <div className="text-center">
            <p className="text-gray-600">
              Já tem uma conta?{' '}
              <Link href="/login" className="text-[#7E8F7B] font-medium hover:underline">
                Fazer login
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* LINK PARA PROFISSIONAL */}
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          É nutricionista?{' '}
          <Link href="/registrop" className="text-[#2D4539] font-medium hover:underline">
            Cadastre-se como profissional
          </Link>
        </p>
      </div>
    </div>
  );
}