
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
  
  return (
    <div className="w-full h-[300px]">
      <ChartHeader 
        isUpdating={isUpdating} 
        lastUpdated={lastUpdated} 
        onRefresh={refreshData} 
      />
      <ChartRenderer 
        data={data} 
        symbol={symbol} 
        period={period}
        formatDateByPeriod={formatDateByPeriod}
      />
    </div>
  );
};

export default PriceChart;
