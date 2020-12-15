import React from 'react';
import renderer from 'react-test-renderer';

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import Login from '../../src/screen/login/login';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

describe('<Login />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
