import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { type CryptoData } from './MarketDataProvider';
import { formatCurrency, formatLargeNumber } from '@/utils/formatters';
import { TrendingUp, TrendingDown } from 'lucide-react';

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
    <>
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

      <div className="border rounded-md">
        <ScrollArea>
          <Table>
            <TableCaption>A list of your favorite cryptocurrencies.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Rank</TableHead>
                <TableHead className="text-left">
                  Name
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort('current_price')}>
                  Price
                  {activeSortField === 'current_price' && (
                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort('price_change_percentage_24h')}>
                  24h Change
                  {activeSortField === 'price_change_percentage_24h' && (
                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </TableHead>
                <TableHead className="text-right cursor-pointer" onClick={() => handleSort('market_cap')}>
                  Market Cap
                  {activeSortField === 'market_cap' && (
                    <span>{sortDirection === 'asc' ? ' ▲' : ' ▼'}</span>
                  )}
                </TableHead>
                <TableHead className="text-right">Volume (24h)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((crypto, index) => (
                <TableRow key={crypto.id} className="cursor-pointer hover:bg-gray-100" onClick={() => handleCryptoSelect(crypto)}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <img src={crypto.image} alt={crypto.name} className="w-6 h-6 rounded-full" />
                    {crypto.name} ({crypto.symbol})
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(crypto.current_price)}</TableCell>
                  <TableCell className={`text-right ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <TrendingUp className="inline-block h-4 w-4 mr-1 align-middle" />
                    ) : (
                      <TrendingDown className="inline-block h-4 w-4 mr-1 align-middle" />
                    )}
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </TableCell>
                  <TableCell className="text-right">{formatLargeNumber(crypto.market_cap)}</TableCell>
                  <TableCell className="text-right">{formatLargeNumber(crypto.total_volume)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </>
  );
};

export default MarketContent;
