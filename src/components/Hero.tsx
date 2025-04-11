
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Hello, I'm <span className="gradient-text">Your Nash</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-portfolio-gray">
              Web App Developer
            </h2>
            <p className="text-lg text-portfolio-gray max-w-2xl">
              I design and build modern web applications that solve real problems. 
              With a focus on clean code and intuitive interfaces, I create digital 
              experiences that users love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="gradient-button inline-flex items-center gap-2 justify-center">
                View Projects
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="outline-button inline-flex items-center justify-center">
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center gap-5 pt-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:email@example.com" 
                className="text-portfolio-dark hover:text-portfolio-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 rounded-full bg-portfolio-blue/10 blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 left-0 w-96 h-96 rounded-full bg-portfolio-teal/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
