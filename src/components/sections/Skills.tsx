import React from 'react';
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiGit,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiAlpinedotjs,
  SiHtml5,

  SiStripe,
  SiPostman,
  SiReact,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiRedux,

 
   // Corrected icon name
} from 'react-icons/si';
import { FaKey, FaCreditCard } from 'react-icons/fa';
import { FaBolt } from 'react-icons/fa'; 

import SkillCard from '../ui/SkillCard';

const Skills: React.FC = () => {
  const backendSkills = [
    { title: 'Laravel', icon: <SiLaravel size={40} color="#FF2D20" />, level: 'expert' as const },
    { title: 'PHP', icon: <SiPhp size={40} color="#777BB4" />, level: 'expert' as const },
    { title: 'MySQL', icon: <SiMysql size={40} color="#00758F" />, level: 'advanced' as const },
    { title: 'Git', icon: <SiGit size={40} color="#F1502F" />, level: 'advanced' as const },
    { title: 'REST APIs', icon: <SiPostman size={40} color="#FF6C37" />, level: 'expert' as const },
   
  ];

  const frontendSkills = [
    { title: 'React', icon: <SiReact size={40} color="#42b883" />, level: 'advanced' as const },
    { title: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38BDF8" />, level: 'expert' as const },
    { title: 'Bootstrap', icon: <SiBootstrap size={40} color="#7952B3" />, level: 'expert' as const },
    { title: 'jQuery', icon: <SiJquery size={40} color="#0769AD" />, level: 'advanced' as const },
    { title: 'Inertia.js', icon: <FaBolt size={40} color="#8BC0D6" />, level: 'advanced' as const },
    { title: 'HTML', icon: <SiHtml5 size={40} color="#E34F26" />, level: 'expert' as const },
    {title: 'CSS', icon: <SiCss3 size={40} color="#38BDF8" />, level: 'expert' as const },
    { title: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" />, level: 'expert' as const },
    { title: 'TypeScript', icon: <SiTypescript size={40} color="#007ACC" />, level: 'advanced' as const },
    { title: 'Redux', icon: <SiRedux size={40} color="#764ABC" />, level: 'advanced' as const },
  ];

  const integrationSkills = [
    { title: 'Stripe', icon: <SiStripe size={40} color="#635BFF" />, level: 'advanced' as const },
    { title: 'OAuth', icon: <FaKey size={40} color="#3DCEF2" />, level: 'advanced' as const },
    { title: 'Payment Gateways', icon: <FaCreditCard size={40} color="#FF4800" />, level: 'advanced' as const },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900 relative">
      <div className="section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title mx-auto">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            My technology stack includes modern frameworks and tools to create
            elegant, functional, and scalable web applications.
          </p>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-poppins font-semibold neon-text-primary">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {backendSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-slide-up" 
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-poppins font-semibold neon-text-secondary">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {frontendSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-slide-up" 
                  style={{ animationDelay: `${(index * 0.1) + 0.6}s`, animationFillMode: 'forwards' }}
                >
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-poppins font-semibold neon-text-accent">Integrations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
              {integrationSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-slide-up" 
                  style={{ animationDelay: `${(index * 0.1) + 1.2}s`, animationFillMode: 'forwards' }}
                >
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;