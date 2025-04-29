
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bitcoin } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { formatCurrency, formatLargeNumber, formatDateForPeriod } from '@/utils/formatters';
import MarketTable from '@/components/markets/MarketTable';
import MarketControls from '@/components/markets/MarketControls';
import CoinChartCard from '@/components/markets/CoinChartCard';
import CoinStats from '@/components/markets/CoinStats';
import WhyTradeSection from '@/components/markets/WhyTradeSection';
import MarketSkeleton from '@/components/markets/MarketSkeleton';

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

const Markets = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("1"); // Add state for period selection
  const [activeSortField, setActiveSortField] = useState("market_cap");
  const [sortDirection, setSortDirection] = useState("desc");
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);

  // For demo purposes, we'll use mock data instead of an actual API call
  useEffect(() => {
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

    const mockData: CryptoData[] = [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        current_price: 64352.12,
        price_change_percentage_24h: 2.35,
        market_cap: 1258000000000,
        total_volume: 28500000000,
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
        description: 'Bitcoin is the first decentralized cryptocurrency. Bitcoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network.',
        high_24h: 65890.45,
        low_24h: 63120.78,
        circulating_supply: 19567893,
        price_history: generatePriceHistory(64000, 0.1)
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        current_price: 3456.78,
        price_change_percentage_24h: -1.23,
        market_cap: 415000000000,
        total_volume: 15200000000,
        image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
        description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform and it is the second largest cryptocurrency by market capitalization.',
        high_24h: 3560.92,
        low_24h: 3398.45,
        circulating_supply: 120250381,
        price_history: generatePriceHistory(3450, 0.15)
      },
      {
        id: 'usd-coin',
        name: 'USD Coin',
        symbol: 'USDC',
        current_price: 1.00,
        price_change_percentage_24h: 0.01,
        market_cap: 29000000000,
        total_volume: 1850000000,
        image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
        description: 'USD Coin is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every USDC is backed by a dollar in a bank account, providing stability in the volatile crypto market.',
        high_24h: 1.01,
        low_24h: 0.99,
        circulating_supply: 29000000000,
        price_history: generatePriceHistory(1, 0.005)
      }
    ];
    
    setTimeout(() => {
      setCryptoData(mockData);
      setSelectedCrypto(mockData[0]); // Default select Bitcoin
      setIsLoading(false);
    }, 500);
  }, []);

  const handleSort = (field: string) => {
    if (activeSortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setActiveSortField(field);
      setSortDirection("desc");
    }
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

  const getCryptoIcon = (symbol: string) => {
    switch(symbol.toLowerCase()) {
      case 'btc':
        return <Bitcoin className="h-6 w-6 text-amber-500" />;
      case 'eth':
        return <div className="h-6 w-6 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">E</div>;
      default:
        return <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">$</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-10 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-tykoo-darkBlue mb-2">Live Market Prices</h1>
          <p className="text-gray-600 mb-8">Explore real-time cryptocurrency prices for the assets supported on Tykoo.</p>
          
          {isLoading ? (
            <MarketSkeleton />
          ) : (
            <>
              <MarketControls 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
                selectedPeriod={selectedPeriod}
                setSelectedPeriod={setSelectedPeriod}
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                  {selectedCrypto && (
                    <CoinChartCard 
                      selectedCrypto={selectedCrypto} 
                      formatCurrency={formatCurrency}
                      period={selectedPeriod} // Pass period to CoinChartCard
                    />
                  )}
                </div>
                
                <div>
                  {selectedCrypto && (
                    <CoinStats 
                      selectedCrypto={selectedCrypto}
                      formatLargeNumber={formatLargeNumber}
                      formatCurrency={formatCurrency}
                    />
                  )}
                </div>
              </div>
              
              <MarketTable
                cryptoData={sortedData}
                activeSortField={activeSortField}
                sortDirection={sortDirection}
                handleSort={handleSort}
                formatCurrency={formatCurrency}
                formatLargeNumber={formatLargeNumber}
                handleCryptoSelect={handleCryptoSelect}
                selectedCrypto={selectedCrypto}
                getCryptoIcon={getCryptoIcon}
              />
              
              <WhyTradeSection />

              <div className="flex justify-center mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Markets;
