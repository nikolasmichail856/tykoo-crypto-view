
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MarketSkeleton from '@/components/markets/MarketSkeleton';
import MarketHeader from '@/components/markets/MarketHeader';
import MarketContent from '@/components/markets/MarketContent';
import MarketDataProvider from '@/components/markets/MarketDataProvider';
import { toast } from '@/components/ui/sonner';

const Markets: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const handleDataRefresh = () => {
    // This is a placeholder - the actual refresh happens in MarketDataProvider
    setLastUpdated(new Date());
    toast.success("Market data is being updated");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="py-10 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <MarketHeader 
            title="Live Market Prices" 
            description="Explore real-time cryptocurrency prices for the assets supported on Tykoo."
            lastUpdated={lastUpdated}
            onRefresh={handleDataRefresh}
          />
          
          <MarketDataProvider>
            {({ 
              isLoading, 
              selectedCrypto, 
              activeSortField, 
              sortDirection, 
              handleSort, 
              handleCryptoSelect,
              sortedData,
              searchTerm,
              setSearchTerm,
              selectedPeriod,
              setSelectedPeriod
            }) => (
              <>
                {isLoading ? (
                  <MarketSkeleton />
                ) : (
                  <MarketContent
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedPeriod={selectedPeriod}
                    setSelectedPeriod={setSelectedPeriod}
                    selectedCrypto={selectedCrypto}
                    sortedData={sortedData}
                    activeSortField={activeSortField}
                    sortDirection={sortDirection}
                    handleSort={handleSort}
                    handleCryptoSelect={handleCryptoSelect}
                  />
                )}
              </>
            )}
          </MarketDataProvider>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Markets;
