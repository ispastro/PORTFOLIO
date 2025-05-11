import React from 'react';
import { Code2 } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center space-x-2 group">
      <span className="text-secondary-500 transition-transform duration-300 group-hover:rotate-90">
        <Code2 size={28} strokeWidth={2.5} />
      </span>
      <span className="font-poppins font-bold text-xl">
        <span className="neon-text-secondary">Haile</span>
        <span className="text-white">Asaye</span>
      </span>
    </a>
  );
};

export default Logo;