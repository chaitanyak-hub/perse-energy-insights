
interface FooterProps {
  variant?: 'default' | 'light';
}

export const Footer = ({ variant = 'default' }: FooterProps) => {
  const bgColor = variant === 'light' ? 'bg-[hsl(var(--perse-light-pink))]' : 'bg-[hsl(var(--perse-dark-grey))]';
  const textColor = variant === 'light' ? 'text-[hsl(var(--perse-dark-grey))]' : 'text-background';
  
  return (
    <footer className={`${bgColor} ${textColor} py-8`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Left side - Logo and Contact Info */}
          <div className="flex flex-col space-y-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/1f565685-cbbd-4d62-b537-1d2bd438c82e.png" 
                alt="Perse logo" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm text-[hsl(var(--perse-turquoise))]">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>020 4538 3431</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span>info@perse.io</span>
              </div>
              <a 
                href="https://www.linkedin.com/company/persetechnology/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[hsl(var(--perse-dark-grey))] transition-colors"
              >
                <span>🔗</span>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.google.com/maps/place/Spaces+-+London,+Spaces+Oxford+Street/@51.5161381,-0.1384085,17z/data=!3m2!4b1!5s0x48760529db8641a7:0x8895c9a52c2079ab!4m6!3m5!1s0x48761b2adeb577f5:0x9f57e4d2d86b33fc!8m2!3d51.5161381!4d-0.1384085!16s%2Fg%2F11ckng6mkw?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[hsl(var(--perse-dark-grey))] transition-colors"
              >
                <span>📍</span>
                <span>Our Location</span>
              </a>
            </div>
          </div>

          {/* Center - ISO27001 Certificate */}
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <h3 className="text-lg font-semibold text-[hsl(var(--perse-dark-grey))]">ISO27001</h3>
            <img 
              src="/lovable-uploads/f1b3a1be-88c2-4a68-9806-4a065193229a.png" 
              alt="ISO27001 Certificate"
              className="h-24 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.open('/lovable-uploads/f1b3a1be-88c2-4a68-9806-4a065193229a.png', '_blank')}
            />
          </div>

          {/* Right side - Legal Links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm text-[hsl(var(--perse-turquoise))]">
            <a 
              href="/terms" 
              className="hover:text-[hsl(var(--perse-dark-grey))] transition-colors"
            >
              Terms and Conditions
            </a>
            <a 
              href="/sustainability" 
              className="hover:text-[hsl(var(--perse-dark-grey))] transition-colors"
            >
              Sustainability Policy
            </a>
            <a 
              href="/privacy" 
              className="hover:text-[hsl(var(--perse-dark-grey))] transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
