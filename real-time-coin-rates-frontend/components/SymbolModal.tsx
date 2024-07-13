import React from 'react';
import { useDispatch } from 'react-redux';
import { setSymbol } from '../store/actions';

const SymbolDropdown: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSymbol = event.target.value;
    dispatch(setSymbol(selectedSymbol));
    onClose();
  };

  return (
    <div className="dropdown-container">
      <style jsx>{`
        .dropdown-container {
          margin: 20px;
        }
        select {
          padding: 10px;
          font-size: 16px;
          margin-top: 10px;
        }
      `}</style>
      <h2>Select Coin</h2>
      <select onChange={handleSymbolChange} defaultValue="">
        <option value="" disabled>
          -- Select a coin --
        </option>
        {['BTC', 'ETH', 'USDT', 'BNB', 'SOL'].map((coin) => (
          <option key={coin} value={coin}>
            {coin}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SymbolDropdown;
