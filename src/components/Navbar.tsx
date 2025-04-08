
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-navy/90 backdrop-blur-md border-b border-slate/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-semibold text-white">
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
          className="md:hidden text-slate-light hover:text-teal"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-navy-dark z-40 flex flex-col items-center justify-center space-y-8 pt-16",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          "transition-opacity duration-300 md:hidden"
        )}
      >
        <a 
          href="#projects" 
          className="text-xl text-slate-light hover:text-teal transition-colors"
          onClick={toggleMenu}
        >
          Projects
        </a>
        <a 
          href="#about" 
          className="text-xl text-slate-light hover:text-teal transition-colors"
          onClick={toggleMenu}
        >
          About
        </a>
        <Button 
          variant="outline" 
          className="border-teal text-teal hover:bg-teal/10"
          onClick={toggleMenu}
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
