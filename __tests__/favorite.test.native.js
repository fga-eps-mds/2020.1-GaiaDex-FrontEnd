import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import React from 'react';
import Favorite from '../src/screen/collection/components/Favorite';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<Favorite />', () => {
  beforeEach(() => {
    wrapper = mount(<Favorite />);
  });

  it('renders everything', () => {
    const tree = renderer.create(<Favorite />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('FlatList').length).toBe(1);
  });

  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
});
