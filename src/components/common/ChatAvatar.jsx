import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import initials from '../utils/initials';
import getColor from '../utils/colors';

const ChatAvatar = ({ title, id,  ...rest }) => (
  <Avatar
    style={{ backgroundColor: getColor(id) }}
    {...rest}
  >
    {initials(title)}
  </Avatar>
);

export default ChatAvatar;
