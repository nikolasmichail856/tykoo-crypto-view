
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown } from 'lucide-react';
import CryptoIconRenderer from './CryptoIconRenderer';

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

interface MarketTableProps {
  cryptoData: CryptoData[];
  activeSortField: string;
  sortDirection: string;
  handleSort: (field: string) => void;
  formatCurrency: (value: number) => string;
  formatLargeNumber: (value: number) => string;
  handleCryptoSelect: (crypto: CryptoData) => void;
  selectedCrypto: CryptoData | null;
}

const MarketTable: React.FC<MarketTableProps> = ({
  cryptoData,
  activeSortField,
  sortDirection,
  handleSort,
  formatCurrency,
  formatLargeNumber,
  handleCryptoSelect,
  selectedCrypto
}) => {
  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden mb-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-4 py-3 text-left font-medium text-gray-600">Rank</th>
              <th className="px-4 py-3 text-left font-medium text-gray-600">Name</th>
              <th 
                className="px-4 py-3 text-right font-medium text-gray-600 cursor-pointer hover:text-tykoo-blue"
                onClick={() => handleSort("current_price")}
              >
                Price 
                {activeSortField === "current_price" && (
                  sortDirection === "asc" ? " ▲" : " ▼"
                )}
              </th>
              <th 
                className="px-4 py-3 text-right font-medium text-gray-600 cursor-pointer hover:text-tykoo-blue"
                onClick={() => handleSort("price_change_percentage_24h")}
              >
                24h Change
                {activeSortField === "price_change_percentage_24h" && (
                  sortDirection === "asc" ? " ▲" : " ▼"
                )}
              </th>
              <th 
                className="px-4 py-3 text-right font-medium text-gray-600 cursor-pointer hover:text-tykoo-blue"
                onClick={() => handleSort("market_cap")}
              >
                Market Cap
                {activeSortField === "market_cap" && (
                  sortDirection === "asc" ? " ▲" : " ▼"
                )}
              </th>
              <th 
                className="px-4 py-3 text-right font-medium text-gray-600 cursor-pointer hover:text-tykoo-blue"
                onClick={() => handleSort("total_volume")}
              >
                Volume (24h)
                {activeSortField === "total_volume" && (
                  sortDirection === "asc" ? " ▲" : " ▼"
                )}
              </th>
              <th className="px-4 py-3 text-right font-medium text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.length > 0 ? (
              cryptoData.map((crypto, index) => (
                <tr 
                  key={crypto.id}
                  className={`border-b hover:bg-gray-50 cursor-pointer ${selectedCrypto?.id === crypto.id ? 'bg-gray-50' : ''}`}
                  onClick={() => handleCryptoSelect(crypto)}
                >
                  <td className="px-4 py-4 font-medium">{index + 1}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <CryptoIconRenderer symbol={crypto.symbol} image={crypto.image} />
                      <div>
                        <div className="font-medium">{crypto.name}</div>
                        <div className="text-gray-500 text-xs">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-medium">{formatCurrency(crypto.current_price)}</td>
                  <td className="px-4 py-4 text-right">
                    <div className={`flex items-center justify-end ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {crypto.price_change_percentage_24h >= 0 ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      <span>{crypto.price_change_percentage_24h.toFixed(2)}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right">{formatLargeNumber(crypto.market_cap)}</td>
                  <td className="px-4 py-4 text-right">{formatLargeNumber(crypto.total_volume)}</td>
                  <td className="px-4 py-4 text-right">
                    <Button size="sm" className="bg-tykoo-blue text-white hover:bg-blue-600">
                      Trade
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-8">
                  No cryptocurrencies found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTable;
