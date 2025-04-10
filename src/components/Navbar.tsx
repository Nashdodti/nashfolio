
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-navy shadow-lg backdrop-blur-md" : "bg-navy/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-semibold text-white z-50 relative">
          <span className="text-teal">Port</span>folio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#projects" className="text-slate-light hover:text-teal transition-colors">
            Projects
          </a>
          <a href="#about" className="text-slate-light hover:text-teal transition-colors">
            About
          </a>
          <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
            Contact
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-teal hover:bg-transparent">
              <Menu size={28} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full p-0 bg-navy border-none">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-navy-light/20">
                <a href="/" className="text-xl font-semibold text-white">
                  <span className="text-teal">Port</span>folio
                </a>
              </div>
              
              <nav className="flex-1 py-8 px-4 flex flex-col space-y-6">
                <a 
                  href="#projects" 
                  className="text-white text-2xl font-medium hover:text-teal transition-colors"
                >
                  Projects
                </a>
                <a 
                  href="#about" 
                  className="text-white text-2xl font-medium hover:text-teal transition-colors"
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="text-white text-2xl font-medium hover:text-teal transition-colors"
                >
                  Contact
                </a>
              </nav>
              
              <div className="mt-auto p-4 border-t border-navy-light/20">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-2 text-teal hover:text-teal-dark transition-colors text-xl"
                >
                  <Phone size={20} />
                  Call Us
                </a>
                
                <Button 
                  className="w-full mt-4 bg-teal text-navy-dark hover:bg-teal-dark"
                >
                  Login
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
