
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bitcoin, DollarSign } from "lucide-react";

const SupportedCurrencies = () => {
  const currencies = [
    {
      id: "btc",
      name: "Bitcoin (BTC)",
      description: "The original cryptocurrency and the most valuable digital asset in the world.",
      icon: <Bitcoin className="h-8 w-8 text-[#F7931A]" />,
    },
    {
      id: "eth",
      name: "Ethereum (ETH)",
      description: "The world's programmable blockchain and second-largest cryptocurrency by market cap.",
      icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5L18 12L12 15.75L6 12L12 1.5Z" fill="#627EEA" />
        <path d="M12 22.5L18 13.5L12 17.25L6 13.5L12 22.5Z" fill="#627EEA" />
        <path d="M12 15.75V1.5L18 12L12 15.75Z" fill="#627EEA" fillOpacity="0.8" />
        <path d="M12 17.25V22.5L18 13.5L12 17.25Z" fill="#627EEA" fillOpacity="0.8" />
        <path d="M12 1.5V15.75L6 12L12 1.5Z" fill="#627EEA" fillOpacity="0.6" />
        <path d="M12 17.25V22.5L6 13.5L12 17.25Z" fill="#627EEA" fillOpacity="0.6" />
      </svg>,
    },
    {
      id: "usdc",
      name: "USD Coin (USDC)",
      description: "A fully-reserved stablecoin that maintains a 1:1 peg with the US dollar.",
      icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10.5" fill="#2775CA" />
        <path d="M15.09 13.6598C15.09 12.1198 14.18 11.5498 12.36 11.2698C11.14 11.0698 10.89 10.7898 10.89 10.3198C10.89 9.84976 11.29 9.53976 12.08 9.53976C12.82 9.53976 13.22 9.78976 13.44 10.3898C13.47 10.4698 13.55 10.5198 13.63 10.5198H14.35C14.46 10.5198 14.54 10.4398 14.54 10.3298C14.34 9.32976 13.55 8.66976 12.45 8.54976V7.52976C12.45 7.41976 12.36 7.32976 12.24 7.32976H11.75C11.64 7.32976 11.55 7.41976 11.55 7.52976V8.53976C10.34 8.65976 9.45 9.40976 9.45 10.3398C9.45 11.8198 10.35 12.4098 12.17 12.6898C13.31 12.9098 13.65 13.1598 13.65 13.6798C13.65 14.2298 13.15 14.5998 12.34 14.5998C11.31 14.5998 10.91 14.1798 10.75 13.5598C10.73 13.4698 10.65 13.4198 10.56 13.4198H9.83C9.72 13.4198 9.64 13.4998 9.64 13.6098C9.82 14.7398 10.56 15.4198 11.56 15.5898V16.6098C11.56 16.7198 11.65 16.8098 11.77 16.8098H12.26C12.37 16.8098 12.46 16.7198 12.46 16.6098V15.5898C13.67 15.4498 15.09 14.7398 15.09 13.6598Z" fill="white" />
      </svg>,
    },
    {
      id: "fiat",
      name: "Fiat Currencies",
      description: "Fully supported on/off ramps for USD, EUR, and GBP.",
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">Supported Currencies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currencies.map((currency) => (
          <Card key={currency.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                {currency.icon}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{currency.name}</h3>
              <p className="text-gray-600 text-center text-sm">{currency.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SupportedCurrencies;
