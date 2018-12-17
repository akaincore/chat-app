import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: '55px',
    right: '10px',
  },
});

const AddChat = props => {
  const { classes } = props;
  return (
    <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
      <AddIcon/>
    </Button>
  );
};

export default withStyles(styles)(AddChat);
