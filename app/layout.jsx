import './globals.css';
import Nav from './components/Nav';

export const metadata = {
  title: 'En el silencio del ser',
  description: 'Hecho con ❤️ por Fabián Martín Balmaceda Rescia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        <div className="container" style={{ padding: '2rem' }}>
          <header className="page-header">
            <h1>En el silencio del ser</h1>
            <p className="author">Hecho con ❤️ por Fabián Martín Balmaceda Rescia</p>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
