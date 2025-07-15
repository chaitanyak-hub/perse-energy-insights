
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1f565685-cbbd-4d62-b537-1d2bd438c82e.png" 
              alt="Perse logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</Link>
            <Link to="/benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</Link>
            <Link to="/sectors" className="text-gray-600 hover:text-gray-900 transition-colors">Sectors</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
