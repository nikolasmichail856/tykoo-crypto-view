
import React from 'react';
import { PriceData } from '@/types/chart';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/utils/formatters';
import { TrendingUp, TrendingDown, ArrowUp, ArrowDown } from 'lucide-react';
import { useCryptoPrice } from '@/hooks/useCryptoPrice';

interface PriceChartProps {
  data: PriceData[];
  name: string;
  symbol: string;
  period?: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ 
  data: initialData, 
  name, 
  symbol, 
  period = '1' 
}) => {
  const { 
    data, 
    isUpdating, 
    lastUpdated, 
    refreshData,
    formatDateByPeriod 
  } = useCryptoPrice({
    symbol,
    coinName: name,
    period,
    initialData
  });
  
  console.log('Price Chart Data:', { 
    symbol, 
    period, 
    dataLength: data.length, 
    firstItem: data[0],
    hasData: data && data.length > 0
  });

  // Calculate price changes and trends
  const calculateChanges = () => {
    if (!data || data.length < 2) return { 
      current: 0, 
      change: 0, 
      percentChange: 0, 
      isPositive: false 
    };

    const current = data[data.length - 1].price;
    const first = data[0].price;
    const change = current - first;
    const percentChange = (change / first) * 100;

    return {
      current,
      change,
      percentChange,
      isPositive: change >= 0
    };
  };

  const { current, change, percentChange, isPositive } = calculateChanges();

  // Extract key price points for the period
  const extractKeyPoints = () => {
    if (!data || data.length < 4) return [];
    
    const points = [];
    // Start point
    points.push(data[0]);
    
    // Find highest and lowest points
    let highest = data[0];
    let lowest = data[0];
    
    for (const point of data) {
      if (point.price > highest.price) highest = point;
      if (point.price < lowest.price) lowest = point;
    }
    
    // Add highest and lowest if they're not the start or end
    if (highest !== data[0] && highest !== data[data.length - 1]) {
      points.push(highest);
    }
    
    if (lowest !== data[0] && lowest !== data[data.length - 1]) {
      points.push(lowest);
    }
    
    // End point
    points.push(data[data.length - 1]);
    
    // Sort by timestamp
    return points.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  };
  
  const keyPoints = extractKeyPoints();
  
  // Create trend indicators based on price movements
  const getTrendIndicators = () => {
    if (!data || data.length < 8) return [];
    
    const step = Math.max(1, Math.floor(data.length / 8));
    const indicators = [];
    
    for (let i = 0; i < data.length - step; i += step) {
      const startPrice = data[i].price;
      const endPrice = data[i + step].price;
      const trend = endPrice >= startPrice ? 'up' : 'down';
      const magnitude = Math.abs(endPrice - startPrice) / startPrice;
      
      indicators.push({
        trend,
        magnitude: Math.min(magnitude * 10, 3) // Scale magnitude but cap it
      });
    }
    
    return indicators;
  };
  
  const trendIndicators = getTrendIndicators();
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm">
          <button 
            onClick={refreshData} 
            className="text-tykoo-blue hover:underline text-xs flex items-center"
            disabled={isUpdating}
          >
            Refresh data
          </button>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          {isUpdating && <span className="mr-2">Updating...</span>}
          <span>
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        </div>
      </div>

      <Card className="flex-grow bg-white border shadow-sm">
        <CardContent className="p-4">
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Price Summary</h3>
            <div className="flex items-center">
              <span className="text-2xl font-bold">{formatCurrency(current)}</span>
              <div className={`ml-3 flex items-center ${isPositive ? 'text-tykoo-green' : 'text-tykoo-red'}`}>
                {isPositive ? (
                  <ArrowUp className="h-5 w-5 mr-1" />
                ) : (
                  <ArrowDown className="h-5 w-5 mr-1" />
                )}
                <span>{formatCurrency(Math.abs(change))}</span>
                <span className="ml-1">({Math.abs(percentChange).toFixed(2)}%)</span>
              </div>
            </div>
          </div>
          
          {/* Visual trend indicator */}
          <div className="mb-6">
            <h3 className="text-sm text-gray-500 mb-2">Price Trend</h3>
            <div className="flex items-center space-x-1 h-6">
              {trendIndicators.map((indicator, i) => (
                <div 
                  key={i} 
                  className={`h-${Math.round(indicator.magnitude) + 1} w-3 rounded-sm ${
                    indicator.trend === 'up' ? 'bg-tykoo-green' : 'bg-tykoo-red'
                  }`}
                  style={{ height: `${(indicator.magnitude + 1) * 8}px` }}
                />
              ))}
            </div>
          </div>
          
          {/* Price data table */}
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Key Price Points</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">Date</th>
                  <th className="py-2 text-right">Price</th>
                  <th className="py-2 text-right">Change</th>
                </tr>
              </thead>
              <tbody>
                {keyPoints.map((point, i) => {
                  const prevPoint = i > 0 ? keyPoints[i - 1] : null;
                  const priceDiff = prevPoint ? point.price - prevPoint.price : 0;
                  const isIncrease = priceDiff >= 0;
                  
                  return (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-2">{formatDateByPeriod(point.timestamp)}</td>
                      <td className="py-2 text-right">{formatCurrency(point.price)}</td>
                      <td className={`py-2 text-right ${i === 0 ? 'text-gray-400' : isIncrease ? 'text-tykoo-green' : 'text-tykoo-red'}`}>
                        {i === 0 ? (
                          '-'
                        ) : (
                          <div className="flex items-center justify-end">
                            {isIncrease ? (
                              <TrendingUp className="h-3 w-3 mr-1" />
                            ) : (
                              <TrendingDown className="h-3 w-3 mr-1" />
                            )}
                            {formatCurrency(Math.abs(priceDiff))}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {data.length === 0 && (
            <div className="w-full h-64 flex items-center justify-center">
              <p className="text-gray-500">No price data available</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceChart;
