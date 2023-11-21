import styled from 'styled-components';
import { getColor } from 'components/Statistics/colors';

export const StatisticsWrapper = styled.section`
  margin: 0 auto;
  margin-top: 20px;
  padding: 15px;
  width: 444px;
  text-align: center;
  border: 1px solid
    ${p => {
      return p.theme.colors.blue;
    }};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const StatisticsTitle = styled.h2`
  color: ${p => {
    return p.theme.colors.black;
  }};
`;

export const StatisticsList = styled.ul`
  display: flex;
  margin-top: 12px;
`;

export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 16px;
  background-color: ${p => {
    return getColor;
  }};
`;

export const StatisticsText = styled.span`
  font-size: larger;
`;
