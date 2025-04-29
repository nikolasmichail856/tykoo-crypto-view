
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCurrencyConverter } from "@/hooks/useCurrencyConverter";
import CurrencyForm from "./converter/CurrencyForm";
import SwapButton from "./converter/SwapButton";
import CurrencyResult from "./converter/CurrencyResult";

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
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Currency Converter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <CurrencyForm
            amount={amount}
            setAmount={setAmount}
            fromCurrency={fromCurrency}
            setFromCurrency={setFromCurrency}
            fromOptions={getFromOptions()}
            handleSwapCurrencies={handleSwapCurrencies}
          />

          <SwapButton onSwap={handleSwapCurrencies} />

          <CurrencyResult
            toCurrency={toCurrency}
            setToCurrency={setToCurrency}
            toOptions={getToOptions()}
            convertedAmount={convertedAmount}
            isLoading={isLoading}
          />

          <Button 
            onClick={convertCurrency} 
            className="w-full bg-tykoo-blue hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Converting..." : "Convert"}
            {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>

          <div className="text-sm text-gray-500 text-center mt-4">
            <p>Exchange rates are for demonstration purposes only.</p>
            <p>Real-world rates may vary. Updated hourly.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrencyConverter;
