import PropTypes from 'prop-types';
import { StatList } from './Statistics.styled';
export const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <StatList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
