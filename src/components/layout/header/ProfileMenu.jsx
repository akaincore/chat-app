import React from 'react';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import UserFormModal from './UserFormModal';

const styles = () => ({});

class ProfileMenu extends React.Component {
  state = {
    anchorEl: null,
    modalOpen: false,
    userForm: {
      username: '',
      firstName: '',
      lastName: '',
    },
  };

  componentWillReceiveProps(nextProps) {
    const { username, firstName, lastName } = nextProps.currentUser || {};
    this.setState((prevState) => ({
      ...prevState,
      userForm: {
        username,
        firstName,
        lastName,
      },
    }));
  }

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
    this.handleMenuClose();
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  onUserFieldChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    this.setState((prevState) => ({
      userForm: {
        ...prevState.userForm,
        [name]: value,
      },
    }));
  };

  handleUpdateUser = () => {
    const { updateUser } = this.props;
    updateUser(this.state.userForm)
      .then((result) => {
        if (!(result instanceof Error)) {
          this.handleModalClose();
        }
      });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.props.logout();
    this.handleMenuClose();
  };

  render() {
    const { anchorEl, modalOpen, userForm } = this.state;
    const { disabled } = this.props;
    return (
      <div>
        <Button
          disabled={disabled}
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AccountCircle />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleModalOpen}>Edit profile</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
        <UserFormModal
          modalOpen={modalOpen}
          handleModalClose={this.handleModalClose}
          userForm={userForm}
          onUserFieldChange={this.onUserFieldChange}
          handleUpdateUser={this.handleUpdateUser}
        />
      </div>
    );
  }

}

export default withStyles(styles)(ProfileMenu);
