
import { PriceData } from './chart';

export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  image: string;
  description: string;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
  price_history: PriceData[];
}
