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
});

class ChatList extends React.Component {

  state = {
    selectedIndex: 1,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes, chats } = this.props;
    return (
      <div className={classes.root}>
        <List>
          {chats.map((chat, index) => {
            return (
              <ChatListItem
                key={index}
                selected={this.state.selectedIndex === index}
                onClick={event => this.handleListItemClick(event, index)}
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
