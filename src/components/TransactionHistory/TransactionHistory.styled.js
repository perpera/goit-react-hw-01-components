import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 24px;
  width: 600px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const TableHead = styled.thead`
  background-color: ${p => {
    return p.theme.colors.green;
  }};
`;

export const TableTitle = styled.th`
  padding: 4px;
  font-weight: 500;
`;

export const TableBody = styled.tbody`
  text-align: center;
  color: ${p => {
    return p.theme.colors.darkgrey;
  }};

  tr:nth-child(even) {
    background-color: ${p => {
      return p.theme.colors.grey;
    }};
  }
`;
