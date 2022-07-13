import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import { Button, Item } from './FeedbackOptions.styled';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <Box display="flex" ml={[4]} p={[0]} position="relative" as="ul">
      <Item>
        <Button type="button" onClick={() => onLeaveFeedback(options[0])}>
          Good
        </Button>
      </Item>
      <Item>
        <Button type="button" onClick={() => onLeaveFeedback(options[1])}>
          Neutral
        </Button>
      </Item>
      <Item>
        <Button type="button" onClick={() => onLeaveFeedback(options[2])}>
          Bad
        </Button>
      </Item>
    </Box>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
