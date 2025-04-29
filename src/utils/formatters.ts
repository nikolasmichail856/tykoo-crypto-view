
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: value < 1 ? 4 : 2,
    maximumFractionDigits: value < 1 ? 4 : 2,
  }).format(value);
};

export const formatLargeNumber = (value: number) => {
  if (value >= 1000000000000) {
    return `€${(value / 1000000000000).toFixed(2)}T`;
  }
  if (value >= 1000000000) {
    return `€${(value / 1000000000).toFixed(2)}B`;
  }
  if (value >= 1000000) {
    return `€${(value / 1000000).toFixed(2)}M`;
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
  // For other currencies, show up to 10 decimals for small values
  if (value < 0.01) {
    return value.toFixed(10).replace(/\.?0+$/, '');
  }
  return value.toFixed(2);
};

export const formatPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};

export const formatDateForPeriod = (timestamp: string, period: string) => {
  const date = new Date(timestamp);
  const numDays = Number(period);
  
  if (numDays <= 1) {
    // For 24h, show hour:minute
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  } else if (numDays <= 7) {
    // For 7d, show day and hour
    return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}:00`;
  } else {
    // For 30d and 1y, show month and day
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }
};
