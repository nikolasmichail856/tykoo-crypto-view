
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyTradeSection = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-tykoo-darkBlue mb-4">Why Trade on Tykoo?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Simple On/Off Ramps</h3>
            <p className="text-gray-600">Easily deposit and withdraw your funds with our straightforward fiat gateways.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Focused Selection</h3>
            <p className="text-gray-600">We offer only the most important cryptocurrencies: Bitcoin, Ethereum, and USDC.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
            <p className="text-gray-600">Industry-leading security practices to keep your digital assets safe.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WhyTradeSection;
