
import { ReactNode } from 'react';
import { useMarketData } from '@/hooks/useMarketData';
import { CryptoData } from '@/types/crypto';
import { sortCryptoData, filterCryptoData } from '@/utils/sortUtils';

interface MarketDataProviderProps {
  children: (props: {
    cryptoData: CryptoData[];
    isLoading: boolean;
    selectedCrypto: CryptoData | null;
    activeSortField: string;
    sortDirection: string;
    handleSort: (field: string) => void;
    handleCryptoSelect: (crypto: CryptoData) => void;
    sortedData: CryptoData[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedPeriod: string;
    setSelectedPeriod: (period: string) => void;
  }) => ReactNode;
}

const MarketDataProvider: React.FC<MarketDataProviderProps> = ({ children }) => {
  const {
    cryptoData,
    isLoading,
    selectedCrypto,
    setSelectedCrypto,
    activeSortField,
    setActiveSortField,
    sortDirection,
    setSortDirection,
    searchTerm,
    setSearchTerm,
    selectedPeriod,
    setSelectedPeriod
  } = useMarketData();

  const handleSort = (field: string) => {
    if (activeSortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setActiveSortField(field);
      setSortDirection("desc");
    }
  };

  const handleCryptoSelect = (crypto: CryptoData) => {
    setSelectedCrypto(crypto);
  };

  const filteredData = filterCryptoData(cryptoData, searchTerm);
  const sortedData = sortCryptoData(filteredData, activeSortField, sortDirection as 'asc' | 'desc');

  return (
    <>
      {children({
        cryptoData,
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
      })}
    </>
  );
};

export default MarketDataProvider;
export type { CryptoData };
