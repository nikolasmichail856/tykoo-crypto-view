
import { useState, useEffect } from 'react';
import { toast } from "@/components/ui/sonner";
import { CryptoData } from '@/types/crypto';
import { generateMockData } from '@/utils/mockDataGenerator';

interface UseMarketDataReturn {
  cryptoData: CryptoData[];
  isLoading: boolean;
  selectedCrypto: CryptoData | null;
  setSelectedCrypto: (crypto: CryptoData | null) => void;
  activeSortField: string;
  setActiveSortField: (field: string) => void;
  sortDirection: string;
  setSortDirection: (direction: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
  refreshData: () => Promise<void>;
  lastUpdated: Date | null;
}

export const useMarketData = (): UseMarketDataReturn => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("1");
  const [activeSortField, setActiveSortField] = useState("market_cap");
  const [sortDirection, setSortDirection] = useState("desc");
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Function to fetch cryptocurrency data
  const fetchCryptoData = async () => {
    setIsLoading(true);
    
    try {
      // Define the supported coins
      const coinIds = 'bitcoin,ethereum,usd-coin';
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${coinIds}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch cryptocurrency data');
      }
      
      const coinsData = await response.json();
      
      // Transform the data to match our CryptoData type
      const formattedData: CryptoData[] = coinsData.map((coin: any) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        current_price: coin.current_price,
        price_change_percentage_24h: coin.price_change_percentage_24h || 0,
        market_cap: coin.market_cap,
        total_volume: coin.total_volume,
        image: coin.image,
        description: coin.id === 'bitcoin' ? 'Bitcoin is the first decentralized cryptocurrency. Bitcoin uses peer-to-peer technology to operate with no central authority.' :
                     coin.id === 'ethereum' ? 'Ethereum is a decentralized, open-source blockchain with smart contract functionality.' :
                     coin.id === 'usd-coin' ? 'USD Coin is a stablecoin that is pegged to the US dollar on a 1:1 basis.' : '',
        high_24h: coin.high_24h || 0,
        low_24h: coin.low_24h || 0,
        circulating_supply: coin.circulating_supply || 0,
        price_history: [] // We'll handle this separately as needed
      }));
      
      setCryptoData(formattedData);
      
      // Set the first coin as selected by default
      if (formattedData.length > 0 && !selectedCrypto) {
        setSelectedCrypto(formattedData[0]);
      } else if (selectedCrypto) {
        // Update the selected crypto with fresh data
        const updatedSelectedCrypto = formattedData.find(crypto => crypto.id === selectedCrypto.id);
        if (updatedSelectedCrypto) {
          setSelectedCrypto(updatedSelectedCrypto);
        }
      }
      
      setLastUpdated(new Date());
      toast.success("Market data updated successfully");
      
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error);
      toast.error("Couldn't fetch real-time market data. Using cached data instead.");
      
      // If fetch fails, use mock data as fallback
      const mockData = generateMockData();
      setCryptoData(mockData);
      
      if (!selectedCrypto && mockData.length > 0) {
        setSelectedCrypto(mockData[0]);
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  // Initial fetch on component mount
  useEffect(() => {
    fetchCryptoData();
    
    // Set up interval for periodic refresh (every 60 seconds)
    const refreshInterval = setInterval(() => {
      fetchCryptoData();
    }, 60000);
    
    return () => clearInterval(refreshInterval);
  }, []);

  return {
    cryptoData,
    isLoading,
    selectedCrypto,
    setSelectedCrypto,
    activeSortField,
    setActiveSortField,
    sortDirection,
    setSortDirection,
    searchTerm,
    setSearchTerm,
    selectedPeriod,
    setSelectedPeriod,
    refreshData: fetchCryptoData,
    lastUpdated
  };
};
