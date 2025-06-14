import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#00C49F', '#FF8042'];

function Chart({ transactions }) {
  const income = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0);
  const expense = transactions.filter(t => t.amount < 0).reduce((a, b) => a + Math.abs(b.amount), 0);

  const data = [
    { name: 'Income', value: income },
    { name: 'Expense', value: expense },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
}

export default Chart;
