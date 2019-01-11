import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import moment from 'moment';
import ChatAvatar from '../common/ChatAvatar';
import User from '../../types/User';
import CurrentUser from '../../types/CurrentUser';

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
  statusMessage: {
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#bbb',
  },
  statusMessageTime: {
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#bbb',
    fontSize: '10px',
  },
  myMessage: {
    flexDirection: 'row-reverse',
  },
  myMessageBackground: {
    backgroundColor: '#66ccff',
  },
  emptyMessage: {
    fontStyle: 'italic',
    color: '#aaa',
  },
});

const Message = ({
 classes, sender, content, currentUser, statusMessage, createdAt,
}) => {
  if (statusMessage) {
    return (
      <div className={classNames(classes.messageContainer)}>
        <Typography component="div" className={classes.statusMessage}>
          <Typography component="p">
            {sender.username}
            {content}
          </Typography>
          <Typography component="p" className={classes.statusMessageTime}>
            {moment(createdAt).fromNow()}
          </Typography>
        </Typography>
      </div>
    );
  }

  const isMy = sender._id === currentUser._id;
  return (
    <div className={classNames(classes.messageContainer, isMy && classes.myMessage)}>
      <ChatAvatar className={classes.avatar} title={sender.username} id={sender._id} />
      <Paper
        className={classNames(classes.root, isMy && classes.myMessageBackground)}
        elevation={1}
      >
        <Typography variant="subtitle2" component="h3">
          {sender.username}
        </Typography>
        <Typography component="p" className={!content ? classes.emptyMessage : ''}>
          {content || 'Message is empty'}
        </Typography>
        <Typography variant="caption" component="span">
          {moment(createdAt).fromNow()}
        </Typography>
      </Paper>
    </div>
  );
};

Message.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  sender: PropTypes.shape(User).isRequired,
  content: PropTypes.string.isRequired,
  currentUser: PropTypes.shape(CurrentUser).isRequired,
  statusMessage: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default withStyles(styles)(Message);
