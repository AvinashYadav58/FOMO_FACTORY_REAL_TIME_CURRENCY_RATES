import axios from 'axios';
import Coin from '../models/coin';

export const fetchData = async () => {
  const cryptos = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL'];
  const apiKey = process.env.API_KEY;
  for (const crypto of cryptos) {
    try {

      const response = await axios.post(
        "https://api.livecoinwatch.com/coins/single",
        {
          currency: "USD",
          code: crypto,
          meta: true,
        },
        {
          headers: {
            "content-type": "application/json",
            "x-api-key": apiKey,
          },
        }
      );

      console.log('coin data response',response.data);
   
     const data = response.data;

      console.log(`response of ${crypto} `, data)
      const newCoin = new Coin({
        coin: crypto,
        name: data?.name,
        rate: data?.rate,
        rank: data?.rank,
        timestamp: new Date(),
      });
      newCoin.save()
        .then(() => {
          console.log('Currency saved successfully');
        })
        .catch((error) => {
          console.error('Error saving Currency:', error);
        });
      } catch (error) {
        console.error(`Error fetching data for ${crypto}:`, error);
      }
  }
};
