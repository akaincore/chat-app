import PropTypes from 'prop-types';
import User from './User';

export default {
  _id: PropTypes.string.isRequired,
  creator: PropTypes.shape(User).isRequired,
  title: PropTypes.string.isRequired,
};
