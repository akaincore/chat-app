import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CurrentUser from '../../types/CurrentUser';

const styles = () => ({
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
  },
});

class MessageInput extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    joinChat: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    currentUser: PropTypes.shape(CurrentUser).isRequired,
    disabled: PropTypes.bool.isRequired,
  };

  state = {
    message: '',
  };

  onMessageChange = event => {
    this.setState({
      message: event.target.value,
    });
  };

  onKeyPress = event => {
    const { message } = this.state;

    if (event.key === 'Enter' && message) {
      this.props.sendMessage(message);
      this.setState({ message: '' });
    }
  };

  render() {
    const {
 classes, joinChat, currentUser, disabled,
} = this.props;
    const { message } = this.state;
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          {currentUser.isChatMember && (
            <Input
              disabled={disabled}
              fullWidth
              placeholder="Type message..."
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
              value={message}
              onChange={this.onMessageChange}
              onKeyPress={this.onKeyPress}
            />
          )}
          {!currentUser.isChatMember && (
            <Button
              disabled={disabled}
              onClick={joinChat}
              fullWidth
              variant="contained"
              color="primary"
            >
              Join
            </Button>
          )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(MessageInput);
