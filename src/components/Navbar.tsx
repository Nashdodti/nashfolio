
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
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

      {/* Redesigned Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-navy z-40 flex flex-col justify-center",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          "transition-all duration-300 ease-in-out md:hidden"
        )}
      >
        <div className="container mx-auto px-6 py-10">
          <nav className="flex flex-col items-center space-y-8">
            <a 
              href="#projects" 
              className="text-2xl font-medium text-white hover:text-teal transition-colors w-full text-center py-4 border-b border-slate/10"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-2xl font-medium text-white hover:text-teal transition-colors w-full text-center py-4 border-b border-slate/10"
              onClick={closeMenu}
            >
              About
            </a>
            <div className="pt-6 w-full flex justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-teal text-teal hover:bg-teal/10 w-full max-w-xs"
                onClick={closeMenu}
              >
                Contact
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
