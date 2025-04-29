
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
    const response = await fetch('https://open.er-api.com/v6/latest/EUR');
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
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin,ethereum,usd-coin&order=market_cap_desc&per_page=100&page=1'
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
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
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
    { value: "USD", label: "USD" },
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
        return btcData ? btcData.current_price : 55000; // Fallback if data not found (EUR value)
      }
      case "ETH": {
        const ethData = cryptoData.find((crypto: CryptoData) => crypto.id === 'ethereum');
        return ethData ? ethData.current_price : 2800; // Fallback if data not found (EUR value)
      }
      case "USDC": {
        const usdcData = cryptoData.find((crypto: CryptoData) => crypto.id === 'usd-coin');
        return usdcData ? usdcData.current_price : 0.92; // Fallback if data not found (EUR value)
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
    
    // Step 1: Convert from source currency to EUR as the common denominator
    let amountInEur;
    
    if (fromCurrency === "EUR") {
      amountInEur = numericAmount;
    } else if (fromCurrency === "USD") {
      // For USD to EUR conversion
      amountInEur = numericAmount / exchangeRates.USD;
    } else if (cryptoOptions.some(opt => opt.value === fromCurrency)) {
      // For crypto to EUR conversion
      if (fromCurrency === "USDC") {
        // USDC price is already in EUR from our API call
        amountInEur = numericAmount * getCryptoRate("USDC");
      } else {
        amountInEur = numericAmount * getCryptoRate(fromCurrency);
      }
    }
    
    // Step 2: Convert from EUR to target currency
    let result = 0;
    
    if (toCurrency === "EUR") {
      result = amountInEur as number;
    } else if (toCurrency === "USD") {
      // For EUR to USD conversion
      result = (amountInEur as number) * exchangeRates.USD;
    } else if (cryptoOptions.some(opt => opt.value === toCurrency)) {
      // For EUR to crypto conversion
      if (toCurrency === "USDC") {
        // USDC price is already in EUR from our API call
        result = (amountInEur as number) / getCryptoRate("USDC");
      } else {
        result = (amountInEur as number) / getCryptoRate(toCurrency);
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
