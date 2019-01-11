import PropTypes from 'prop-types';
import User from './User';

export default {
  ...User,
  isMember: PropTypes.bool.isRequired,
  isChatMember: PropTypes.bool.isRequired,
  isCreator: PropTypes.bool.isRequired,
};
