
import { Card } from '@/components/ui/card';
import { Bitcoin, DollarSign } from 'lucide-react';

const PopularCryptocurrencies = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-8 text-center">Popular Cryptocurrencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-tykoo-blue/10 rounded-full p-3 mr-4">
                <Bitcoin className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="font-bold text-xl text-tykoo-darkBlue">Bitcoin (BTC)</h3>
            </div>
            <p className="text-gray-600 mb-4">The first and most valuable cryptocurrency, created in 2009 by an unknown person or group using the pseudonym Satoshi Nakamoto.</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Market Cap</span>
              <span className="font-semibold">~$1 trillion</span>
            </div>
          </Card>

          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-tykoo-blue/10 rounded-full p-3 mr-4">
                {/* Custom Ethereum icon */}
                <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.2"
                    d="M12 1.75L5.75 12.25L12 16L18.25 12.25L12 1.75Z M12 16L5.75 12.25L12 22.25L18.25 12.25L12 16Z" 
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-tykoo-darkBlue">Ethereum (ETH)</h3>
            </div>
            <p className="text-gray-600 mb-4">A decentralized software platform that enables smart contracts and dApps to be built and run without downtime, fraud, or interference.</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Market Cap</span>
              <span className="font-semibold">~$250 billion</span>
            </div>
          </Card>

          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-tykoo-blue/10 rounded-full p-3 mr-4">
                <DollarSign className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-bold text-xl text-tykoo-darkBlue">USD Coin (USDC)</h3>
            </div>
            <p className="text-gray-600 mb-4">A stablecoin pegged to the US dollar, designed to maintain a 1:1 value with USD, providing stability in the volatile crypto market.</p>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Market Cap</span>
              <span className="font-semibold">~$30 billion</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PopularCryptocurrencies;
