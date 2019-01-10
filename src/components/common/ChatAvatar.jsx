import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import initials from '../utils/initials';
import getColor from '../utils/colors';

const ChatAvatar = ({ title, ...rest }) => (
  <Avatar
    style={{ backgroundColor: getColor(title) }}
    {...rest}
  >
    {initials(title)}
  </Avatar>
);

export default ChatAvatar;
