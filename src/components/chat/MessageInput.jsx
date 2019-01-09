import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    bottom: '10px',
    width: 'calc(100% - 320px)',
  },
  input: {
    margin: '20px 10px',
    width: '98%',
  },
  paper: {
    width: '90%',
  }
});

const MessageInput = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Input
          fullWidth={true}
          placeholder="Type message..."
          className={classes.input}
          inputProps={{
            'aria-label': 'Description',
          }}
        />
      </Paper>
    </div>
  );
};

export default withStyles(styles)(MessageInput);
