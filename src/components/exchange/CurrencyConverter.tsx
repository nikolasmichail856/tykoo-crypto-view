
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import CurrencyInput from "./converter/CurrencyInput";
import SwapButton from "./converter/SwapButton";

const CurrencyConverter = () => {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    isLoading,
    getFromOptions,
    getToOptions,
    convertCurrency,
    handleSwapCurrencies
  } = useCurrencyConverter();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-8 text-indigo-900">
        Convert {fromCurrency} to {toCurrency}
      </h2>
      
      <div className="flex flex-col md:flex-row items-center gap-2 mb-8">
        <div className="w-full md:w-5/12">
          <CurrencyInput
            value={amount}
            onChange={setAmount}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            options={getFromOptions()}
          />
        </div>
        
        <div className="flex justify-center items-center w-full md:w-2/12">
          <SwapButton onSwap={handleSwapCurrencies} />
        </div>
        
        <div className="w-full md:w-5/12">
          <CurrencyInput
            value={convertedAmount.toString()}
            onChange={() => {}}
            currency={toCurrency}
            setCurrency={setToCurrency}
            options={getToOptions()}
            readOnly={true}
            isLoading={isLoading}
          />
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button 
          onClick={convertCurrency} 
          className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg rounded-xl"
          disabled={isLoading}
        >
          {isLoading ? "Converting..." : "Trade now"}
        </Button>
      </div>

      <div className="text-sm text-gray-500 text-center mt-8">
        <p>Exchange rates are updated hourly. Real-world rates may vary.</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
