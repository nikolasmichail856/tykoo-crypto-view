
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown } from 'lucide-react';
import PriceChart from '@/components/PriceChart';
import { type CryptoData } from './MarketDataProvider';

interface CoinChartCardProps {
  selectedCrypto: CryptoData;
  formatCurrency: (value: number) => string;
  period: string;
}

const CoinChartCard: React.FC<CoinChartCardProps> = ({
  selectedCrypto,
  formatCurrency,
  period
}) => {
  return (
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
      <CardContent className="pt-0">
        <div className="mt-4 mb-8 pb-4">
          <PriceChart 
            data={selectedCrypto.price_history} 
            name={selectedCrypto.name} 
            symbol={selectedCrypto.symbol} 
            period={period} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinChartCard;
