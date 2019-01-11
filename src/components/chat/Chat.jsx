import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Message from './Message';
import MessageInput from './MessageInput';
import PaperTip from '../common/PaperTip';

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
});

class Chat extends React.Component {

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const {
      classes,
      messages,
      sendMessage,
      joinChat,
      activeChat,
      currentUser,
      isConnected,
    } = this.props;
    return (
      <main className={classes.root}>
        <List className={classes.list}>
          {!messages.length &&
          <PaperTip
            message={'There is no messages yet'}
          />
          }
          {messages.map((message) => (
            <Message
              key={message._id}
              sender={message.sender}
              content={message.content}
              currentUser={currentUser}
              statusMessage={message.statusMessage}
              createdAt={message.createdAt}
            />
          ))}
          <div
            ref={(el) => {
              this.messagesEnd = el;
            }}
          />
        </List>
        <MessageInput
          disabled={!isConnected}
          sendMessage={sendMessage}
          joinChat={() => joinChat(activeChat._id)}
          currentUser={currentUser}
        />
      </main>
    );
  }
}


export default withStyles(styles)(Chat);
