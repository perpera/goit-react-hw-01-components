import styled from 'styled-components';

export const ProfileWrapper = styled.div`
margin: 0 auto;
margin-top: 24px;
padding 16px 0 8px 0;
width: 300px;
box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.3);
`;
export const ProfileImage = styled.img`
  margin: 0 auto;
`;

export const ProfileInfo = styled.p`
  margin-top: 8px;
  text-align: center;
  color: ${p => {
    return p.theme.colors.darkgrey;
  }};
`;

export const ProfileList = styled.ul`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

export const ProfileListItem = styled.li`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${p => {
      return p.theme.colors.black;
    }};
  background-color: ${p => {
    return p.theme.colors.grey;
  }};
  width: 100px;
`;
