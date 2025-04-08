
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-semibold text-white">
              <span className="text-teal">Port</span>folio
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:email@example.com" 
              className="text-slate hover:text-teal transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
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
