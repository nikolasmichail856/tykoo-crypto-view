
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/sonner";

// Fetch exchange rates from the API
export const fetchExchangeRates = async () => {
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

export const useExchangeRates = () => {
  const { 
    data: exchangeRates,
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['exchangeRates'],
    queryFn: fetchExchangeRates,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 3
  });

  return {
    exchangeRates,
    isLoading,
    refetchRates: refetch
  };
};
