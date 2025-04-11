
import { Code, FileText, Lightbulb, Users, Workflow } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="glass-card rounded-lg p-6 hover:shadow-xl transition-all duration-300">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 p-3 rounded-full bg-portfolio-blue/10">
        <Icon className="h-6 w-6 text-portfolio-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-portfolio-gray">{description}</p>
    </div>
  </div>
);

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, Vue, and Angular."
    },
    {
      icon: Workflow,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js and Express."
    },
    {
      icon: Lightbulb,
      title: "UX/UI Design",
      description: "Designing user-centered experiences that are both functional and aesthetically pleasing."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional products."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-portfolio-gray text-lg mb-8">
            Hi there! I'm a passionate web developer with a strong focus on creating 
            responsive, user-friendly websites and applications. With expertise in modern 
            frontend frameworks like React, I enjoy building digital experiences that are 
            both functional and aesthetically pleasing.
          </p>
          <p className="text-portfolio-gray text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or enjoying the outdoors.
          </p>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">My Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className={`animate-fade-in opacity-0 delay-${index * 100}`}>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#" className="gradient-button flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Download Resume
          </a>
          <a href="#contact" className="outline-button">
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 rounded-full bg-portfolio-teal/10 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 rounded-full bg-portfolio-blue/10 blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
