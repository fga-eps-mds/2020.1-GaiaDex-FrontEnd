import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import Favorite from '../src/screen/collection/Favorite';
import styles from '../src/screen/collection/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<Favorite />);

describe('<Favorite />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(28);
    expect(wrapper.find('Text').length).toBe(16);
    expect(wrapper.find('FlatList').length).toBe(1);
    expect(wrapper.find('MenuBar').length).toBe(1); 
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.container);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.header);
    expect(wrapper.find('View').at(4)).toHaveStyle(styles.headerIcon);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.headerTitle);
    expect(wrapper.find('View').at(8)).toHaveStyle(styles.body);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(2)).toHaveStyle(styles.headerTitleText);
  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
});
