
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';
import { ExternalLink, Github, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
  onEditClick: (project: Project) => void;
}

const ProjectCard = ({ project, onEditClick }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-lg bg-navy-light overflow-hidden card-hover",
        "flex flex-col h-full animate-fade-in opacity-0",
        project.featured ? "[animation-delay:200ms]" : "[animation-delay:400ms]"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
        />
        {project.featured && (
          <div className="absolute top-2 right-2 bg-teal text-navy-dark text-xs py-1 px-2 rounded font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-slate mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-navy px-2 py-1 text-xs rounded text-teal border border-teal/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex gap-2">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-teal transition-colors"
                aria-label="View live site"
              >
                <ExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-teal transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </a>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-slate-light hover:text-teal"
            onClick={() => onEditClick(project)}
          >
            <Edit size={18} />
            <span className="ml-1">Edit</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
