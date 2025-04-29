
import React from 'react';
import { formatCurrency, formatLargeNumber } from '@/utils/formatters';
import MarketTable from '@/components/markets/MarketTable';
import MarketControls from '@/components/markets/MarketControls';
import CoinChartCard from '@/components/markets/CoinChartCard';
import CoinStats from '@/components/markets/CoinStats';
import WhyTradeSection from '@/components/markets/WhyTradeSection';
import PaginationControls from '@/components/markets/PaginationControls';
import CryptoIconRenderer from '@/components/markets/CryptoIconRenderer';
import { type CryptoData } from './MarketDataProvider';

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
  const getCryptoIcon = (symbol: string) => {
    return <CryptoIconRenderer symbol={symbol} />;
  };

  return (
    <>
      <MarketControls 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          {selectedCrypto && (
            <CoinChartCard 
              selectedCrypto={selectedCrypto} 
              formatCurrency={formatCurrency}
              period={selectedPeriod}
            />
          )}
        </div>
        
        <div>
          {selectedCrypto && (
            <CoinStats 
              selectedCrypto={selectedCrypto}
              formatLargeNumber={formatLargeNumber}
              formatCurrency={formatCurrency}
            />
          )}
        </div>
      </div>
      
      <MarketTable
        cryptoData={sortedData}
        activeSortField={activeSortField}
        sortDirection={sortDirection}
        handleSort={handleSort}
        formatCurrency={formatCurrency}
        formatLargeNumber={formatLargeNumber}
        handleCryptoSelect={handleCryptoSelect}
        selectedCrypto={selectedCrypto}
        getCryptoIcon={getCryptoIcon}
      />
      
      <WhyTradeSection />
      
      <PaginationControls />
    </>
  );
};

export default MarketContent;
