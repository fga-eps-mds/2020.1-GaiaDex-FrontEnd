import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import renderer from 'react-test-renderer';

import React from 'react';
import Explore from '../src/screen/explore/explore';
import styles from '../src/screen/explore/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<Explore />', () => {
  beforeEach(() => {
    wrapper = mount(<Explore />);
  });

  it('renders everything', () => {
    const tree = renderer.create(<Explore />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(34);
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(6);
    expect(wrapper.find('Text').length).toBe(18);
    expect(wrapper.find('FlatList').length).toBe(2);
    expect(wrapper.find('MenuBar').length).toBe(1);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.container);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.exploreContainer);
    expect(wrapper.find('View').at(4)).toHaveStyle(styles.popularContainer);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.popularTabs);
    expect(wrapper.find('View').at(8)).toHaveStyle(styles.popularContent);
    expect(wrapper.find('View').at(12)).toHaveStyle(styles.myPlantsContainer);
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
  });
  it('renders Icon correctly', () => {
    expect(wrapper.find('Icon').at(0)).toHaveProp('name', 'search');
    expect(wrapper.find('Icon').at(0)).toHaveProp('size', 45);
    expect(wrapper.find('Icon').at(0)).toHaveProp('color', 'black');
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.exploreText);
    expect(wrapper.find('Text').at(0)).toHaveText('Explorar');
    expect(wrapper.find('Text').at(4)).toHaveStyle(styles.popularTab);
    expect(wrapper.find('Text').at(4)).toHaveText('Populares');
    expect(wrapper.find('Text').at(6)).toHaveStyle(styles.popularTab);
    expect(wrapper.find('Text').at(6)).toHaveText('Minhas Plantas');
  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('horizontal');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
  it('renders MenuBar correctly', () => {
    expect(wrapper.find('MenuBar').at(0)).toHaveProp('navigation');
  });
});
