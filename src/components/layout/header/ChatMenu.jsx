import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';

class ChatMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onChatLeave = () => {
    this.props.leaveChat();
    this.handleClose();
  };

  onChatDelete = () => {
    this.props.deleteChat();
    this.handleClose();
  };

  render() {
    const { anchorEl } = this.state;
    const { currentUser } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVert />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {currentUser.isMember &&
          <MenuItem onClick={this.onChatLeave}>Leave chat</MenuItem>
          }
          {currentUser.isCreator &&
          <MenuItem onClick={this.onChatDelete}>Delete chat</MenuItem>
          }
        </Menu>
      </div>
    );
  }
}

export default ChatMenu;
