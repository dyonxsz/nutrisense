export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#DAD8CB]">

      
      <img
        src="/principal.jpg"
        alt="Logo NutriSense"
        className="w-64 mb-6"
      />

      
      <div className="w-full max-w-xs flex flex-col items-center">

        <input
          type="email"
          placeholder="Email:"
          className="w-full border border-[#2D4539] rounded-md py-2 px-3 mb-3 bg-[#DAD8CB] text-[#2D4539]"
        />

        <input
          type="password"
          placeholder="Senha:"
          className="w-full border border-[#2D4539] rounded-md py-2 px-3 bg-[#DAD8CB] text-[#2D4539]"
        />

        
        <div className="flex justify-between w-full text-sm mt-3 text-[#2D4539]">
          <a href="/registro" className="underline">
            Cadastrar-se
          </a>

          <a href="/principal" className="underline">
            Entrar
          </a>
        </div>

        <a
          href="/registrop"
          className="underline text-sm mt-2 text-[#2D4539]"
        >
          Cadastro Profissional
        </a>

        <p className="text-center mt-6 font-semibold text-[#2D4539]">
          Nutriense, o seu guia inteligente <br />
          para uma alimentação equilibrada!
        </p>
      </div>

      
      <div className="mt-10 text-center text-[#2D4539]">
        <p className="font-semibold mb-3">Conheça nossas redes sociais:</p>

        <div className="flex items-center justify-center gap-6 text-3xl">
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-x"></i>
        </div>
      </div>
    </div>
  );
}
