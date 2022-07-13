import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { Item } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Box as="ul">
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positivePercentage}%</Item>
    </Box>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
