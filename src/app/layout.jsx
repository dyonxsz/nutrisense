import './globals.css'
import "bootstrap-icons/font/bootstrap-icons.css";
// No <head> do layout.jsx
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
/>

export const metadata = {
  title: 'NutriSense - Sua Saúde Inteligente',
  description: 'Aplicativo completo de nutrição e acompanhamento',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-[#e5e4d8]">
        {children}
      </body>
    </html>
  )
}
