
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-tykoo-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/719474fd-c011-4bc0-972c-07c2fac16782.png" 
                alt="TYKOO Logo" 
                className="h-8 w-auto mr-2" 
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Tykoo is a trading style of Finvault Exchange spółka z ograniczoną odpowiedzialnością, a company registered in Poland with its registered address at ul. Prezydenta Gabriela Narutowicza 40 / 1, 90-135 Łódź. The company is authorised and regulated under Polish law to operate as a virtual asset service provider (VASP), including the exchange of digital currencies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/exchange" className="hover:text-white">Exchange</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/markets" className="hover:text-white">Market Insights</Link></li>
              <li><Link to="/learn-more" className="hover:text-white">Learn Crypto</Link></li>
              <li><Link to="/security" className="hover:text-white">Security</Link></li>
              <li><Link to="/support" className="hover:text-white">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TYKOO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white">Terms</Link>
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white">Privacy</Link>
            <Link to="/cookies" className="text-gray-400 text-sm hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
