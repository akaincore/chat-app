import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChatAvatar from '../../common/ChatAvatar';

const ChatListItem = ({ chatId, selected, onClick, title, hint }) => {
  return (
    <ListItem
      button
      component={Link}
      to={`/chat/${chatId}`}
      selected={selected}
      onClick={onClick}
    >
      <ChatAvatar
        title={title}
      />
      <ListItemText
        primary={title}
        secondary={hint}
      />
    </ListItem>
  );
};

export default ChatListItem;
