
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, TrendingDown } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
}

const Markets = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSortField, setActiveSortField] = useState("market_cap");
  const [sortDirection, setSortDirection] = useState("desc");

  // For demo purposes, we'll use mock data instead of an actual API call
  useEffect(() => {
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
      },
      {
        id: 'solana',
        name: 'Solana',
        symbol: 'SOL',
        current_price: 124.56,
        price_change_percentage_24h: 5.67,
        market_cap: 53000000000,
        total_volume: 2100000000,
        image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
      },
      {
        id: 'cardano',
        name: 'Cardano',
        symbol: 'ADA',
        current_price: 0.45,
        price_change_percentage_24h: -0.78,
        market_cap: 16500000000,
        total_volume: 342000000,
        image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
      },
      {
        id: 'polkadot',
        name: 'Polkadot',
        symbol: 'DOT',
        current_price: 6.23,
        price_change_percentage_24h: 3.45,
        market_cap: 8400000000,
        total_volume: 245000000,
        image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png',
      },
      {
        id: 'ripple',
        name: 'XRP',
        symbol: 'XRP',
        current_price: 0.56,
        price_change_percentage_24h: -2.12,
        market_cap: 31000000000,
        total_volume: 987000000,
        image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
      },
      {
        id: 'dogecoin',
        name: 'Dogecoin',
        symbol: 'DOGE',
        current_price: 0.12,
        price_change_percentage_24h: 1.56,
        market_cap: 17800000000,
        total_volume: 568000000,
        image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
      },
      {
        id: 'chainlink',
        name: 'Chainlink',
        symbol: 'LINK',
        current_price: 13.87,
        price_change_percentage_24h: 4.23,
        market_cap: 8100000000,
        total_volume: 367000000,
        image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png',
      },
    ];
    
    setTimeout(() => {
      setCryptoData(mockData);
      setIsLoading(false);
    }, 500);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value < 1 ? 4 : 2,
      maximumFractionDigits: value < 1 ? 4 : 2,
    }).format(value);
  };
  
  const formatLargeNumber = (value: number) => {
    if (value >= 1000000000000) {
      return `$${(value / 1000000000000).toFixed(2)}T`;
    }
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(2)}B`;
    }
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    }
    return formatCurrency(value);
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-10 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-tykoo-darkBlue mb-2">Live Market Prices</h1>
          <p className="text-gray-600 mb-8">Real-time market data on top cryptocurrencies.</p>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search coins..." 
              className="pl-10 py-6"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            {isLoading ? (
              <div className="p-8 text-center">
                <div className="animate-pulse">
                  <div className="h-10 bg-gray-200 rounded mb-4"></div>
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-200 rounded mb-3"></div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[80px]">#</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead 
                        className="cursor-pointer hover:text-tykoo-blue"
                        onClick={() => handleSort("current_price")}
                      >
                        Price 
                        {activeSortField === "current_price" && (
                          sortDirection === "asc" ? " ↑" : " ↓"
                        )}
                      </TableHead>
                      <TableHead 
                        className="cursor-pointer hover:text-tykoo-blue"
                        onClick={() => handleSort("price_change_percentage_24h")}
                      >
                        24h Change
                        {activeSortField === "price_change_percentage_24h" && (
                          sortDirection === "asc" ? " ↑" : " ↓"
                        )}
                      </TableHead>
                      <TableHead 
                        className="cursor-pointer hover:text-tykoo-blue"
                        onClick={() => handleSort("market_cap")}
                      >
                        Market Cap
                        {activeSortField === "market_cap" && (
                          sortDirection === "asc" ? " ↑" : " ↓"
                        )}
                      </TableHead>
                      <TableHead 
                        className="cursor-pointer hover:text-tykoo-blue"
                        onClick={() => handleSort("total_volume")}
                      >
                        Volume (24h)
                        {activeSortField === "total_volume" && (
                          sortDirection === "asc" ? " ↑" : " ↓"
                        )}
                      </TableHead>
                      <TableHead className="text-right">Trade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedData.length > 0 ? (
                      sortedData.map((crypto, index) => (
                        <TableRow key={crypto.id}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <img 
                                src={crypto.image} 
                                alt={crypto.name} 
                                className="w-6 h-6 mr-2" 
                              />
                              <span className="font-medium">{crypto.name}</span>
                              <span className="text-gray-500 ml-2">{crypto.symbol.toUpperCase()}</span>
                            </div>
                          </TableCell>
                          <TableCell>{formatCurrency(crypto.current_price)}</TableCell>
                          <TableCell>
                            <div className={`flex items-center ${crypto.price_change_percentage_24h >= 0 ? 'text-tykoo-green' : 'text-tykoo-red'}`}>
                              {crypto.price_change_percentage_24h >= 0 ? (
                                <TrendingUp className="h-4 w-4 mr-1" />
                              ) : (
                                <TrendingDown className="h-4 w-4 mr-1" />
                              )}
                              <span>{crypto.price_change_percentage_24h.toFixed(2)}%</span>
                            </div>
                          </TableCell>
                          <TableCell>{formatLargeNumber(crypto.market_cap)}</TableCell>
                          <TableCell>{formatLargeNumber(crypto.total_volume)}</TableCell>
                          <TableCell className="text-right">
                            <Button size="sm" className="bg-tykoo-blue text-white hover:bg-tykoo-darkBlue">
                              Trade
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          No cryptocurrencies found matching your search.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Markets;
