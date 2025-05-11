import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  icon, 
  className = '', 
  onClick 
}) => {
  return (
    <a 
      href={href}
      className={`flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondary-500"></span>
    </a>
  );
};

export default NavLink;