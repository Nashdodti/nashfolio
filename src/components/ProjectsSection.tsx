
import { useState } from 'react';
import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Responsive E-commerce Platform',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    featured: true
  },
  {
    id: '2',
    title: 'Task Management Dashboard',
    description: 'An intuitive task management dashboard with drag-and-drop functionality, team collaboration, and progress tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com/taskmanager',
    githubUrl: 'https://github.com/example/taskmanager',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    featured: false
  },
  {
    id: '3',
    title: 'Weather Forecast App',
    description: 'A weather forecast application that provides current conditions and 5-day forecasts for any location worldwide.',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/example/weather',
    technologies: ['React', 'OpenWeather API', 'Tailwind CSS'],
    featured: false
  }
];

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined);
  const { toast } = useToast();

  const handleAddProject = () => {
    setCurrentProject(undefined);
    setIsFormOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    setIsFormOpen(true);
  };

  const handleSaveProject = (project: Project) => {
    if (currentProject) {
      // Update existing project
      setProjects(prev => 
        prev.map(p => p.id === project.id ? project : p)
      );
    } else {
      // Add new project
      setProjects(prev => [project, ...prev]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
    setIsFormOpen(false);
    toast({
      title: "Project Deleted",
      description: "The project has been successfully deleted.",
    });
  };

  // Filter projects for featured and non-featured
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">My Projects</h2>
            <p className="text-slate max-w-2xl">
              A collection of web applications I've built. Each project demonstrates
              different skills and technologies.
            </p>
          </div>
          <Button 
            onClick={handleAddProject}
            className="bg-teal text-navy-dark hover:bg-teal-dark"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl text-teal mb-6 font-mono">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onEditClick={handleEditProject}
                />
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-xl text-teal mb-6 font-mono">All Projects</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onEditClick={handleEditProject}
              />
            ))}
          </div>
        </div>
      </div>

      {isFormOpen && (
        <ProjectForm 
          project={currentProject} 
          onSave={handleSaveProject} 
          onCancel={() => setIsFormOpen(false)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
