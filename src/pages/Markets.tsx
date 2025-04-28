
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, TrendingDown, Bitcoin, Ethereum } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import PriceChart from '@/components/PriceChart';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

  const handleCryptoSelect = (crypto: CryptoData) => {
    setSelectedCrypto(crypto);
  };

  const getCryptoIcon = (symbol: string) => {
    switch(symbol.toLowerCase()) {
      case 'btc':
        return <Bitcoin className="h-6 w-6 text-amber-500" />;
      case 'eth':
        return <Ethereum className="h-6 w-6 text-indigo-500" />;
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
            <div className="animate-pulse space-y-6">
              <div className="h-10 bg-gray-200 rounded mb-4 w-full"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="h-[400px] bg-gray-200 rounded mb-4"></div>
                </div>
                <div>
                  <div className="h-[400px] bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-1/3">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    type="text" 
                    placeholder="Search coins..." 
                    className="pl-10 py-6"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                  <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
                    24h
                  </Button>
                  <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
                    7d
                  </Button>
                  <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
                    30d
                  </Button>
                  <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
                    1y
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                  {selectedCrypto && (
                    <Card className="shadow-sm">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <img src={selectedCrypto.image} alt={selectedCrypto.name} className="w-8 h-8" />
                            <div>
                              <CardTitle className="text-2xl">{selectedCrypto.name}</CardTitle>
                              <CardDescription className="text-gray-500">{selectedCrypto.symbol}</CardDescription>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{formatCurrency(selectedCrypto.current_price)}</div>
                            <div className={`flex items-center justify-end ${selectedCrypto.price_change_percentage_24h >= 0 ? 'text-tykoo-green' : 'text-tykoo-red'}`}>
                              {selectedCrypto.price_change_percentage_24h >= 0 ? (
                                <TrendingUp className="h-4 w-4 mr-1" />
                              ) : (
                                <TrendingDown className="h-4 w-4 mr-1" />
                              )}
                              <span>{selectedCrypto.price_change_percentage_24h.toFixed(2)}%</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <PriceChart data={selectedCrypto.price_history} name={selectedCrypto.name} symbol={selectedCrypto.symbol} />
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                <div>
                  {selectedCrypto && (
                    <Card className="shadow-sm h-full">
                      <CardHeader>
                        <CardTitle className="text-xl">Market Stats</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Tabs defaultValue="overview">
                          <TabsList className="w-full">
                            <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                            <TabsTrigger value="details" className="flex-1">Details</TabsTrigger>
                          </TabsList>
                          <TabsContent value="overview" className="pt-4 space-y-4">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Market Cap</span>
                              <span className="font-medium">{formatLargeNumber(selectedCrypto.market_cap)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">24h Volume</span>
                              <span className="font-medium">{formatLargeNumber(selectedCrypto.total_volume)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">24h High</span>
                              <span className="font-medium">{formatCurrency(selectedCrypto.high_24h)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">24h Low</span>
                              <span className="font-medium">{formatCurrency(selectedCrypto.low_24h)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Circulating Supply</span>
                              <span className="font-medium">{selectedCrypto.circulating_supply.toLocaleString()}</span>
                            </div>
                          </TabsContent>
                          <TabsContent value="details" className="pt-4">
                            <p className="text-gray-600 text-sm">{selectedCrypto.description}</p>
                          </TabsContent>
                        </Tabs>
                        
                        <div className="pt-4">
                          <Button className="w-full bg-tykoo-blue text-white hover:bg-tykoo-darkBlue">
                            Trade {selectedCrypto.symbol}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden mb-6">
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
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedData.length > 0 ? (
                        sortedData.map((crypto, index) => (
                          <TableRow 
                            key={crypto.id}
                            className={`cursor-pointer ${selectedCrypto?.id === crypto.id ? 'bg-gray-50' : ''}`}
                            onClick={() => handleCryptoSelect(crypto)}
                          >
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <div className="mr-2">
                                  {getCryptoIcon(crypto.symbol)}
                                </div>
                                <div>
                                  <div className="font-medium">{crypto.name}</div>
                                  <div className="text-gray-500 text-xs">{crypto.symbol.toUpperCase()}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{formatCurrency(crypto.current_price)}</TableCell>
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
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-bold text-tykoo-darkBlue mb-4">Why Trade on Tykoo?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-2">Simple On/Off Ramps</h3>
                      <p className="text-gray-600">Easily deposit and withdraw your funds with our straightforward fiat gateways.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-2">Focused Selection</h3>
                      <p className="text-gray-600">We offer only the most important cryptocurrencies: Bitcoin, Ethereum, and USDC.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
                      <p className="text-gray-600">Industry-leading security practices to keep your digital assets safe.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

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
