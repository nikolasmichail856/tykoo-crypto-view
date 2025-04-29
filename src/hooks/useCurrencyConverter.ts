
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/sonner";

export interface CurrencyOption {
  value: string;
  label: string;
}

interface CryptoData {
  id: string;
  current_price: number;
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

const fetchCryptoPrices = async () => {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,usd-coin&order=market_cap_desc&per_page=100&page=1'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch crypto prices');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};

export const useCurrencyConverter = () => {
  const [amount, setAmount] = useState<string>("1");
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USDC");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  // Query to fetch exchange rates
  const { data: exchangeRates, isLoading: isLoadingRates, refetch: refetchRates } = useQuery({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 3
  });

  // Query to fetch crypto prices
  const { data: cryptoData, isLoading: isLoadingCrypto, refetch: refetchCrypto } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 3
  });

  const isLoading = isLoadingRates || isLoadingCrypto;

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

  // Get real-time crypto rate from CoinGecko data
  const getCryptoRate = (currency: string) => {
    if (!cryptoData) return 1;

    switch(currency) {
      case "BTC": {
        const btcData = cryptoData.find((crypto: CryptoData) => crypto.id === 'bitcoin');
        return btcData ? btcData.current_price : 60000; // Fallback if data not found
      }
      case "ETH": {
        const ethData = cryptoData.find((crypto: CryptoData) => crypto.id === 'ethereum');
        return ethData ? ethData.current_price : 3000; // Fallback if data not found
      }
      case "USDC": {
        const usdcData = cryptoData.find((crypto: CryptoData) => crypto.id === 'usd-coin');
        return usdcData ? usdcData.current_price : 1; // Fallback if data not found
      }
      default: return 1;
    }
  };

  // Convert currencies using the fetched rates
  const convertCurrency = () => {
    if (!exchangeRates || !cryptoData) {
      toast.error("Exchange rates not available yet");
      return;
    }

    const numericAmount = parseFloat(amount) || 0;
    
    // Step 1: Convert from source currency to USD as the common denominator
    let amountInUsd;
    
    if (fromCurrency === "USD") {
      amountInUsd = numericAmount;
    } else if (fromCurrency === "EUR") {
      // For EUR to USD, we divide by the EUR rate because rates are expressed as USD to X
      amountInUsd = numericAmount / exchangeRates.EUR;
    } else if (cryptoOptions.some(opt => opt.value === fromCurrency)) {
      // For crypto to USD conversion
      if (fromCurrency === "USDC") {
        amountInUsd = numericAmount; // USDC is 1:1 with USD
      } else {
        amountInUsd = numericAmount * getCryptoRate(fromCurrency);
      }
    }
    
    // Step 2: Convert from USD to target currency
    let result = 0;
    
    if (toCurrency === "USD") {
      result = amountInUsd as number;
    } else if (toCurrency === "EUR") {
      // For USD to EUR, we multiply by the EUR rate
      result = (amountInUsd as number) * exchangeRates.EUR;
    } else if (cryptoOptions.some(opt => opt.value === toCurrency)) {
      // For USD to crypto conversion
      if (toCurrency === "USDC") {
        result = amountInUsd as number; // USDC is 1:1 with USD
      } else {
        result = (amountInUsd as number) / getCryptoRate(toCurrency);
      }
    }
    
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

  // Initial conversion on mount
  useEffect(() => {
    if (exchangeRates && cryptoData && amount) {
      convertCurrency();
    }
  }, [exchangeRates, cryptoData]);

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
    lastUpdated: exchangeRates && cryptoData ? new Date() : null,
    refreshRates
  };
};
