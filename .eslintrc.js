module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'browser': true
  },
  'rules': {
    // conscious choice
    'indent': 0, // breaks ide code reformat
    'react/jsx-indent': 0, // breaks ide code reformat
    'no-underscore-dangle': 0, // breaks chat._id props and another vars
    'no-console': 0, // breaks some predefined files, debugging issues
    'react/jsx-filename-extension': 0, // breaks some predefined files
    'padded-blocks': 0, // uncomfortable to use
    'operator-linebreak': 0, // uncomfortable to use
    'react/destructuring-assignment': 0, // uncomfortable to use with single prop
    'arrow-parens': 0, // uncomfortable
    // not implemented yet
    'react/prop-types': 0,
  }
};
