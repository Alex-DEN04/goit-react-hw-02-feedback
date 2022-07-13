import PropTypes from 'prop-types';

import { Message } from './Message.styled';

export default function NotificationMessage({ message }) {
  return <Message>{message}</Message>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
