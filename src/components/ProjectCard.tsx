
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
        "glass-card rounded-lg overflow-hidden h-full",
        "flex flex-col transition-transform hover:scale-[1.02] duration-300",
        "animate-fade-in opacity-0 hover:shadow-xl",
        project.featured ? "delay-100" : "delay-200"
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
        />
        {project.featured && (
          <div className="absolute top-3 right-3 bg-portfolio-blue text-white text-xs py-1 px-2 rounded font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-portfolio-dark">{project.title}</h3>
        <p className="text-portfolio-gray mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-portfolio-blue/10 px-2 py-1 text-xs rounded-full text-portfolio-blue border border-portfolio-blue/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <div className="flex gap-3">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
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
                className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={20} />
              </a>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-portfolio-dark hover:text-portfolio-blue"
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
