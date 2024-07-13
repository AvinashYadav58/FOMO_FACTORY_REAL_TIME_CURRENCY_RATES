import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from '../store/actions';

const StockTable: React.FC = () => {
  const dispatch = useDispatch();
  const symbol = useSelector((state: any) => state.symbol);
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/api/stocks/data?coin=${symbol}`);
      const result = await response.json();
      dispatch(setData(symbol, result.slice(0, 20)));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, [symbol, dispatch]);

  return (
    <div>
      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 10px; /* Adds space inside each cell */
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      `}</style>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rank</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>${parseFloat(item.rate).toFixed(2)}</td>
              <td>{item.rank}</td>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
