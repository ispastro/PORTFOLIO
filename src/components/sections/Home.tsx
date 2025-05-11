import React from 'react';
import { ChevronRight, LucideGithub, Linkedin, Download } from 'lucide-react';
import Button from '../ui/Button';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 z-0"></div>
      
      <div className="section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4">
              <span className="h-1 w-12 bg-secondary-500 rounded-full"></span>
              <span className="text-secondary-400 font-medium tracking-wider">FULL STACK DEVELOPER</span>
            </div>
            
            <h1 className="font-poppins font-bold">
              Hi, I'm <span className="neon-text-secondary">Haile Asaye</span> — 
              <br />Laravel Full Stack Developer
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl">
              I build fast, secure, and elegant websites & platforms. Specializing in Laravel with a knack for creating beautiful, scalable, and functional web applications.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <Button 
                variant="primary" 
                icon={<ChevronRight size={18} />}
                iconPosition="right"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Let's Work Together
              </Button>
              
              <Button 
                variant="outline"
                icon={<Download size={18} />} 
              >
                Download CV
              </Button>
            </div>
            
            <div className="flex items-center space-x-5 pt-4">
              <a 
                href="https://github.com/ispastro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <LucideGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/haile-asaye21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-dark-700">
              {/* <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Haile Asaye" 
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 ring-2 ring-secondary-500 ring-opacity-50 rounded-full"></div>
              
             
              <div className="absolute -right-4 top-1/4 bg-dark-800 p-2 rounded-lg shadow-lg animate-pulse-slow">
                {/* <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" 
                  
                  className="w-8 h-8"
                /> */}
              </div>
              <div className="absolute -left-4 top-1/3 bg-dark-800 p-2 rounded-lg shadow-lg animate-pulse-slow" style={{ animationDelay: '1s' }}>
                {/* <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" 
               
                  className="w-8 h-8"
                /> */}
              </div>
              {/* <div className="absolute bottom-4 left-1/4 bg-dark-800 p-2 rounded-lg shadow-lg animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
                  alt="Tailwind CSS" 
                  className="w-8 h-8"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;