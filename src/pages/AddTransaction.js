import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const { type } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount || !date) {
      alert('Please fill all fields');
      return;
    }

   const transaction = {
  id: Date.now(),
  text,
  amount: type === 'income' ? Math.abs(parseFloat(amount)) : -Math.abs(parseFloat(amount)),
  date, // must be stored here
  type
};


    // ✅ Save to localStorage
    const saved = localStorage.getItem('transactions');
    const existing = saved ? JSON.parse(saved) : [];
    const updated = [transaction, ...existing];

    localStorage.setItem('transactions', JSON.stringify(updated));

    alert('Transaction added successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="App">
      <h2>Add {type === 'income' ? 'Income' : 'Expense'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTransaction;
