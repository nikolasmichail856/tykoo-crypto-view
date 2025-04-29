
import React from 'react';

interface MarketHeaderProps {
  title: string;
  description: string;
}

const MarketHeader: React.FC<MarketHeaderProps> = ({ title, description }) => (
  <>
    <h1 className="text-3xl font-bold text-tykoo-darkBlue mb-2">{title}</h1>
    <p className="text-gray-600 mb-8">{description}</p>
  </>
);

export default MarketHeader;
