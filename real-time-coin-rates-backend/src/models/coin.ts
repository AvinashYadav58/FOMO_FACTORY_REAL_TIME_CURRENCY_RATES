import mongoose from 'mongoose';

const coinSchema = new mongoose.Schema({
  coin: String,
  name: String,
  rate: Number,
  rank: Number,
  timestamp: Date,
});

const Coin = mongoose.model('crypto_currency', coinSchema);

export default Coin;
