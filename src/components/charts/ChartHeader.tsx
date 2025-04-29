
import React from 'react';
import { RefreshCw } from 'lucide-react';

interface ChartHeaderProps {
  isUpdating: boolean;
  lastUpdated: Date;
  onRefresh: () => Promise<void>;
}

const ChartHeader: React.FC<ChartHeaderProps> = ({
  isUpdating,
  lastUpdated,
  onRefresh
}) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm">
        <button 
          onClick={onRefresh} 
          className="text-tykoo-blue hover:underline text-xs flex items-center"
          disabled={isUpdating}
        >
          Refresh data
        </button>
      </div>
      <div className="flex items-center text-xs text-gray-500">
        <RefreshCw className={`h-3 w-3 mr-1 ${isUpdating ? 'animate-spin' : ''}`} />
        <span>
          Last updated: {lastUpdated.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ChartHeader;
