
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface MarketControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const MarketControls: React.FC<MarketControlsProps> = ({
  searchTerm,
  setSearchTerm
}) => {
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
        <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
          24h
        </Button>
        <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
          7d
        </Button>
        <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
          30d
        </Button>
        <Button variant="outline" className="border-tykoo-blue text-tykoo-blue hover:bg-tykoo-blue hover:text-white">
          1y
        </Button>
      </div>
    </div>
  );
};

export default MarketControls;
