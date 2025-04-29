
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/sonner";

export interface CurrencyOption {
  value: string;
  label: string;
}

const fetchExchangeRates = async () => {
  try {
    // Using the free currency API from ExchangeRate-API
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};

export const useCurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USDC");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  // Query to fetch exchange rates
  const { data: exchangeRates, isLoading, error, refetch } = useQuery({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 3
  });

  const cryptoOptions: CurrencyOption[] = [
    { value: "BTC", label: "BTC" },
    { value: "ETH", label: "ETH" },
    { value: "USDC", label: "USDC" },
  ];

  const fiatOptions: CurrencyOption[] = [
    { value: "EUR", label: "EUR" },
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

  // This function will get updated exchange rates for crypto
  const getCryptoRate = (currency: string) => {
    // In a real application, you would fetch these from a crypto API
    // These are placeholder rates based on USD
    switch(currency) {
      case "BTC": return 35000;
      case "ETH": return 2300;
      case "USDC": return 1;
      default: return 1;
    }
  };

  // Convert currencies using the fetched rates
  const convertCurrency = () => {
    if (!exchangeRates) {
      toast.error("Exchange rates not available yet");
      return;
    }

    const numericAmount = parseFloat(amount) || 0;
    
    // Convert to USD first as the base currency
    let amountInUsd;
    if (fromCurrency === "USD") {
      amountInUsd = numericAmount;
    } else if (fromCurrency === "EUR") {
      amountInUsd = numericAmount / exchangeRates.EUR;
    } else {
      // For crypto currencies
      amountInUsd = numericAmount * getCryptoRate(fromCurrency);
    }
    
    // Then convert from USD to target currency
    let result = 0;
    if (toCurrency === "USD") {
      result = amountInUsd;
    } else if (toCurrency === "EUR") {
      result = amountInUsd * exchangeRates.EUR;
    } else {
      // For crypto currencies
      result = amountInUsd / getCryptoRate(toCurrency);
    }
    
    setConvertedAmount(result);
  };

  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount.toString());
  };

  // Initial conversion on mount
  useEffect(() => {
    if (exchangeRates && amount) {
      convertCurrency();
    }
  }, [exchangeRates]);

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
    handleSwapCurrencies,
    lastUpdated: exchangeRates ? new Date() : null,
    refreshRates: refetch
  };
};
