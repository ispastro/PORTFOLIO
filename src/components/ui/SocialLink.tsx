import React, { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  'aria-label': string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, 'aria-label': ariaLabel }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-dark-600 transition-all duration-300 transform hover:scale-110"
    >
      {icon}
    </a>
  );
};

export default SocialLink;