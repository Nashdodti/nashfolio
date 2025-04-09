
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-xl font-semibold text-white">
              <span className="text-teal">Port</span>folio
            </a>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-slate-light hover:text-teal transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-light hover:text-teal transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-light hover:text-teal transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="#" className="text-slate-light hover:text-teal transition-colors" aria-label="Website">
              <Code size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-slate text-sm">
          <p>© {new Date().getFullYear()} Nash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
