
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/sonner";
import { useExchangeRates } from "./useExchangeRates";
import { useCryptoPrices } from "./useCryptoPrices";
import { 
  convertCurrency, 
  getFromOptions, 
  getToOptions, 
  CurrencyOption 
} from "@/utils/currencyUtils";

export type { CurrencyOption };

export const useCurrencyConverter = () => {
  // State for the converter
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USDC");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  // Use our custom hooks to fetch data
  const { exchangeRates, isLoading: isLoadingRates, refetchRates } = useExchangeRates();
  const { cryptoData, isLoading: isLoadingCrypto, refetchCrypto } = useCryptoPrices();

  const isLoading = isLoadingRates || isLoadingCrypto;

  // Function to perform the conversion
  const performConversion = () => {
    if (!exchangeRates || !cryptoData) {
      toast.error("Exchange rates not available yet");
      return;
    }

    const result = convertCurrency(amount, fromCurrency, toCurrency, exchangeRates, cryptoData);
    setConvertedAmount(result);
  };

  // Swap currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount.toString());
  };

  // Function to refresh rates
  const refreshRates = () => {
    refetchRates();
    refetchCrypto();
  };

  // Initial conversion on mount or when data changes
  useEffect(() => {
    if (exchangeRates && cryptoData && amount) {
      performConversion();
    }
  }, [exchangeRates, cryptoData]);

  return {
    // State
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    isLoading,
    
    // Functions
    getFromOptions: () => getFromOptions(toCurrency),
    getToOptions: () => getToOptions(fromCurrency),
    convertCurrency: performConversion,
    handleSwapCurrencies,
    lastUpdated: exchangeRates && cryptoData ? new Date() : null,
    refreshRates
  };
};
