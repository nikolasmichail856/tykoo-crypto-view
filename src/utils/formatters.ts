
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value < 1 ? 4 : 2,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
};

export const formatLargeNumber = (value: number) => {
  if (value >= 1000000000000) {
    return `$${(value / 1000000000000).toFixed(2)}T`;
  }
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(2)}B`;
  }
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(2)}M`;
  }
  return formatCurrency(value);
};

export const formatCryptoAmount = (value: number, currency: string) => {
  // For very small values in BTC or ETH, show up to 10 decimal places
  if (currency === 'BTC' || currency === 'ETH') {
    if (value < 0.0001) {
      return value.toFixed(10).replace(/\.?0+$/, '');
    }
    if (value < 0.01) {
      return value.toFixed(8);
    }
    return value.toFixed(6);
  }
  // For other currencies, show up to 6 decimals for small values
  if (value < 0.01) {
    return value.toFixed(6).replace(/\.?0+$/, '');
  }
  return value.toFixed(2);
};

export const formatPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};
