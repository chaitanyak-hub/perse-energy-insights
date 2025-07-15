
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Left side - Logo and Contact Info */}
          <div className="flex flex-col space-y-4">
            {/* Logo */}
            <div className="text-xl font-bold text-teal-400">
              perse
            </div>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm text-teal-400">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>020 4538 3431</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@perse.io</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔗</span>
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>Our Location</span>
              </div>
            </div>
          </div>

          {/* Right side - Legal Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm text-teal-400">
            <a 
              href="https://www.perse.energy/terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Terms and Conditions
            </a>
            <a 
              href="https://www.perse.energy/sustainability" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Sustainability Policy
            </a>
            <a 
              href="https://www.perse.energy/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
