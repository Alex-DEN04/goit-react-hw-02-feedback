import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { nanoid } from 'nanoid';

import { Button, Item } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <Box display="flex" ml={[4]} p={[0]} position="relative" as="ul">
      {options.map(option => (
        <Item key={nanoid()}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </Item>
      ))}
    </Box>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
