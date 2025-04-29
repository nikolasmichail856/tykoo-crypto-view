
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

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

interface CoinStatsProps {
  selectedCrypto: CryptoData;
  formatLargeNumber: (value: number) => string;
  formatCurrency: (value: number) => string;
}

const CoinStats: React.FC<CoinStatsProps> = ({ 
  selectedCrypto,
  formatLargeNumber,
  formatCurrency
}) => {
  return (
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
  );
};

export default CoinStats;
