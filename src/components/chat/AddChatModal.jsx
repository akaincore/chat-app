import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const AddChatModal = ({
 modalOpen, handleModalClose, title, onTitleChange, handleCreateChat,
}) => (
  <Dialog open={modalOpen} onClose={handleModalClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Create new chat</DialogTitle>
    <DialogContent>
      <TextField
        margin="dense"
        name="title"
        label="Chat title"
        type="text"
        required
        fullWidth
        value={title}
        onChange={onTitleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCreateChat} color="primary">
        Create
      </Button>
      <Button onClick={handleModalClose} color="primary">
        Cancel
      </Button>
    </DialogActions>
  </Dialog>
);

AddChatModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  onTitleChange: PropTypes.func.isRequired,
  handleCreateChat: PropTypes.func.isRequired,
};

AddChatModal.defaultProps = {
  title: '',
};

export default AddChatModal;
