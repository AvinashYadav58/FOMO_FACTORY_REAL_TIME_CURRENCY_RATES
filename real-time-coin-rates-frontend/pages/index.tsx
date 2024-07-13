import React, { useState } from 'react';
import StockTable from '../components/StockTable';
import SymbolModal from '../components/SymbolModal';

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Crypto Coins</h1>
      <button onClick={() => setModalOpen(true)}>Select Coin</button>
      {modalOpen && <SymbolModal onClose={() => setModalOpen(false)} />}
      <StockTable />
    </div>
  );
};

export default Home;
