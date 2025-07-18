
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1f565685-cbbd-4d62-b537-1d2bd438c82e.png" 
              alt="Perse logo" 
              className="h-12 sm:h-16 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-text-primary hover:text-text-secondary transition-colors">Home</Link>
            <Link to="/products" className="text-text-primary hover:text-text-secondary transition-colors">Products</Link>
            <Link to="/benefits" className="text-text-primary hover:text-text-secondary transition-colors">Benefits</Link>
            <Link to="/sectors" className="text-text-primary hover:text-text-secondary transition-colors">Sectors</Link>
            <Link to="/about" className="text-text-primary hover:text-text-secondary transition-colors">About</Link>
            <Link to="/contact" className="text-text-primary hover:text-text-secondary transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-text-primary hover:text-text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-text-primary hover:text-text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/benefits" 
                className="text-text-primary hover:text-text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                to="/sectors" 
                className="text-text-primary hover:text-text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sectors
              </Link>
              <Link 
                to="/about" 
                className="text-text-primary hover:text-text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-text-primary hover:text-text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
