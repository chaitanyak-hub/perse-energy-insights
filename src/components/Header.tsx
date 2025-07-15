
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col">
          {/* Logo and Navigation Row */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1f565685-cbbd-4d62-b537-1d2bd438c82e.png" 
                alt="Perse logo" 
                className="h-12 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-text-primary hover:text-text-secondary transition-colors">Home</Link>
              <Link to="/about" className="text-text-primary hover:text-text-secondary transition-colors">About</Link>
              <Link to="/products" className="text-text-primary hover:text-text-secondary transition-colors">Products</Link>
              <Link to="/benefits" className="text-text-primary hover:text-text-secondary transition-colors">Benefits</Link>
              <Link to="/sectors" className="text-text-primary hover:text-text-secondary transition-colors">Sectors</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-text-primary hover:text-text-secondary">
                Login
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};
