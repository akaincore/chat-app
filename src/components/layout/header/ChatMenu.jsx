import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';
import CurrentUser from '../../../types/CurrentUser';

class ChatMenu extends React.Component {
  static propTypes = {
    leaveChat: PropTypes.func.isRequired,
    deleteChat: PropTypes.func.isRequired,
    currentUser: PropTypes.shape(CurrentUser).isRequired,
    disabled: PropTypes.bool.isRequired,
  };

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
    const { currentUser, disabled } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          disabled={disabled}
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
          {currentUser.isMember && <MenuItem onClick={this.onChatLeave}>Leave chat</MenuItem>}
          {currentUser.isCreator && <MenuItem onClick={this.onChatDelete}>Delete chat</MenuItem>}
        </Menu>
      </div>
    );
  }
}

export default ChatMenu;
