import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Briefcase, Cpu, Mail } from 'lucide-react';
import NavLink from '../ui/NavLink';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-800/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home" icon={<Code size={18} />}>Home</NavLink>
            <NavLink href="#projects" icon={<Briefcase size={18} />}>Projects</NavLink>
            <NavLink href="#skills" icon={<Cpu size={18} />}>Skills</NavLink>
            <NavLink href="#contact" icon={<Mail size={18} />}>Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <nav className="px-4 pt-2 pb-4 bg-dark-800/95 backdrop-blur-md space-y-2">
          <NavLink 
            href="#home" 
            icon={<Code size={18} />} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 px-4 rounded hover:bg-dark-700"
          >
            Home
          </NavLink>
          <NavLink 
            href="#projects" 
            icon={<Briefcase size={18} />} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 px-4 rounded hover:bg-dark-700"
          >
            Projects
          </NavLink>
          <NavLink 
            href="#skills" 
            icon={<Cpu size={18} />} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 px-4 rounded hover:bg-dark-700"
          >
            Skills
          </NavLink>
          <NavLink 
            href="#contact" 
            icon={<Mail size={18} />} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 px-4 rounded hover:bg-dark-700"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;