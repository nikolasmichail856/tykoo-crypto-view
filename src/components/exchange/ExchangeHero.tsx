
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const ExchangeHero = () => {
  return (
    <div className="bg-tykoo-darkBlue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fast and Secure Cryptocurrency Exchange
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Trade Bitcoin, Ethereum, and USDC with low fees and top security. Seamlessly convert between fiat and crypto.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-tykoo-blue hover:bg-blue-600">
              Start Trading Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <TrendingUp className="mr-2" />
              View Market Trends
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeHero;
