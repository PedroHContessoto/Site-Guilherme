import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-card py-12 px-4 text-center text-white/70 glass-effect">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-gradient mb-4 font-orbitron">
          Guilherme Cavalhieri
        </h3>
        <p className="text-lg mb-6">Jogador de Futebol Profissional</p>

        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.instagram.com/g_cavalhieri" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-blue-400 transition-colors"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a 
            href="https://wa.me/5519992428114" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-green-400 transition-colors"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>

        <p className="text-sm">&copy; 2024 Guilherme Cavalhieri. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;


