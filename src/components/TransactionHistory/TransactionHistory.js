import {
  Table,
  TableTitle,
  TableBody,
  TableHead,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
};
