
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in [animation-delay:200ms] opacity-0">
          <p className="text-teal mb-5 font-mono">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Nash.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate mb-8">
            I build things for the web.
          </h2>
          <p className="text-slate text-lg mb-12 max-w-2xl">
            I'm a web developer specializing in building exceptional digital experiences.
            Currently, I'm focused on creating accessible, human-centered products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="border-teal text-teal hover:bg-teal/10"
            >
              View My Work
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-slate-light hover:text-teal group"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>Scroll Down</span>
              <ArrowDownCircle className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
