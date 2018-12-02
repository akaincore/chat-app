import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import initials from "../../utils/initials";

const ChatListItem = props => {
  return (
    <ListItem
      button
      selected={props.selected}
      onClick={props.onClick}
    >
      <Avatar>
        {initials(props.title)}
      </Avatar>
      <ListItemText
        primary={props.title}
        secondary={props.hint}
      />
    </ListItem>
  );
};

export default ChatListItem;
