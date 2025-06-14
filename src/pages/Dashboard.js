import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Balance from '../components/Balance';
import Chart from '../components/chart';
import { exportToCSV } from '../utils/exportCSV';

function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  return (
    <div className="App">
      <h2>Dashboard</h2>
      <Balance transactions={transactions} />
      <div>
        <button style={{ backgroundColor: '#00C49F', color: '#fff' }} onClick={() => navigate('/add/income')}>Add Income</button>
        <button style={{ backgroundColor: '#FF8042', color: '#fff' }} onClick={() => navigate('/add/expense')}>Add Expense</button>
      </div>
      <Chart transactions={transactions} />
      <button
        onClick={() => exportToCSV(transactions, 'summary.csv')}
        style={{ backgroundColor: '#4A90E2', color: '#fff', padding: '10px', marginTop: '15px' }}
      >
        Export CSV
      </button>
    </div>
  );
}

export default Dashboard;