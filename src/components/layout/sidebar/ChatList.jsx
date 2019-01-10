import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from './ChatListItem';

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

class ChatList extends React.Component {

  render() {
    const {
      classes,
      chats,
      activeChat,
      setActiveChat,
    } = this.props;
    return (
      <div className={classes.root}>
        <List className={classes.chatList}>
          {chats.map((chat) => {
            return (
              <ChatListItem
                key={chat._id}
                selected={activeChat && activeChat._id === chat._id}
                onClick={() => {setActiveChat(chat._id);}}
                title={chat.title}
                hint={'some additional info'}
              />
            );
          })}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(ChatList);
