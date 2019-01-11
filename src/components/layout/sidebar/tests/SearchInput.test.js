/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchInput from '../SearchInput';

const mockProps = {
  onSearch: jest.fn(),
  value: 'foo',
};

describe('<SearchInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchInput {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<SearchInput {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
