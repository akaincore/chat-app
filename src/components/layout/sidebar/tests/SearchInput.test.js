/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from '../SearchInput';

const mockProps = {
  onSearch: jest.fn(),
  value: 'foo',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchInput {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
