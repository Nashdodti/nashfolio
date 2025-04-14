
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300", 
      scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold text-portfolio-blue">Portfolio</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
            Home
          </a>
          <a href="#projects" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
            Projects
          </a>
          <a href="#about" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
            About
          </a>
          <a href="#contact" className="text-portfolio-dark hover:text-portfolio-blue transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-portfolio-dark hover:text-portfolio-blue hover:bg-transparent">
              <Menu size={28} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full p-0 bg-white border-none">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <a href="/" className="text-2xl font-semibold text-portfolio-blue">Portfolio</a>
              </div>
              
              <nav className="flex-1 py-8 px-4 flex flex-col space-y-6">
                <a href="#" className="text-portfolio-dark text-2xl font-medium hover:text-portfolio-blue transition-colors">
                  Home
                </a>
                <a href="#projects" className="text-portfolio-dark text-2xl font-medium hover:text-portfolio-blue transition-colors">
                  Projects
                </a>
                <a href="#about" className="text-portfolio-dark text-2xl font-medium hover:text-portfolio-blue transition-colors">
                  About
                </a>
                <a href="#contact" className="text-portfolio-dark text-2xl font-medium hover:text-portfolio-blue transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
