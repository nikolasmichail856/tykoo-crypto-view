
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/719474fd-c011-4bc0-972c-07c2fac16782.png" 
                alt="TYKOO Logo" 
                className="h-10 w-auto mr-2" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/markets" className="text-gray-600 hover:text-tykoo-blue">Markets</Link>
            <Link to="/faq" className="text-gray-600 hover:text-tykoo-blue">FAQ</Link>
            <Link to="/support" className="text-gray-600 hover:text-tykoo-blue">Support</Link>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
              <a href="https://app.tykoo.co/login" target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            </Button>
            <Button className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue">
              <a href="https://app.tykoo.co/register" target="_blank" rel="noopener noreferrer">
                Sign Up
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-tykoo-blue"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/markets" className="block py-2 text-gray-600">Markets</Link>
            <Link to="/faq" className="block py-2 text-gray-600">FAQ</Link>
            <Link to="/support" className="block py-2 text-gray-600">Support</Link>
            
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full border-tykoo-blue text-tykoo-blue">
                <a href="https://app.tykoo.co/login" target="_blank" rel="noopener noreferrer" className="w-full inline-block">
                  Sign In
                </a>
              </Button>
              <Button className="w-full bg-tykoo-blue text-white">
                <a href="https://app.tykoo.co/register" target="_blank" rel="noopener noreferrer" className="w-full inline-block">
                  Sign Up
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
