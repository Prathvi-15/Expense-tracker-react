import Papa from 'papaparse';

export const exportToCSV = (transactions, filename) => {
  const formatted = transactions.map(t => ({
    Type: t.type.charAt(0).toUpperCase() + t.type.slice(1),
    Description: t.text,
    Amount: t.amount
  }));

  const csv = Papa.unparse(formatted);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
