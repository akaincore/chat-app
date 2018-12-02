import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Message from "./Message";
import MessageInput from "./MessageInput";

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    overflowY: 'auto',
    paddingBottom: '100px',
  },
});

class MessagesList extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <List>
          {this.props.messages.map((message, index) => {
            return (
              <Message
                key={index}
                sender={message.sender}
                content={message.content}
              />
            )
          })}
        </List>
        <MessageInput/>
      </div>
    );
  }
}

export default withStyles(styles)(MessagesList);
