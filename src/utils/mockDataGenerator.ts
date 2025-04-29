
import { CryptoData } from '@/types/crypto';

const COIN_DESCRIPTIONS = {
  bitcoin: 'Bitcoin is the first decentralized cryptocurrency. Bitcoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network.',
  ethereum: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform and it is the second largest cryptocurrency by market capitalization.',
  'usd-coin': 'USD Coin is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every USDC is backed by a dollar in a bank account, providing stability in the volatile crypto market.'
};

export const generateMockData = (): CryptoData[] => {
  const generatePriceHistory = (basePrice: number, volatility: number) => {
    const history = [];
    const now = new Date();
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const randomChange = (Math.random() - 0.5) * volatility * basePrice;
      const price = basePrice + randomChange + (Math.sin(i / 5) * basePrice * 0.05);
      history.push({
        timestamp: date.toISOString().split('T')[0],
        price: Math.max(price, basePrice * 0.7)
      });
    }
    return history;
  };

  return [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      current_price: 58352.12, // Using EUR value (approximate conversion)
      price_change_percentage_24h: 2.35,
      market_cap: 1158000000000,
      total_volume: 26500000000,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
      description: COIN_DESCRIPTIONS.bitcoin,
      high_24h: 59890.45,
      low_24h: 57120.78,
      circulating_supply: 19567893,
      price_history: generatePriceHistory(58000, 0.1)
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      current_price: 3156.78, // Using EUR value (approximate conversion)
      price_change_percentage_24h: -1.23,
      market_cap: 380000000000,
      total_volume: 14200000000,
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
      description: COIN_DESCRIPTIONS.ethereum,
      high_24h: 3260.92,
      low_24h: 3098.45,
      circulating_supply: 120250381,
      price_history: generatePriceHistory(3150, 0.15)
    },
    {
      id: 'usd-coin',
      name: 'USD Coin',
      symbol: 'USDC',
      current_price: 0.92, // Using EUR value (approximate conversion from USD)
      price_change_percentage_24h: 0.01,
      market_cap: 27000000000,
      total_volume: 1750000000,
      image: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png',
      description: COIN_DESCRIPTIONS['usd-coin'],
      high_24h: 0.93,
      low_24h: 0.91,
      circulating_supply: 29000000000,
      price_history: generatePriceHistory(0.92, 0.005)
    }
  ];
};
