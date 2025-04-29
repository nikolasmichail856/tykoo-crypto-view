
import { useState, useEffect } from "react";

// Mock exchange rates - in a real application, these would be fetched from an API
const exchangeRates = {
  USD: 1,
  BTC: 60000, // 1 BTC = $60,000
  ETH: 3000,  // 1 ETH = $3,000
  USDC: 1     // 1 USDC = $1
};

export interface CurrencyOption {
  value: string;
  label: string;
}

export const useCurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("BTC");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cryptoOptions: CurrencyOption[] = [
    { value: "BTC", label: "BTC (Bitcoin)" },
    { value: "ETH", label: "ETH (Ethereum)" },
    { value: "USDC", label: "USDC (USD Coin)" },
  ];

  const fiatOptions: CurrencyOption[] = [
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

  // Initial conversion on mount
  useEffect(() => {
    if (amount) {
      convertCurrency();
    }
  }, []);

  return {
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
  };
};
