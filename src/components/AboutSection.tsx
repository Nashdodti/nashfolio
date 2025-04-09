
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-navy-dark">
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
              <Button 
                variant="outline" 
                className="border-teal text-teal hover:bg-teal/10"
              >
                <FileText className="mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="bg-navy-light p-6 rounded-lg border border-slate/10">
            <h3 className="text-xl font-semibold mb-4 text-teal">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2 text-white">Frontend</h4>
                <ul className="space-y-2 text-slate-light">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Backend</h4>
                <ul className="space-y-2 text-slate-light">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>Supabase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
