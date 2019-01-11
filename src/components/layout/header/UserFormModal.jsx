import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const UserFormModal = ({
  modalOpen,
  handleModalClose,
  userForm,
  onUserFieldChange,
  handleUpdateUser,
}) => {
  const { username, firstName, lastName } = userForm;
  return (
    <Dialog open={modalOpen} onClose={handleModalClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="username"
          label="Username"
          type="text"
          required
          fullWidth
          value={username}
          onChange={onUserFieldChange}
        />
        <TextField
          margin="dense"
          name="firstName"
          label="First name"
          type="text"
          fullWidth
          value={firstName}
          onChange={onUserFieldChange}
        />
        <TextField
          margin="dense"
          name="lastName"
          label="Last name"
          type="text"
          fullWidth
          value={lastName}
          onChange={onUserFieldChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleUpdateUser} color="primary">
          Save
        </Button>
        <Button onClick={handleModalClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserFormModal;
