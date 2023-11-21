import {
  StatisticsList,
  StatisticsWrapper,
  StatisticsTitle,
  StatisticsListItem,
  StatisticsText,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(stat => {
          return (
            <StatisticsListItem key={stat.id}>
              <span>{stat.label}</span>
              <StatisticsText>{stat.percentage}%</StatisticsText>
            </StatisticsListItem>
          );
        })}
      </StatisticsList>
    </StatisticsWrapper>
  );
};
