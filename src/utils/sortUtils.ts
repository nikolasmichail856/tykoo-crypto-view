
import { CryptoData } from '@/types/crypto';

export const sortCryptoData = (
  data: CryptoData[],
  activeSortField: keyof CryptoData | string,
  sortDirection: 'asc' | 'desc'
): CryptoData[] => {
  return [...data].sort((a, b) => {
    const fieldA = a[activeSortField as keyof CryptoData];
    const fieldB = b[activeSortField as keyof CryptoData];
    
    if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      return sortDirection === "asc" ? fieldA - fieldB : fieldB - fieldA;
    }
    
    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      return sortDirection === "asc" 
        ? fieldA.localeCompare(fieldB) 
        : fieldB.localeCompare(fieldA);
    }
    
    return 0;
  });
};

export const filterCryptoData = (
  data: CryptoData[],
  searchTerm: string
): CryptoData[] => {
  return data.filter(crypto => 
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
