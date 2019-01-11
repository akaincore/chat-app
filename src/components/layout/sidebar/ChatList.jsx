import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from './ChatListItem';
import Chat from '../../../types/Chat';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflowY: 'auto',
  },
  chatList: {
    paddingBottom: '60px',
  },
});

const ChatList = ({
 classes, chats, activeChat, disabled,
}) => (
  <div className={classes.root}>
    <List className={classes.chatList}>
      {chats.map(chat => (
        <ChatListItem
          disabled={disabled}
          key={chat._id}
          chatId={chat._id}
          selected={activeChat && activeChat._id === chat._id}
          {...chat}
        />
      ))}
    </List>
  </div>
);

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  chats: PropTypes.arrayOf(PropTypes.shape(Chat)).isRequired,
  activeChat: PropTypes.shape(Chat),
  disabled: PropTypes.bool.isRequired,
};

ChatList.defaultProps = {
  activeChat: null,
};

export default withStyles(styles)(ChatList);
