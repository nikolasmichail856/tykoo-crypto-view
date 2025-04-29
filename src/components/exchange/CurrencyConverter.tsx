
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Exchange } from "lucide-react";
import { formatCurrency } from "@/utils/formatters";

// Mock exchange rates - in a real application, these would be fetched from an API
const exchangeRates = {
  USD: 1,
  BTC: 60000, // 1 BTC = $60,000
  ETH: 3000,  // 1 ETH = $3,000
  USDC: 1     // 1 USDC = $1
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("BTC");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currencyOptions = [
    { value: "USD", label: "USD (US Dollar)" },
    { value: "EUR", label: "EUR (Euro)" },
    { value: "GBP", label: "GBP (British Pound)" },
    { value: "BTC", label: "BTC (Bitcoin)" },
    { value: "ETH", label: "ETH (Ethereum)" },
    { value: "USDC", label: "USDC (USD Coin)" },
  ];

  const cryptoOptions = [
    { value: "BTC", label: "BTC (Bitcoin)" },
    { value: "ETH", label: "ETH (Ethereum)" },
    { value: "USDC", label: "USDC (USD Coin)" },
  ];

  const fiatOptions = [
    { value: "USD", label: "USD (US Dollar)" },
    { value: "EUR", label: "EUR (Euro)" },
    { value: "GBP", label: "GBP (British Pound)" },
  ];

  // Filter options based on current selection
  const getFromOptions = () => {
    return cryptoOptions.some(opt => opt.value === toCurrency) 
      ? [...fiatOptions, ...cryptoOptions.filter(opt => opt.value !== toCurrency)]
      : [...cryptoOptions, ...fiatOptions.filter(opt => opt.value !== toCurrency)];
  };

  const getToOptions = () => {
    return cryptoOptions.some(opt => opt.value === fromCurrency)
      ? [...fiatOptions, ...cryptoOptions.filter(opt => opt.value !== fromCurrency)]
      : [...cryptoOptions, ...fiatOptions.filter(opt => opt.value !== fromCurrency)];
  };

  // Convert currencies
  const convertCurrency = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const numericAmount = parseFloat(amount) || 0;
      
      // Convert to USD first as the base currency
      const amountInUsd = fromCurrency === "USD" 
        ? numericAmount 
        : numericAmount * (1 / exchangeRates[fromCurrency as keyof typeof exchangeRates]);
      
      // Then convert from USD to target currency
      const result = toCurrency === "USD"
        ? amountInUsd
        : amountInUsd / exchangeRates[toCurrency as keyof typeof exchangeRates];
      
      setConvertedAmount(result);
      setIsLoading(false);
    }, 500);
  };

  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Convert on mount and when currencies change
  useEffect(() => {
    if (amount) {
      convertCurrency();
    }
  }, []);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Currency Converter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount
              </label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full"
                placeholder="Enter amount"
                min="0"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="fromCurrency" className="block text-sm font-medium text-gray-700">
                From Currency
              </label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {getFromOptions().map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleSwapCurrencies}
              className="rounded-full"
            >
              <Exchange className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="toCurrency" className="block text-sm font-medium text-gray-700">
                To Currency
              </label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {getToOptions().map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Converted Amount
              </label>
              <div className="flex items-center">
                <div className="border rounded-md px-3 py-2 bg-gray-50 w-full">
                  {isLoading ? (
                    <div className="animate-pulse h-6 bg-gray-200 rounded"></div>
                  ) : (
                    <div className="font-semibold">
                      {toCurrency === "BTC" || toCurrency === "ETH" ? 
                        convertedAmount.toFixed(8) : 
                        formatCurrency(convertedAmount)}
                      &nbsp;{toCurrency}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

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
