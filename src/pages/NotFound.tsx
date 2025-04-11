
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio-light p-4">
      <div className="glass-card p-8 rounded-lg max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-portfolio-dark mb-8">Oops! Page not found</p>
        <p className="text-portfolio-gray mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="gradient-button inline-flex items-center justify-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
