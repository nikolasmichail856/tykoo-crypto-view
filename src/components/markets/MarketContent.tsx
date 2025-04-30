
import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from 'lucide-react';
import { type CryptoData } from './MarketDataProvider';
import { formatCurrency, formatLargeNumber } from '@/utils/formatters';
import CoinChartCard from './CoinChartCard';

interface MarketContentProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
  selectedCrypto: CryptoData | null;
  sortedData: CryptoData[];
  activeSortField: string;
  sortDirection: string;
  handleSort: (field: string) => void;
  handleCryptoSelect: (crypto: CryptoData) => void;
}

const MarketContent: React.FC<MarketContentProps> = ({
  searchTerm,
  setSearchTerm,
  selectedPeriod,
  setSelectedPeriod,
  selectedCrypto,
  sortedData,
  activeSortField,
  sortDirection,
  handleSort,
  handleCryptoSelect
}) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <Input
          type="text"
          placeholder="Search by coin name or symbol..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">24 Hours</SelectItem>
            <SelectItem value="7">7 Days</SelectItem>
            <SelectItem value="30">30 Days</SelectItem>
            <SelectItem value="90">90 Days</SelectItem>
            <SelectItem value="365">1 Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {selectedCrypto && (
        <div className="mb-6">
          <CoinChartCard
            selectedCrypto={selectedCrypto}
            formatCurrency={formatCurrency}
            period={selectedPeriod}
          />
        </div>
      )}

      <div className="rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-600">Rank</th>
                <th className="px-4 py-3 font-medium text-gray-600">Name</th>
                <th 
                  className="px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-tykoo-blue"
                  onClick={() => handleSort('current_price')}
                >
                  Price
                  {activeSortField === 'current_price' && (
                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
                <th 
                  className="px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-tykoo-blue"
                  onClick={() => handleSort('price_change_percentage_24h')}
                >
                  24h Change
                  {activeSortField === 'price_change_percentage_24h' && (
                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
                <th 
                  className="px-4 py-3 font-medium text-gray-600 cursor-pointer hover:text-tykoo-blue"
                  onClick={() => handleSort('market_cap')}
                >
                  Market Cap
                  {activeSortField === 'market_cap' && (
                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </th>
                <th className="px-4 py-3 font-medium text-gray-600">Volume (24h)</th>
                <th className="px-4 py-3 font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.length > 0 ? (
                sortedData.map((crypto, index) => (
                  <tr 
                    key={crypto.id} 
                    className={`border-b hover:bg-gray-50 cursor-pointer ${selectedCrypto?.id === crypto.id ? 'bg-gray-50' : ''}`}
                    onClick={() => handleCryptoSelect(crypto)}
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <img src={crypto.image} alt={crypto.name} className="w-6 h-6 rounded-full" />
                        <div>
                          <span className="font-medium">{crypto.name}</span>
                          <span className="text-gray-500 text-sm ml-2">({crypto.symbol.toUpperCase()})</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium">{formatCurrency(crypto.current_price)}</td>
                    <td className={`px-4 py-3 ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      <div className="flex items-center">
                        {crypto.price_change_percentage_24h >= 0 ? (
                          <TrendingUp className="inline-block h-4 w-4 mr-1" />
                        ) : (
                          <TrendingDown className="inline-block h-4 w-4 mr-1" />
                        )}
                        <span>{crypto.price_change_percentage_24h.toFixed(2)}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">{formatLargeNumber(crypto.market_cap)}</td>
                    <td className="px-4 py-3">{formatLargeNumber(crypto.total_volume)}</td>
                    <td className="px-4 py-3">
                      <Button size="sm" className="bg-tykoo-blue hover:bg-blue-600">Trade</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                    No cryptocurrencies found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-gray-500">
        <p>A list of your favorite cryptocurrencies. Updated in real-time.</p>
      </div>
    </div>
  );
};

export default MarketContent;
