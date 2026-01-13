import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 py-6 mt-20 border-t border-zinc-800/50">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo que lleva al inicio */}
        <a href="#home" className="logo opacity-80 hover:opacity-100 transition-opacity">
          <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
        </a>

        {/* Texto de Copyright */}
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-zinc-200 font-medium">Danel Torchiari</span>. Todos los derechos reservados.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;