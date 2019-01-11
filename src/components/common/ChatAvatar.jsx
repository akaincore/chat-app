import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import initials from '../utils/initials';
import getColor from '../utils/colors';

const ChatAvatar = ({ title, id, ...rest }) => (
  <Avatar style={{ backgroundColor: getColor(id) }} {...rest}>
    {initials(title)}
  </Avatar>
);

ChatAvatar.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ChatAvatar;
