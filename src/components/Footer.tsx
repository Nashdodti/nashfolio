import { Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 bg-portfolio-light border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-xl font-semibold text-portfolio-blue">
              Portfolio
            </a>
            <p className="mt-2 text-portfolio-gray">
              Creating beautiful digital experiences.
            </p>
          </div>
          
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-gray text-sm">
            © {currentYear} Nash. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-portfolio-gray hover:text-portfolio-blue text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-portfolio-gray hover:text-portfolio-blue text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;