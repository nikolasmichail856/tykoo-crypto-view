
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown } from 'lucide-react';
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
  getCryptoIcon: (symbol: string) => React.ReactNode;
}

const MarketTable: React.FC<MarketTableProps> = ({
  cryptoData,
  activeSortField,
  sortDirection,
  handleSort,
  formatCurrency,
  formatLargeNumber,
  handleCryptoSelect,
  selectedCrypto,
  getCryptoIcon
}) => {
  return (
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
            {cryptoData.length > 0 ? (
              cryptoData.map((crypto, index) => (
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
  );
};

export default MarketTable;
