
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const GetStarted = () => {
  const steps = [
    {
      number: '01',
      title: 'Create an Account',
      description: 'Sign up for a free account in minutes with just your email.'
    },
    {
      number: '02',
      title: 'Verify Your Identity',
      description: 'Complete our secure verification process to start trading.'
    },
    {
      number: '03',
      title: 'Fund Your Account',
      description: 'Add funds using bank transfer or credit card.'
    },
    {
      number: '04',
      title: 'Start Trading',
      description: 'Buy and sell Bitcoin, Ethereum, and USDC with confidence.'
    },
  ];

  const benefits = [
    'Simple interface for beginners',
    'Secure platform with two-factor authentication',
    'Competitive trading fees',
    '24/7 customer support'
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">Get Started in Minutes</h2>
            <p className="text-gray-600 mb-8">
              Join thousands of traders who have discovered the benefits of our simple crypto exchange. TYKOO makes it easy to get started with a secure platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {steps.map((step) => (
                <div key={step.number} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <span className="text-sm font-semibold text-tykoo-blue">{step.number}</span>
                  <h3 className="text-xl font-semibold my-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center mb-3">
                  <Check className="h-5 w-5 text-tykoo-green mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue px-8 py-6 text-lg">
              <a href="https://app.tykoo.co/register" target="_blank" rel="noopener noreferrer" className="w-full inline-block">
                Create Free Account
              </a>
            </Button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1638913662380-9799def8ffb1?auto=format&fit=crop&q=80&w=1000" 
                alt="Trading on TYKOO" 
                className="w-full h-auto rounded-lg animate-fade-in" 
              />
              {/* White gradient overlay that fades from bottom and slightly from sides */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
