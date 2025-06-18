import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Trophy, Image, Video, Mail, Menu, X } from 'lucide-react';
import { Button } from "../components/ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-card p-4 shadow-lg fixed w-full z-50 top-0 glass-effect">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gradient font-orbitron">
          G. Cavalhieri
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/carreira">Carreira</NavLink>
          <NavLink to="/desempenho">Desempenho</NavLink>
          <NavLink to="/portfolio">Portfólio</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 px-2 pb-3">
          <NavLinkMobile to="/" onClick={toggleMenu}>Home</NavLinkMobile>
          <NavLinkMobile to="/sobre" onClick={toggleMenu}>Sobre</NavLinkMobile>
          <NavLinkMobile to="/carreira" onClick={toggleMenu}>Carreira</NavLinkMobile>
          <NavLinkMobile to="/desempenho" onClick={toggleMenu}>Desempenho</NavLinkMobile>
          <NavLinkMobile to="/portfolio" onClick={toggleMenu}>Portfólio</NavLinkMobile>
          <NavLinkMobile to="/contato" onClick={toggleMenu}>Contato</NavLinkMobile>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-white/80 hover:text-blue-400 transition-colors text-lg font-medium relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const NavLinkMobile = ({ to, onClick, children }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:bg-white/10 hover:text-blue-400 transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;


