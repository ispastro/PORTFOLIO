import React from 'react';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import SocialLink from '../ui/SocialLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 py-8 border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-poppins font-semibold neon-text-secondary mb-2">
              Haile Asaye
            </h3>
            <p className="text-gray-400 text-sm">
              Full Stack Laravel Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 md:mb-0">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">
              Skills
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <SocialLink href="https://github.com" aria-label="GitHub" icon={<GitHub size={20} />} />
            <SocialLink href="https://linkedin.com" aria-label="LinkedIn" icon={<Linkedin size={20} />} />
            <SocialLink 
              href="mailto:haileasaye51@gmail.com" 
              aria-label="Email"
              icon={<Mail size={20} />} 
            />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-dark-600 text-center text-gray-400 text-sm">
          <p>Copyright © {currentYear} Haile Asaye. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;