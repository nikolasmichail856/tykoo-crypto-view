
import { CryptoData } from "@/hooks/useCryptoPrices";

export interface CurrencyOption {
  value: string;
  label: string;
}

export const cryptoOptions: CurrencyOption[] = [
  { value: "BTC", label: "BTC" },
  { value: "ETH", label: "ETH" },
  { value: "USDC", label: "USDC" },
];

export const fiatOptions: CurrencyOption[] = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
];

// Get options for the "From" currency dropdown based on the selected "To" currency
export const getFromOptions = (toCurrency: string) => {
  return cryptoOptions.some(opt => opt.value === toCurrency) 
    ? [...fiatOptions, ...cryptoOptions.filter(opt => opt.value !== toCurrency)]
    : [...cryptoOptions, ...fiatOptions.filter(opt => opt.value !== toCurrency)];
};

// Get options for the "To" currency dropdown based on the selected "From" currency
export const getToOptions = (fromCurrency: string) => {
  return cryptoOptions.some(opt => opt.value === fromCurrency)
    ? [...fiatOptions, ...cryptoOptions.filter(opt => opt.value !== fromCurrency)]
    : [...cryptoOptions, ...fiatOptions.filter(opt => opt.value !== fromCurrency)];
};

// Get real-time crypto rate from CoinGecko data
export const getCryptoRate = (currency: string, cryptoData: CryptoData[] | undefined) => {
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

// Convert currencies from one to another
export const convertCurrency = (
  amount: string,
  fromCurrency: string,
  toCurrency: string,
  exchangeRates: any,
  cryptoData: CryptoData[] | undefined
) => {
  if (!exchangeRates || !cryptoData) {
    return 0;
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
      amountInEur = numericAmount * getCryptoRate("USDC", cryptoData);
    } else {
      amountInEur = numericAmount * getCryptoRate(fromCurrency, cryptoData);
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
      result = (amountInEur as number) / getCryptoRate("USDC", cryptoData);
    } else {
      result = (amountInEur as number) / getCryptoRate(toCurrency, cryptoData);
    }
  }
  
  return result;
};
