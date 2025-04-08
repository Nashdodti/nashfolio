
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in [animation-delay:200ms] opacity-0">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-slate">
              <p>
                Hello! I'm John, a web developer with a passion for creating engaging, 
                responsive web applications. My journey in web development began over 
                5 years ago, and I've been building things for the web ever since.
              </p>
              <p>
                My expertise lies in front-end technologies like React, Vue, and Angular, 
                coupled with back-end knowledge in Node.js and Express. I'm always eager 
                to learn new technologies and improve my skills.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading science fiction, 
                or exploring new coffee shops in my city.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                variant="outline" 
                className="border-teal text-teal hover:bg-teal/10"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in [animation-delay:400ms] opacity-0">
            <div className="bg-teal/5 border border-teal/20 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4 text-teal">Technical Skills</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-white">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'HTML', 'CSS', 'Tailwind'].map((skill) => (
                      <span key={skill} className="bg-navy px-3 py-1 rounded-full text-slate-lighter text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-white">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'RESTful APIs', 'GraphQL'].map((skill) => (
                      <span key={skill} className="bg-navy px-3 py-1 rounded-full text-slate-lighter text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-white">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Figma', 'Responsive Design', 'SEO'].map((skill) => (
                      <span key={skill} className="bg-navy px-3 py-1 rounded-full text-slate-lighter text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
