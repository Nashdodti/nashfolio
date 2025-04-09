import { Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="py-8 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-semibold text-white">
              <span className="text-teal">Port</span>folio
            </a>
          </div>
          
          
        </div>
        
        <div className="mt-8 text-center text-slate text-sm">
          <p>© {new Date().getFullYear()} Nash. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;