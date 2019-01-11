import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChatAvatar from '../../common/ChatAvatar';
import moment from 'moment';

const ChatListItem = ({ chatId, selected, onClick, title, createdAt }) => {
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
        id={chatId}
      />
      <ListItemText
        primary={title}
        secondary={moment(createdAt).fromNow()}
      />
    </ListItem>
  );
};

export default ChatListItem;
