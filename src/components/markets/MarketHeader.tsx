
import React from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { formatDateTime } from '@/utils/formatters';

interface MarketHeaderProps {
  title: string;
  description: string;
  lastUpdated: Date | null;
  onRefresh: () => void;
}

const MarketHeader: React.FC<MarketHeaderProps> = ({
  title,
  description,
  lastUpdated,
  onRefresh
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mt-2 text-gray-500">{description}</p>
        {lastUpdated && (
          <p className="text-sm text-gray-500 mt-1">
            Last updated: {formatDateTime(lastUpdated)}
          </p>
        )}
      </div>
      
      <div className="mt-4 md:mt-0">
        <Button 
          onClick={onRefresh}
          className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
          size="sm"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Refresh</span>
        </Button>
      </div>
    </div>
  );
};

export default MarketHeader;
