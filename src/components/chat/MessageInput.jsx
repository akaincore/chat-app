import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

class MessageInput extends React.Component {

  state = {
    message: '',
  };

  onMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  onKeyPress = (event) => {
    const { message } = this.state;

    if (event.key === 'Enter' && message) {
      this.props.sendMessage(message);
      this.setState({ message: '' });
    }
  };

  render() {
    const {
      classes,
      joinChat,
      currentUser,
    } = this.props;
    const { message } = this.state;
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          {currentUser.isChatMember &&
          <Input
            fullWidth={true}
            placeholder="Type message..."
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            value={message}
            onChange={this.onMessageChange}
            onKeyPress={this.onKeyPress}
          />
          }
          {!currentUser.isChatMember &&
          <Button
            onClick={joinChat}
            fullWidth
            variant="contained"
            color="primary"
          >
            Join
          </Button>
          }
        </Paper>
      </div>
    );
  };

}

export default withStyles(styles)(MessageInput);
