
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import CurrencyInput from "./converter/CurrencyInput";
import SwapButton from "./converter/SwapButton";
import { RefreshCcw } from "lucide-react";
import { format } from "date-fns";
import { toast } from "@/components/ui/sonner";

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

  // Run conversion when any input values change
  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      convertCurrency();
    }
  }, [amount, fromCurrency, toCurrency]);

  const handleRefresh = () => {
    toast.info("Refreshing exchange rates and crypto prices...");
    refreshRates();
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
      <h2 className="text-center text-3xl font-bold mb-8 text-tykoo-darkBlue">
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
                onClick={handleRefresh} 
                className="h-8 w-8 border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue/10"
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
          className="bg-tykoo-blue hover:bg-tykoo-darkBlue text-white px-10 py-6 text-lg rounded-xl shadow-md w-full sm:w-auto transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Converting..." : "Trade now"}
        </Button>
      </div>

      <div className="text-sm text-gray-600 text-center mt-8">
        <p>Exchange rates from open.er-api.com. Cryptocurrency prices from CoinGecko API in real-time.</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
