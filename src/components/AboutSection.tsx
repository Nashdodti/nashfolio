import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-20 bg-navy-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-light text-lg">
              Hi there! I'm Nash, a passionate web developer with a strong focus on creating 
              responsive, user-friendly websites and applications.
            </p>
            <p className="text-slate-light text-lg">
              With expertise in modern frontend frameworks like React, I enjoy building 
              digital experiences that are both functional and aesthetically pleasing.
            </p>
            <p className="text-slate-light text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying the outdoors.
            </p>
            
            <div className="pt-4">
              
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default AboutSection;