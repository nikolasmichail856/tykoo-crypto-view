
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tykoo-darkBlue mb-6 leading-tight">
              Simple Crypto Exchange for Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Buy, sell, and trade Bitcoin, Ethereum, and USDC with ease. Fast on-ramp and off-ramp for major currencies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue text-lg px-8 py-6">
                <Link to="/markets">Start Trading</Link>
              </Button>
              <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white text-lg px-8 py-6" asChild>
                <Link to="/faq">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
              alt="TYKOO Web Platform" 
              className="w-full h-auto rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
