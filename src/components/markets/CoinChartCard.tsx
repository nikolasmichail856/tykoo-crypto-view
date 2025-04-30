
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { TrendingUp, TrendingDown } from 'lucide-react';
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
  // Calculate stats for current period
  const currentPrice = selectedCrypto.current_price;
  const priceChange = selectedCrypto.price_change_percentage_24h;
  const priceChangeIsPositive = priceChange >= 0;
  
  // Format time period display
  const getPeriodDisplay = () => {
    switch(period) {
      case "1": return "24 hours";
      case "7": return "7 days";
      case "30": return "30 days";
      case "90": return "90 days";
      case "365": return "1 year";
      default: return "24 hours";
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={selectedCrypto.image} alt={selectedCrypto.name} className="w-10 h-10" />
            <div>
              <CardTitle className="text-2xl">{selectedCrypto.name}</CardTitle>
              <CardDescription className="text-gray-500">{selectedCrypto.symbol.toUpperCase()}</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{formatCurrency(currentPrice)}</div>
            <div className={`flex items-center justify-end text-sm ${priceChangeIsPositive ? 'text-green-500' : 'text-red-500'}`}>
              {priceChangeIsPositive ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              <span>{Math.abs(priceChange).toFixed(2)}% {priceChangeIsPositive ? 'up' : 'down'}</span>
              <span className="text-gray-500 ml-1">in the last 24h</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm text-gray-500 mb-1">Market Cap</h3>
            <p className="text-lg font-semibold">{formatCurrency(selectedCrypto.market_cap)}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm text-gray-500 mb-1">24h Trading Volume</h3>
            <p className="text-lg font-semibold">{formatCurrency(selectedCrypto.total_volume)}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm text-gray-500 mb-1">Circulating Supply</h3>
            <p className="text-lg font-semibold">{selectedCrypto.circulating_supply.toLocaleString()} {selectedCrypto.symbol.toUpperCase()}</p>
          </div>
        </div>
        
        {/* Price stats for selected period */}
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Price Statistics ({getPeriodDisplay()})</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">Current Price</span>
              <span className="font-medium">{formatCurrency(currentPrice)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">24h High</span>
              <span className="font-medium">{formatCurrency(selectedCrypto.high_24h)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">24h Low</span>
              <span className="font-medium">{formatCurrency(selectedCrypto.low_24h)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-600">24h Price Change</span>
              <span className={`font-medium ${priceChangeIsPositive ? 'text-green-500' : 'text-red-500'}`}>
                {priceChangeIsPositive ? '+' : ''}{priceChange.toFixed(2)}%
              </span>
            </div>
            {selectedCrypto.description && (
              <div className="py-2 mt-3">
                <h4 className="text-gray-600 mb-2">About</h4>
                <p className="text-sm text-gray-700">{selectedCrypto.description}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinChartCard;
