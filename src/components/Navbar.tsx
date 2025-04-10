
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-teal z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-navy-dark z-40 flex flex-col items-center justify-start pt-28",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            "transition-all duration-300 ease-in-out md:hidden"
          )}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={32} className="text-teal" />
          </button>
          
          <div className="w-full max-w-md px-6">
            <nav className="flex flex-col items-center space-y-6 w-full">
              <a 
                href="/" 
                className="w-full text-center py-4 text-teal text-2xl font-medium hover:text-white transition-colors"
                onClick={closeMenu}
              >
                Portfolio
              </a>
              
              <a 
                href="#contact" 
                className="w-full text-center py-4 text-teal text-2xl font-medium hover:text-white transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
              
              <div className="w-full h-px bg-navy-light my-2"></div>
              
              <a 
                href="#projects" 
                className="w-full text-center py-4 text-white text-2xl font-medium hover:text-teal transition-colors"
                onClick={closeMenu}
              >
                Projects
              </a>
              
              <a 
                href="#about" 
                className="w-full text-center py-4 text-white text-2xl font-medium hover:text-teal transition-colors"
                onClick={closeMenu}
              >
                About
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
