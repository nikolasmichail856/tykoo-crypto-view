
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
              Trade crypto with confidence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Join millions of users trading cryptocurrencies on TYKOO's secure, user-friendly platform with industry-leading security.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white text-lg px-8 py-6">
                <span>Explore Markets</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000" 
              alt="TYKOO Trading Platform" 
              className="w-full h-auto rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
