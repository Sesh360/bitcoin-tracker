// src/services/BitcoinService.ts
import { ref, Ref } from 'vue';

interface PercentChanges {
  '1h': number;
  '12h': number;
  '24h': number;
  '7d': number;
  '30d': number;
  '180d': number;
  '1y': number;
  '3y': number;
  '5y': number;
  'ytd': number;
}

//  'genesis': number;

export default {
  bitcoinHoldings: ref<number>(getStoredHoldings()),
  percentChanges: ref<PercentChanges>({
    '1h': 0,
    '12h': 0,
    '24h': 0,
    '7d': 0,
    '30d': 0,
    '180d': 0,
    '1y': 0,
    '3y': 0,
    '5y': 0,
    'ytd': 0
  }),

      //'genesis': 0
  
  async getBitcoinPrice(): Promise<number> {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      return data.bitcoin.usd as number;
    } catch (error) {
      console.error('Error fetching Bitcoin price:', error);
      return 0;
    }
  },
  
  async getBitcoinPercentChanges(): Promise<PercentChanges> {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false'
      );
      
      const data = await response.json();
      
      // For periods not available in the API, use placeholder values
      const twelveHChange = data.market_data.price_change_percentage_24h_in_currency.usd / 2; // Approximate 12h
      const oneYearChange = 120.5; // Placeholder
      const threeYearChange = 280.4; // Placeholder
      const fiveYearChange = 450.7; // Placeholder
      const ytdChange = 40.5; // Placeholder
      //const genesisChange = 20000000; // Placeholder (~20 million percent from ~$0.05)
      
      const changes = {
        '1h': data.market_data.price_change_percentage_1h_in_currency.usd,
        '12h': twelveHChange,
        '24h': data.market_data.price_change_percentage_24h_in_currency.usd,
        '7d': data.market_data.price_change_percentage_7d_in_currency.usd,
        '30d': data.market_data.price_change_percentage_30d_in_currency.usd,
        '180d': data.market_data.price_change_percentage_200d_in_currency?.usd || 0, // Using 200d as approximation
        'ytd': ytdChange,
        '1y': oneYearChange,
        '3y': threeYearChange,
        '5y': fiveYearChange,
        //'genesis': genesisChange
      };
      
      this.percentChanges.value = changes;
      return changes;
    } catch (error) {
      console.error('Error fetching Bitcoin percentage changes:', error);
      return this.percentChanges.value;
    }
  },
  
  updateBitcoinHoldings(amount: number): void {
    localStorage.setItem('bitcoin-holdings', amount.toString());
    this.bitcoinHoldings.value = amount;
  },

  getHoldings(): Ref<number> {
    return this.bitcoinHoldings;
  }
};

function getStoredHoldings(): number {
  const stored = localStorage.getItem('bitcoin-holdings');
  return stored ? parseFloat(stored) : 0;
}