function Balance({ transactions }) {
  const total = transactions.reduce((acc, t) => acc + t.amount, 0);
  return (
    <h3 style={{ color: '#333' }}>Balance: ₹{total}</h3>
  );
}

export default Balance;