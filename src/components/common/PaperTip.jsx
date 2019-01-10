import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  paperMessage: {
    width: '50%',
    margin: '100px auto',
    padding: '50px',
    maxWidth: '400px',
    textAlign: 'center',
  },
});

const PaperTip = ({ classes, message }) => (
  <Paper className={classes.paperMessage}>
    {message}
  </Paper>
);

export default withStyles(styles)(PaperTip);
