
import { ChevronRight } from 'lucide-react';

const WhatIsCrypto = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-tykoo-darkBlue mb-6">What is Cryptocurrency?</h2>
            <p className="text-gray-600 mb-4">
              Cryptocurrency is a digital or virtual form of currency that uses cryptography for security, making it difficult 
              to counterfeit. Unlike traditional currencies issued by governments (fiat money), cryptocurrencies operate on 
              decentralized systems based on blockchain technology.
            </p>
            <p className="text-gray-600 mb-6">
              Bitcoin, created in 2009, was the first cryptocurrency. Since then, thousands of alternative cryptocurrencies 
              have been created, each with various functions and specifications.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <ChevronRight className="mt-1 text-tykoo-blue flex-shrink-0" />
                <span className="text-gray-600"><strong>Decentralized:</strong> Not controlled by any central authority</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mt-1 text-tykoo-blue flex-shrink-0" />
                <span className="text-gray-600"><strong>Secure:</strong> Protected by advanced cryptography</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="mt-1 text-tykoo-blue flex-shrink-0" />
                <span className="text-gray-600"><strong>Transparent:</strong> All transactions are recorded on a public ledger</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
              alt="Cryptocurrency concept" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCrypto;
