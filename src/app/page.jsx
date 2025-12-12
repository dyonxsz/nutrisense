"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: '#DAD8CB', color: '#2D4539' }}
    >
      {/* LOGO */}
      <div className="mb-8">
        <img
          src="/logo.jpg"
          alt="NutriSense Logo"
          className="w-64 mx-auto"
        />
      </div>

      {/* TÍTULO PRINCIPAL */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
        NutriSense
      </h1>
      
      {/* SUBTÍTULO */}
      <p className="text-lg md:text-xl text-center mb-10 max-w-md">
        Conexão direta entre nutricionistas e pacientes
      </p>

      {/* CARD DE DESCRIÇÃO */}
      <div className="bg-[#E7E5D9] border border-[#2D4539] rounded-xl p-6 mb-10 max-w-md shadow-lg">
        <div className="flex items-center justify-center gap-3 mb-4">
          <i className="bi bi-chat-heart-fill text-3xl"></i>
          <i className="bi bi-heart-pulse-fill text-3xl"></i>
          <i className="bi bi-calendar-check-fill text-3xl"></i>
        </div>
        
        <h2 className="text-xl font-bold text-center mb-3">
          Sua saúde em boas mãos
        </h2>
        
        <p className="text-center mb-4">
          NutriSense facilita a comunicação entre nutricionistas e pacientes, 
          oferecendo acompanhamento personalizado, dietas adaptadas e suporte 
          constante através do nosso chat exclusivo.
        </p>
        
        <div className="flex justify-center gap-6 mt-4">
          <div className="text-center">
            <i className="bi bi-shield-check text-2xl mb-1 block"></i>
            <span className="text-sm">Seguro</span>
          </div>
          <div className="text-center">
            <i className="bi bi-lightning-charge text-2xl mb-1 block"></i>
            <span className="text-sm">Rápido</span>
          </div>
          <div className="text-center">
            <i className="bi bi-person-check text-2xl mb-1 block"></i>
            <span className="text-sm">Personalizado</span>
          </div>
        </div>
      </div>

      {/* BOTÃO DE LOGIN */}
      <Link href="/login">
        <button
          className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: '#7E8F7B',
            color: 'white',
            boxShadow: isHovered 
              ? '0 10px 25px rgba(126, 143, 123, 0.4)' 
              : '0 5px 15px rgba(126, 143, 123, 0.3)'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center gap-3">
            <i className="bi bi-box-arrow-in-right text-xl"></i>
            <span>ACESSAR PLATAFORMA</span>
          </div>
        </button>
      </Link>

      {/* RODAPÉ */}
      <div className="mt-12 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <i className="bi bi-info-circle text-xl"></i>
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <i className="bi bi-shield-lock text-xl"></i>
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <i className="bi bi-question-circle text-xl"></i>
          </a>
        </div>
        
        <p className="text-sm opacity-80">
          © 2024 NutriSense. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2 opacity-70">
          Transformando vidas através da nutrição inteligente
        </p>
      </div>
    </div>
  );
}