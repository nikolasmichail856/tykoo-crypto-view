
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurrencyConverter from "@/components/exchange/CurrencyConverter";
import ExchangeHero from "@/components/exchange/ExchangeHero";
import SupportedCurrencies from "@/components/exchange/SupportedCurrencies";
import ExchangeBenefits from "@/components/exchange/ExchangeBenefits";

const Exchange = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <ExchangeHero />
        
        <div className="bg-tykoo-lightGray py-20">
          <div className="container mx-auto px-4">
            <CurrencyConverter />
            <div className="text-sm text-[#f7f8fa] text-center mt-4">
              Exchange rates from open.er-api.com. Cryptocurrency prices from CoinGecko API in real-time.
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="mt-16">
            <SupportedCurrencies />
          </div>
          
          <div className="mt-16">
            <ExchangeBenefits />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Exchange;
