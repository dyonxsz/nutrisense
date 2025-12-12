export default function PerfilpPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Perfilp</h1>
      <p className="text-gray-600 mb-8">Página do NutriSense - perfilp</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">Recursos</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">✓ Funcionalidade 1</li>
            <li className="flex items-center gap-2">✓ Funcionalidade 2</li>
            <li className="flex items-center gap-2">✓ Funcionalidade 3</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">Informações</h3>
          <p>Esta é a página de perfilp do NutriSense.</p>
        </div>
      </div>
    </div>
  )
}
