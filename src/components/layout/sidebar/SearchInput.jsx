import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const SearchInput = ({ classes, value, onSearch }) => (
  <div className={classes.container}>
    <Input
      fullWidth
      placeholder="Search chats..."
      className={classes.input}
      value={value}
      onChange={onSearch}
      inputProps={{
        'aria-label': 'Description',
      }}
    />
  </div>
);

export default withStyles(styles)(SearchInput);
