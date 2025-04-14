
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Shield, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAdmin } from '@/contexts/AdminContext';
import PasswordDialog from '@/components/PasswordDialog';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const { isAdmin, toggleAdmin } = useAdmin();
  
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
  
  const handleAdminToggle = () => {
    if (!isAdmin) {
      setPasswordDialogOpen(true);
    } else {
      toggleAdmin(); // Turn off admin mode directly
    }
  };

  const handlePasswordSubmit = (password: string) => {
    toggleAdmin(password);
  };
  
  return (
    <>
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={cn(
                    "flex items-center gap-2",
                    isAdmin ? "bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue" : ""
                  )}
                >
                  {isAdmin ? <ShieldCheck size={16} /> : <Shield size={16} />}
                  Admin
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuLabel>Administration</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleAdminToggle}>
                  <div className="flex items-center gap-2">
                    {isAdmin ? (
                      <>
                        <Shield size={16} /> Disable Admin Mode
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={16} /> Enable Admin Mode
                      </>
                    )}
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                  
                  <Button 
                    variant="outline" 
                    className={cn(
                      "flex items-center gap-2 justify-start",
                      isAdmin ? "bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue" : ""
                    )}
                    onClick={handleAdminToggle}
                  >
                    {isAdmin ? <ShieldCheck size={20} /> : <Shield size={20} />}
                    {isAdmin ? "Disable Admin Mode" : "Enable Admin Mode"}
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      
      <PasswordDialog 
        open={passwordDialogOpen}
        onOpenChange={setPasswordDialogOpen}
        onSubmit={handlePasswordSubmit}
      />
    </>
  );
};

export default Navbar;
