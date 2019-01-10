import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Message from './Message';
import MessageInput from './MessageInput';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    overflowY: 'auto',
  },
  list: {
    paddingBottom: '100px',
  },
  noChatsMessage: {
    width: '50%',
    margin: '200px auto',
    padding: '50px',
    textAlign: 'center',
  },
});

const Chat = ({ classes, messages }) => (
  <main className={classes.root}>
    <List className={classes.list}>
      {!messages.length &&
      <Paper className={classes.noChatsMessage}>
        There is no messages yet
      </Paper>
      }
      {messages.map((message, index) => {
        return (
          <Message
            key={index}
            sender={message.sender}
            content={message.content}
          />
        );
      })}
    </List>
    <MessageInput />
  </main>
);


export default withStyles(styles)(Chat);
