
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
                {/* Using Bitcoin icon with indigo color to represent Ethereum since we don't have a dedicated ETH icon */}
                <svg className="w-8 h-8 text-indigo-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97" />
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
