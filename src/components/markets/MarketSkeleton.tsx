
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const MarketSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-10 bg-gray-200 rounded mb-4 w-full"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="h-[400px] bg-gray-200 rounded mb-4"></div>
        </div>
        <div>
          <div className="h-[400px] bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default MarketSkeleton;
