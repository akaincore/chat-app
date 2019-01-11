import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
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
    <Fab
      disabled={disabled}
      color="primary"
      aria-label="Add"
      className={classes.button}
      onClick={handleModalOpen}
    >
      <AddIcon />
    </Fab>
    <AddChatModal
      modalOpen={modalOpen}
      handleModalClose={handleModalClose}
      title={title}
      onTitleChange={onTitleChange}
      handleCreateChat={handleCreateChat}
    />
  </div>
);

AddChat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  modalOpen: PropTypes.bool.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  handleCreateChat: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AddChat);
