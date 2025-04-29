
import React from "react";
import { Button } from "@/components/ui/button";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import CurrencyInput from "./converter/CurrencyInput";
import SwapButton from "./converter/SwapButton";
import { RefreshCcw } from "lucide-react";
import { format } from "date-fns";

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
    handleSwapCurrencies,
    lastUpdated,
    refreshRates
  } = useCurrencyConverter();

  return (
    <div className="w-full max-w-4xl mx-auto bg-lavender-100 rounded-2xl p-8 shadow-lg">
      <h2 className="text-center text-3xl font-bold mb-8 text-indigo-900">
        Convert {fromCurrency} to {toCurrency}
      </h2>
      
      <div className="flex flex-col md:flex-row items-stretch gap-3 mb-10">
        <div className="w-full md:w-5/12">
          <CurrencyInput
            value={amount}
            onChange={setAmount}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            options={getFromOptions()}
          />
        </div>
        
        <div className="flex justify-center items-center w-full md:w-2/12 my-2 md:my-0">
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
      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="text-sm text-gray-600">
          {lastUpdated ? (
            <div className="flex items-center gap-2">
              <span>Rates last updated: {format(lastUpdated, 'MMM d, yyyy HH:mm')}</span>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => refreshRates()} 
                className="h-8 w-8"
                disabled={isLoading}
              >
                <RefreshCcw className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <span>Loading exchange rates...</span>
          )}
        </div>
        
        <Button 
          onClick={convertCurrency} 
          className="bg-violet-600 hover:bg-violet-700 text-white px-10 py-6 text-lg rounded-xl shadow-md w-full sm:w-auto"
          disabled={isLoading}
        >
          {isLoading ? "Converting..." : "Trade now"}
        </Button>
      </div>

      <div className="text-sm text-gray-600 text-center mt-8">
        <p>Exchange rates are updated hourly from open.er-api.com. Crypto prices are simulated.</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
