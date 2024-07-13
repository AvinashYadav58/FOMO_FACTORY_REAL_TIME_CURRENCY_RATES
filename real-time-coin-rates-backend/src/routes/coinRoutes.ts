import express from 'express';
import Coin from '../models/coin';

const router = express.Router();

router.get('/data', async (req, res) => {
  const coin = req.query.coin as string;
  try {
    console.log('crypto coin: ', coin)
    const data = await Coin.find({ coin }).sort({ timestamp: -1 }).limit(20);
    console.log('data', data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default router;
