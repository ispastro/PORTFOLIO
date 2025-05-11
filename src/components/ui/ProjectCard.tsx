import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  codeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  liveLink,
  codeLink
}) => {
  return (
    <div className="card card-hover group relative flex flex-col h-full overflow-hidden">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
      </div>
      
      {/* Project Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 neon-text-secondary">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-600 text-secondary-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Links */}
        <div className="flex space-x-3 mt-auto">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-white bg-primary-600 hover:bg-primary-700 px-3 py-1.5 rounded text-sm font-medium transition-colors duration-300"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-white bg-dark-600 hover:bg-dark-500 px-3 py-1.5 rounded text-sm font-medium transition-colors duration-300"
            >
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl border border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
           style={{ 
             boxShadow: '0 0 15px 2px rgba(10, 255, 255, 0.15)' 
           }}
      ></div>
    </div>
  );
};

export default ProjectCard;