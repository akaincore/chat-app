export default {
  API_URI:
    process.env.NODE_ENV === 'production'
      ? 'https://dogecodes-chat-api.herokuapp.com/v1'
      : 'http://10.102.100.176:9999/v1',
  SOCKETS_URI:
    process.env.NODE_ENV === 'production'
      ? 'wss://dogecodes-chat-api.herokuapp.com/'
      : 'ws://10.102.100.176:9999/',
};
