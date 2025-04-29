
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface MarketControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
}

const MarketControls: React.FC<MarketControlsProps> = ({
  searchTerm,
  setSearchTerm,
  selectedPeriod,
  setSelectedPeriod
}) => {
  const periodOptions = [
    { value: '1', label: '24h' },
    { value: '7', label: '7d' },
    { value: '30', label: '30d' },
    { value: '365', label: '1y' }
  ];

  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          type="text" 
          placeholder="Search coins..." 
          className="pl-10 py-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center md:justify-end">
        {periodOptions.map((period) => (
          <Button 
            key={period.value}
            variant="outline"
            className={
              selectedPeriod === period.value
                ? "bg-tykoo-blue border-tykoo-blue text-white hover:bg-tykoo-blue hover:text-white"
                : "border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white"
            }
            onClick={() => setSelectedPeriod(period.value)}
          >
            {period.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MarketControls;
