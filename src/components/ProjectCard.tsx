
import { Project } from '@/types/project';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Pencil } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
  onEditClick?: (project: Project) => void;
};

const ProjectCard = ({ project, onEditClick }: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col">
      {project.imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-portfolio-dark">{project.title}</h3>
        <p className="text-portfolio-gray mb-4">{project.description}</p>
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1 rounded-full bg-portfolio-teal/10 text-portfolio-teal font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center mt-auto pt-4">
          <div className="flex space-x-2">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-blue hover:text-portfolio-dark transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-blue hover:text-portfolio-dark transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>
          
          {onEditClick && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onEditClick(project)}
              className="text-portfolio-blue hover:text-portfolio-dark hover:bg-portfolio-blue/10"
            >
              <Pencil size={16} className="mr-1" />
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
