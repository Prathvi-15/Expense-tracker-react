import React, { useState } from 'react';

const ExpenseForm = ({ addTransaction }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const txn = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    addTransaction(txn);
    setText('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Income/Expense</h3>
      <input type="text" placeholder="Description" required value={text} onChange={(e) => setText(e.target.value)} />
      <input type="number" placeholder="Amount (use - for expense)" required value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
