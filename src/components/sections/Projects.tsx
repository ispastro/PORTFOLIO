import React from 'react';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'JobMatch Platform',
      description: 'A Laravel-based job matching platform with role-based dashboards for employers and job seekers. Features include profile setup, job posting, and application tracking.',
      image: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      techStack: ['Laravel', 'MySQL', 'Tailwind CSS', 'React ', 'Redux toolkit'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'HealthConsult',
      description: 'A Vue.js and Laravel medical consultancy application with secure video consultations, appointment scheduling, and medical record management.',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      techStack: ['Laravel', 'Vue.js', 'Sanctum', 'Pusher'],
      liveLink: '#',
      codeLink: '#'
    },
    {
      title: 'Task Manager',
      description: 'A productivity application with task organization, reminders, and progress tracking. Features animations and a clean, intuitive interface.',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      techStack: ['React', 'Redux', '', ''],
      liveLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800 relative">
      <div className="section">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title mx-auto">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Explore my recent work showcasing my expertise in Laravel development
            and full-stack web applications. Each project demonstrates
            my skills in creating elegant, functional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="opacity-0 animate-slide-up" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;