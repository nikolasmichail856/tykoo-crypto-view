
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface MarketHeaderProps {
  title: string;
  description: string;
  lastUpdated?: Date | null;
  onRefresh?: () => void;
}

const MarketHeader: React.FC<MarketHeaderProps> = ({ 
  title, 
  description, 
  lastUpdated, 
  onRefresh 
}) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
    <div>
      <h1 className="text-3xl font-bold text-tykoo-darkBlue mb-2">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
    
    {onRefresh && (
      <div className="mt-4 md:mt-0 flex items-center">
        {lastUpdated && (
          <span className="text-xs text-gray-500 mr-2">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        )}
        <Button 
          size="sm" 
          variant="outline"
          onClick={onRefresh}
          className="flex items-center"
        >
          <RefreshCw className="h-4 w-4 mr-1" />
          Refresh
        </Button>
      </div>
    )}
  </div>
);

export default MarketHeader;
