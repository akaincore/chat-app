import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChatAvatar from '../../common/ChatAvatar';

const ChatListItem = ({
 chatId, selected, title, createdAt,
}) => (
  <ListItem button component={Link} to={`/chat/${chatId}`} selected={selected}>
    <ChatAvatar title={title} id={chatId} />
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
  </ListItem>
);

ChatListItem.propTypes = {
  chatId: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

ChatListItem.defaultProps = {
  selected: false,
};

export default ChatListItem;
