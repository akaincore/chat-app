import PropTypes from 'prop-types';
import User from './User';

export default {
  chatId: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  sender: PropTypes.shape(User).isRequired,
  createdAt: PropTypes.string.isRequired,
};
