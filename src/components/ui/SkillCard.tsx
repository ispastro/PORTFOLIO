import React, { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, level = 'advanced' }) => {
  const levelColors = {
    beginner: 'bg-primary-500/30',
    intermediate: 'bg-primary-500/50',
    advanced: 'bg-primary-500/70',
    expert: 'bg-primary-500/90'
  };

  const levelWidth = {
    beginner: 'w-1/4',
    intermediate: 'w-2/4',
    advanced: 'w-3/4',
    expert: 'w-full'
  };

  return (
    <div className="card card-hover p-4 backdrop-blur-sm flex flex-col items-center justify-center group">
      <div className="text-secondary-500 mb-3 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-center mb-2">{title}</h3>
      <div className="w-full h-1 bg-dark-600 rounded-full overflow-hidden mt-2">
        <div className={`h-full ${levelWidth[level]} ${levelColors[level]} rounded-full`}></div>
      </div>
    </div>
  );
};

export default SkillCard;