import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChatAvatar from "../../common/ChatAvatar";

const ChatListItem = props => {
  return (
    <ListItem
      button
      selected={props.selected}
      onClick={props.onClick}
    >
      <ChatAvatar
        title={props.title}
      />
      <ListItemText
        primary={props.title}
        secondary={props.hint}
      />
    </ListItem>
  );
};

export default ChatListItem;
