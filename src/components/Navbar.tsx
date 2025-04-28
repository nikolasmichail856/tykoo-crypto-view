
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
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
              <span className="text-xl font-bold text-tykoo-darkBlue">TYKOO</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                onClick={toggleProductsDropdown}
                className="flex items-center text-gray-600 hover:text-tykoo-blue"
              >
                Products
                {isProductsDropdownOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>
              
              {isProductsDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link to="/exchange" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Exchange</Link>
                    <Link to="/nft-marketplace" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">NFT Marketplace</Link>
                    <Link to="/defi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DeFi</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/markets" className="text-gray-600 hover:text-tykoo-blue">Markets</Link>
            <Link to="/learn" className="text-gray-600 hover:text-tykoo-blue">Learn</Link>
            <Link to="/support" className="text-gray-600 hover:text-tykoo-blue">Support</Link>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
              Sign In
            </Button>
            <Button className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue">
              Sign Up
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
            <button 
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className="w-full text-left flex items-center justify-between py-2 text-gray-600"
            >
              Products
              {isProductsDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {isProductsDropdownOpen && (
              <div className="pl-4 space-y-2">
                <Link to="/exchange" className="block py-2 text-sm text-gray-600">Exchange</Link>
                <Link to="/nft-marketplace" className="block py-2 text-sm text-gray-600">NFT Marketplace</Link>
                <Link to="/defi" className="block py-2 text-sm text-gray-600">DeFi</Link>
              </div>
            )}
            
            <Link to="/markets" className="block py-2 text-gray-600">Markets</Link>
            <Link to="/learn" className="block py-2 text-gray-600">Learn</Link>
            <Link to="/support" className="block py-2 text-gray-600">Support</Link>
            
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full border-tykoo-blue text-tykoo-blue">
                Sign In
              </Button>
              <Button className="w-full bg-tykoo-blue text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
