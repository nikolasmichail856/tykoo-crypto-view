
import React from 'react';
import { PriceData } from '@/types/chart';
import ChartRenderer from '@/components/charts/ChartRenderer';
import ChartHeader from '@/components/charts/ChartHeader';
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
  
  // Debug log to track data going into the chart
  console.log('Price Chart Data:', { symbol, period, dataLength: data.length, firstItem: data[0] });
  
  return (
    <div className="w-full h-[400px] flex flex-col">
      <ChartHeader 
        isUpdating={isUpdating} 
        lastUpdated={lastUpdated} 
        onRefresh={refreshData} 
      />
      <div className="flex-grow">
        <ChartRenderer 
          data={data} 
          symbol={symbol} 
          period={period}
          formatDateByPeriod={formatDateByPeriod}
        />
      </div>
    </div>
  );
};

export default PriceChart;
