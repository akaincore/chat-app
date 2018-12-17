import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import ChatAvatar from "../common/ChatAvatar";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: '70%',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: '20px 0',
  },
  avatar: {
    margin: '0 20px',
  },
  myMessage: {
    flexDirection: 'row-reverse',
  },
  myMessageBackground: {
    backgroundColor: '#66ccff',
  }
});

const Message = props => {
  const { classes } = props;
  const isMy = props.sender === 'me';
  return (
    <div
      className={classNames(classes.messageContainer, isMy && classes.myMessage)}
    >
      <ChatAvatar
        className={classes.avatar}
        title={props.sender}
      />
      <Paper
        className={classNames(classes.root, isMy && classes.myMessageBackground)}
        elevation={1}
      >
        <Typography variant="subtitle2" component="h3">
          {props.sender}
        </Typography>
        <Typography component="p">
          {props.content}
        </Typography>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Message);
