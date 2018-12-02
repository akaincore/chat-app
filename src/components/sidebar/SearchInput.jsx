import React from 'react';
import {withStyles} from '@material-ui/core/styles';
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

const SearchInput = props => {
  const {classes} = props;
  return (
    <div className={classes.container}>
      <Input
        fullWidth={true}
        placeholder="Search chats..."
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
  );
};

export default withStyles(styles)(SearchInput);
