
import { useState, useEffect } from "react";

// Mock exchange rates - in a real application, these would be fetched from an API
const exchangeRates = {
  USD: 1,
  EUR: 0.88,   // 1 USD = 0.88 EUR or 1 EUR = 1.14 USD
  BTC: 60000,  // 1 BTC = $60,000
  ETH: 3000,   // 1 ETH = $3,000
  USDC: 1      // 1 USDC = $1
};

export interface CurrencyOption {
  value: string;
  label: string;
}

export const useCurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USDC");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cryptoOptions: CurrencyOption[] = [
    { value: "BTC", label: "BTC" },
    { value: "ETH", label: "ETH" },
    { value: "USDC", label: "USDC" },
  ];

  const fiatOptions: CurrencyOption[] = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
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
        : fromCurrency === "EUR"
          ? numericAmount / exchangeRates.EUR
          : numericAmount * (1 / exchangeRates[fromCurrency as keyof typeof exchangeRates]);
      
      // Then convert from USD to target currency
      let result = 0;
      if (toCurrency === "USD") {
        result = amountInUsd;
      } else if (toCurrency === "EUR") {
        result = amountInUsd * exchangeRates.EUR;
      } else {
        result = amountInUsd / exchangeRates[toCurrency as keyof typeof exchangeRates];
      }
      
      setConvertedAmount(result);
      setIsLoading(false);
    }, 500);
  };

  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount.toString());
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
