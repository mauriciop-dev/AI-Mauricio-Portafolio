// Este es el layout principal que envuelve todo el contenido de la aplicación.
// Es obligatorio para que el App Router de Next.js funcione.
import './globals.css'; 

// Definición de metadatos (útil para SEO y el título de la pestaña del navegador)
export const metadata = {
  title: 'AI Portfolio de Mauricio Pineda',
  description: 'Portafolio interactivo impulsado por IA y Next.js',
};

// El componente RootLayout recibe el componente Page como 'children'.
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* El body usa h-full y w-full para asegurar que el contenido (el video) llene la pantalla */}
      <body className="min-h-screen bg-black antialiased">
        {children}
      </body>
    </html>
  );
}