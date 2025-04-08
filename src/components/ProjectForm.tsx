
import { useState, useEffect } from 'react';
import { Project } from '@/types/project';
import { X, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ProjectFormProps {
  project?: Project;
  onSave: (project: Project) => void;
  onCancel: () => void;
  onDelete: (projectId: string) => void;
}

const defaultProject: Project = {
  id: crypto.randomUUID(),
  title: '',
  description: '',
  imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
  liveUrl: '',
  githubUrl: '',
  technologies: [],
  featured: false,
};

const ProjectForm = ({ project, onSave, onCancel, onDelete }: ProjectFormProps) => {
  const [formData, setFormData] = useState<Project>(project || defaultProject);
  const [techInput, setTechInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (project) {
      setFormData(project);
    }
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, featured: checked }));
  };

  const handleAddTech = () => {
    if (techInput.trim() === '') return;
    
    setFormData(prev => ({
      ...prev,
      technologies: [...prev.technologies, techInput.trim()]
    }));
    setTechInput('');
  };

  const handleRemoveTech = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTech();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      toast({
        title: "Error",
        description: "Title and description are required",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onSave(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (project) {
      onDelete(project.id);
    }
    setShowDeleteDialog(false);
  };

  return (
    <div className="fixed inset-0 bg-navy-dark/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-navy-light rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {project ? 'Edit Project' : 'Add New Project'}
            </h2>
            <Button variant="ghost" size="icon" onClick={onCancel}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="My Awesome Project"
                className="bg-navy border-slate/20 focus-visible:ring-teal"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="A brief description of your project"
                className="bg-navy border-slate/20 focus-visible:ring-teal min-h-[100px]"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="bg-navy border-slate/20 focus-visible:ring-teal"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="liveUrl">Live URL</Label>
                <Input
                  id="liveUrl"
                  name="liveUrl"
                  value={formData.liveUrl}
                  onChange={handleChange}
                  placeholder="https://myproject.com"
                  className="bg-navy border-slate/20 focus-visible:ring-teal"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="githubUrl">GitHub URL</Label>
                <Input
                  id="githubUrl"
                  name="githubUrl"
                  value={formData.githubUrl}
                  onChange={handleChange}
                  placeholder="https://github.com/username/repo"
                  className="bg-navy border-slate/20 focus-visible:ring-teal"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Technologies</Label>
              <div className="flex">
                <Input
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add technology (e.g., React)"
                  className="bg-navy border-slate/20 focus-visible:ring-teal"
                />
                <Button 
                  type="button"
                  onClick={handleAddTech}
                  className="ml-2 bg-teal text-navy-dark hover:bg-teal-dark"
                >
                  Add
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.technologies.map((tech, index) => (
                  <div key={index} className="bg-navy px-3 py-1 rounded-full text-teal border border-teal/30 flex items-center">
                    {tech}
                    <button
                      type="button"
                      onClick={() => handleRemoveTech(index)}
                      className="ml-2 text-slate-light hover:text-teal"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="featured">Featured Project</Label>
            </div>
            
            <div className="flex justify-between space-x-4 pt-4">
              {project && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={handleDelete}
                  className="flex items-center"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Project
                </Button>
              )}
              
              <div className="flex ml-auto space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="border-slate text-slate-light hover:text-white hover:bg-navy"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-teal text-navy-dark hover:bg-teal-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? 'Saving...' 
                    : project ? 'Update Project' : 'Create Project'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent className="bg-navy-light border-slate/20">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the project
              from your database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-slate text-slate-light hover:text-white hover:bg-navy">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProjectForm;
