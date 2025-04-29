
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GettingStarted = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-8 text-center">Getting Started with TYKOO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-tykoo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-tykoo-blue font-bold text-xl">1</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-tykoo-darkBlue">Create an Account</h3>
            <p className="text-gray-600">Sign up with your email address and create a secure password to begin your crypto journey.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-tykoo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-tykoo-blue font-bold text-xl">2</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-tykoo-darkBlue">Verify Your Identity</h3>
            <p className="text-gray-600">Complete our simple KYC process by uploading your ID to ensure security and compliance.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-tykoo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-tykoo-blue font-bold text-xl">3</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-tykoo-darkBlue">Fund Your Account</h3>
            <p className="text-gray-600">Deposit funds using bank transfer, credit card, or transfer existing cryptocurrencies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-tykoo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-tykoo-blue font-bold text-xl">4</span>
            </div>
            <h3 className="font-bold text-lg mb-2 text-tykoo-darkBlue">Start Trading</h3>
            <p className="text-gray-600">Buy, sell, and trade cryptocurrencies with our intuitive and powerful trading platform.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue text-lg px-8 py-6" asChild>
            <Link to="/markets">
              Start Trading Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
