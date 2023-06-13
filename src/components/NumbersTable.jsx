const NumbersTable = ({ limit }) => {
  const numbers = [];
  for (let i = 1; i <= limit; i++) {
    numbers.push(i);
  }

  const rows = Math.ceil(limit / 5);

  const tableRows = [];
  for (let row = 0; row < rows; row++) {
    const start = row * 5;
    const end = start + 5;
    const rowNumbers = numbers.slice(start, end); // Get the numbers for the current row

    tableRows.push(
      <tr key={row}>
        {rowNumbers.map((number) => (
          <td key={number} className={number % 2 === 0 ? 'even' : ''}>
            {number}
          </td>
        ))}
      </tr>
    );
  }

  return (
    <table className="numbers-table">
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default NumbersTable;
