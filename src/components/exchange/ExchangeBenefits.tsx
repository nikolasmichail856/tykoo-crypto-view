
import React from "react";
import { Shield, Wallet, TrendingUp, ArrowLeftRight } from "lucide-react";

const ExchangeBenefits = () => {
  const benefits = [
    {
      id: "security",
      title: "Bank-Level Security",
      description: "Multi-signature wallets, cold storage, and insurance for your digital assets.",
      icon: <Shield className="h-10 w-10 text-tykoo-blue" />,
    },
    {
      id: "fees",
      title: "Low Transaction Fees",
      description: "Competitive fees starting from just 0.1% for high-volume traders.",
      icon: <TrendingUp className="h-10 w-10 text-tykoo-blue" />,
    },
    {
      id: "onramp",
      title: "Easy On/Off Ramps",
      description: "Deposit and withdraw using bank transfers, credit/debit cards, and more.",
      icon: <Wallet className="h-10 w-10 text-tykoo-blue" />,
    },
    {
      id: "trading",
      title: "Instant Exchanges",
      description: "Convert between currencies quickly with our optimized trading engine.",
      icon: <ArrowLeftRight className="h-10 w-10 text-tykoo-blue" />,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center">Why Choose Our Exchange</h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Experience the best in cryptocurrency trading with our secure, fast, and user-friendly platform.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="text-center">
            <div className="bg-gray-50 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-tykoo-darkBlue text-white rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Ready to start trading?</h3>
          <p className="mb-6">Join thousands of users who trust our platform for their cryptocurrency needs.</p>
          <button className="bg-tykoo-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Create a Free Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeBenefits;
