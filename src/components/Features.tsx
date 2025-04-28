
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Coins, CreditCard, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-tykoo-blue" />,
      title: 'Industry-Leading Security',
      description: 'Multiple layers of protection for your assets with 95% of funds stored in offline, cold storage.'
    },
    {
      icon: <Coins className="h-10 w-10 text-tykoo-blue" />,
      title: 'Major Cryptocurrencies',
      description: 'Trade Bitcoin, Ethereum, and USDC with transparent pricing and low fees.'
    },
    {
      icon: <CreditCard className="h-10 w-10 text-tykoo-blue" />,
      title: 'Easy On/Off Ramps',
      description: 'Seamlessly convert between major currencies and cryptocurrencies with our simple interface.'
    },
    {
      icon: <BarChart className="h-10 w-10 text-tykoo-blue" />,
      title: 'Clear Market Data',
      description: 'Access to real-time pricing data to make informed trading decisions for your investments.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-4">Why Choose TYKOO</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the simplicity of our secure, easy-to-use platform designed for both beginners and experienced traders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-6 p-3 bg-blue-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-tykoo-darkBlue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
