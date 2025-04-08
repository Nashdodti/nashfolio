
import { useState, useEffect } from 'react';
import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      // Map database column names to our interface property names
      const mappedProjects = data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        imageUrl: item.image_url,
        liveUrl: item.live_url,
        githubUrl: item.github_url,
        technologies: item.technologies,
        featured: item.featured,
        createdAt: item.created_at
      }));

      setProjects(mappedProjects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to load projects. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProject = () => {
    setCurrentProject(undefined);
    setIsFormOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    setIsFormOpen(true);
  };

  const handleSaveProject = async (project: Project) => {
    try {
      // Map our interface property names to database column names
      const dbProject = {
        id: project.id,
        title: project.title,
        description: project.description,
        image_url: project.imageUrl,
        live_url: project.liveUrl || null,
        github_url: project.githubUrl || null,
        technologies: project.technologies,
        featured: project.featured
      };

      if (currentProject) {
        // Update existing project
        const { error } = await supabase
          .from('projects')
          .update(dbProject)
          .eq('id', project.id);

        if (error) throw error;

        toast({
          title: "Project Updated",
          description: "Your project has been successfully updated.",
        });
      } else {
        // Add new project
        // Remove the id so Supabase can generate one
        const { id, ...newProject } = dbProject;
        
        const { error } = await supabase
          .from('projects')
          .insert([newProject]);

        if (error) throw error;

        toast({
          title: "Project Created",
          description: "Your new project has been successfully created.",
        });
      }

      // Refetch projects to get the latest data
      fetchProjects();
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error saving project:', error);
      toast({
        title: "Error",
        description: "Failed to save project. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteProject = async (projectId: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);

      if (error) throw error;

      // Update state with filtered projects
      setProjects(prev => prev.filter(p => p.id !== projectId));
      setIsFormOpen(false);
      
      toast({
        title: "Project Deleted",
        description: "The project has been successfully deleted.",
      });
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: "Error",
        description: "Failed to delete project. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Filter projects for featured and non-featured
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  // Loading skeletons for projects
  const SkeletonProjects = ({ count, isFeatured = false }: { count: number, isFeatured?: boolean }) => (
    <div className={`grid ${isFeatured ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-6`}>
      {Array(count).fill(0).map((_, index) => (
        <div key={index} className="rounded-lg bg-navy-light overflow-hidden h-full">
          <Skeleton className="h-48 w-full" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-5/6 mb-4" />
            <div className="flex flex-wrap gap-2 mb-4">
              {Array(3).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-6 w-16 rounded-full" />
              ))}
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

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

        {isLoading ? (
          <>
            {/* Featured projects skeleton */}
            <div className="mb-12">
              <h3 className="text-xl text-teal mb-6 font-mono">Featured Projects</h3>
              <SkeletonProjects count={2} isFeatured={true} />
            </div>
            
            {/* Regular projects skeleton */}
            <div>
              <h3 className="text-xl text-teal mb-6 font-mono">All Projects</h3>
              <SkeletonProjects count={3} />
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>

      {isFormOpen && (
        <ProjectForm 
          project={currentProject} 
          onSave={handleSaveProject} 
          onCancel={() => setIsFormOpen(false)}
          onDelete={handleDeleteProject}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
