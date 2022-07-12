import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import {Button} from './FeedbackOptions.styled'

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <Box
      display="flex"
      ml={[4]}
      position="relative"
    >
      <Button type="button" onClick={() => onLeaveFeedback(options[0])}>
        Good
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback(options[1])}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback(options[2])}>
        Bad
      </Button>
    </Box>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};