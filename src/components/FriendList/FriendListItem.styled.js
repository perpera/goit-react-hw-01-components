import styled from 'styled-components';

export const FriendItem = styled.li`
  padding: 12px;
  display: flex;
  gap: 16px;
  width: 400px;
  align-items: center;
  border: 1px solid
    ${p => {
      return p.theme.colors.blue;
    }};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => {
    return p.$status ? p.theme.colors.statgreen : p.theme.colors.red;
  }};
`;

export const FriendName = styled.p`
  font-weight: 500;
  font-size: 28px;
`;
