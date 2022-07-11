import PropTypes from 'prop-types';

export default function NotificationMessage({ message }) {
  return <p>{message}</p>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
//   userName: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.objectOf(PropTypes.number),
};
