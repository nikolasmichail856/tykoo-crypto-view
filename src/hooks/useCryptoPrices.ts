
import { useQuery } from "@tanstack/react-query";

export interface CryptoData {
  id: string;
  current_price: number;
}

// Fetch crypto prices from the CoinGecko API
export const fetchCryptoPrices = async () => {
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

export const useCryptoPrices = () => {
  const { 
    data: cryptoData,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 3
  });

  return {
    cryptoData,
    isLoading,
    refetchCrypto: refetch
  };
};
