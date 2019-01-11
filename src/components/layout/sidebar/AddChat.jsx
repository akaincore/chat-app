import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddChatModal from '../../chat/AddChatModal';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: '55px',
    right: '10px',
  },
});

const AddChat = ({
                   classes,
                   modalOpen,
                   handleModalOpen,
                   handleModalClose,
                   title,
                   onTitleChange,
                   handleCreateChat,
                   disabled,
                 }) => (
  <div>
    <Button
      disabled={disabled}
      variant="fab"
      color="primary"
      aria-label="Add"
      className={classes.button}
      onClick={handleModalOpen}
    >
      <AddIcon />
    </Button>
    <AddChatModal
      modalOpen={modalOpen}
      handleModalClose={handleModalClose}
      title={title}
      onTitleChange={onTitleChange}
      handleCreateChat={handleCreateChat}
    />
  </div>
);

export default withStyles(styles)(AddChat);
