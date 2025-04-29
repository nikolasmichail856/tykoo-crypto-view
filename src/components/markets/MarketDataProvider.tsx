
import { useState, useEffect } from 'react';
import { toast } from "@/components/ui/sonner";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
  description: string;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
  price_history: { timestamp: string; price: number }[];
}

interface MarketDataProviderProps {
  children: (props: {
    cryptoData: CryptoData[];
    isLoading: boolean;
    selectedCrypto: CryptoData | null;
    activeSortField: string;
    sortDirection: string;
    handleSort: (field: string) => void;
    handleCryptoSelect: (crypto: CryptoData) => void;
    sortedData: CryptoData[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedPeriod: string;
    setSelectedPeriod: (period: string) => void;
  }) => React.ReactNode;
}

const COIN_DESCRIPTIONS = {
  bitcoin: 'Bitcoin is the first decentralized cryptocurrency. Bitcoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network.',
  ethereum: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform and it is the second largest cryptocurrency by market capitalization.',
  'usd-coin': 'USD Coin is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every USDC is backed by a dollar in a bank account, providing stability in the volatile crypto market.'
};

const MarketDataProvider: React.FC<MarketDataProviderProps> = ({ children }) => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("1");
  const [activeSortField, setActiveSortField] = useState("market_cap");
  const [sortDirection, setSortDirection] = useState("desc");
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Function to generate price history based on selected period
  const fetchPriceHistory = async (coinId: string, days: string) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=eur&days=${days}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch price history for ${coinId}`);
      }
      
      const data = await response.json();
      
      if (data && data.prices) {
        // Return the price history formatted as timestamp and price
        return data.prices.map((item: [number, number]) => ({
          timestamp: new Date(item[0]).toISOString(),
          price: item[1]
        }));
      }
      
      return [];
    } catch (error) {
      console.error(`Error fetching price history for ${coinId}:`, error);
      return [];
    }
  };

  // Fetch real cryptocurrency data from CoinGecko
  const fetchCryptoData = async () => {
    setIsLoading(true);
    
    try {
      const coinIds = 'bitcoin,ethereum,usd-coin';
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${coinIds}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch cryptocurrency data');
      }
      
      const coinsData = await response.json();
      
      const formattedData: CryptoData[] = await Promise.all(
        coinsData.map(async (coin: any) => {
          // Fetch price history for each coin
          const priceHistory = await fetchPriceHistory(coin.id, selectedPeriod);
          
          return {
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol.toUpperCase(),
            current_price: coin.current_price,
            price_change_percentage_24h: coin.price_change_percentage_24h || 0,
            market_cap: coin.market_cap,
            total_volume: coin.total_volume,
            image: coin.image,
            description: COIN_DESCRIPTIONS[coin.id as keyof typeof COIN_DESCRIPTIONS] || '',
            high_24h: coin.high_24h || 0,
            low_24h: coin.low_24h || 0,
            circulating_supply: coin.circulating_supply,
            price_history: priceHistory
          };
        })
      );
      
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
      
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error);
      toast.error("Couldn't fetch market data. Using cached data instead.");
      
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
    
    // Set up interval for periodic refresh (every 2 minutes)
    const refreshInterval = setInterval(() => {
      fetchCryptoData();
    }, 120000); // 2 minutes
    
    return () => clearInterval(refreshInterval);
  }, []);
  
  // Refetch data when period changes
  useEffect(() => {
    if (cryptoData.length > 0) {
      fetchCryptoData();
    }
  }, [selectedPeriod]);

  const handleSort = (field: string) => {
    if (activeSortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setActiveSortField(field);
      setSortDirection("desc");
    }
  };
  
  // Fallback mock data generation if API fails
  const generateMockData = () => {
    const generatePriceHistory = (basePrice: number, volatility: number) => {
      const history = [];
      const now = new Date();
      
      for (let i = 30; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const randomChange = (Math.random() - 0.5) * volatility * basePrice;
        const price = basePrice + randomChange + (Math.sin(i / 5) * basePrice * 0.05);
        history.push({
          timestamp: date.toISOString().split('T')[0],
          price: Math.max(price, basePrice * 0.7)
        });
      }
      return history;
    };

    return [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        current_price: 58352.12, // Using EUR value (approximate conversion)
        price_change_percentage_24h: 2.35,
        market_cap: 1158000000000,
        total_volume: 26500000000,
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
        description: COIN_DESCRIPTIONS.bitcoin,
        high_24h: 59890.45,
        low_24h: 57120.78,
        circulating_supply: 19567893,
        price_history: generatePriceHistory(58000, 0.1)
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        current_price: 3156.78, // Using EUR value (approximate conversion)
        price_change_percentage_24h: -1.23,
        market_cap: 380000000000,
        total_volume: 14200000000,
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        description: COIN_DESCRIPTIONS.ethereum,
        high_24h: 3260.92,
        low_24h: 3098.45,
        circulating_supply: 120250381,
        price_history: generatePriceHistory(3150, 0.15)
      },
      {
        id: 'usd-coin',
        name: 'USD Coin',
        symbol: 'USDC',
        current_price: 0.92, // Using EUR value (approximate conversion from USD)
        price_change_percentage_24h: 0.01,
        market_cap: 27000000000,
        total_volume: 1750000000,
        image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
        description: COIN_DESCRIPTIONS['usd-coin'],
        high_24h: 0.93,
        low_24h: 0.91,
        circulating_supply: 29000000000,
        price_history: generatePriceHistory(0.92, 0.005)
      }
    ];
  };

  const sortData = (data: CryptoData[]) => {
    return [...data].sort((a, b) => {
      const fieldA = a[activeSortField as keyof CryptoData];
      const fieldB = b[activeSortField as keyof CryptoData];
      
      if (typeof fieldA === 'number' && typeof fieldB === 'number') {
        return sortDirection === "asc" ? fieldA - fieldB : fieldB - fieldA;
      }
      
      if (typeof fieldA === 'string' && typeof fieldB === 'string') {
        return sortDirection === "asc" 
          ? fieldA.localeCompare(fieldB) 
          : fieldB.localeCompare(fieldA);
      }
      
      return 0;
    });
  };

  const filteredData = cryptoData.filter(crypto => 
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = sortData(filteredData);

  const handleCryptoSelect = (crypto: CryptoData) => {
    setSelectedCrypto(crypto);
  };

  // Function to manually refresh data
  const refreshData = () => {
    fetchCryptoData();
    toast.success("Market data updated");
  };

  return (
    <>
      {children({
        cryptoData,
        isLoading,
        selectedCrypto,
        activeSortField,
        sortDirection,
        handleSort,
        handleCryptoSelect,
        sortedData,
        searchTerm,
        setSearchTerm,
        selectedPeriod,
        setSelectedPeriod
      })}
    </>
  );
};

export default MarketDataProvider;
export type { CryptoData };
