
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
  if (currency === 'BTC' || currency === 'ETH') {
    return value.toFixed(8);
  }
  return value.toFixed(2);
};

export const formatPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};
