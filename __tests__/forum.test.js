import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import Forum from '../src/screen/forum/forum';
import styles from '../src/screen/forum/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<Forum />);

describe('<Forum />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(34);
    expect(wrapper.find('Text').length).toBe(22);
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
    expect(wrapper.find('FlatList').length).toBe(2);
    expect(wrapper.find('MenuBar').length).toBe(1);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.container);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.forumContainer);
    expect(wrapper.find('View').at(4)).toHaveStyle(styles.myforumsContainer);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.myforumsTabs);
    expect(wrapper.find('View').at(8)).toHaveStyle(styles.myforumsContent);
    expect(wrapper.find('View').at(12)).toHaveStyle(styles.topPostContainer);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.forumText);
    expect(wrapper.find('Text').at(4)).toHaveStyle(styles.myforumsTab);
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.topPostTextactive);
    expect(wrapper.find('Text').at(8)).toHaveText('Top posts');
    expect(wrapper.find('Text').at(10)).toHaveStyle(styles.topPostText);
    expect(wrapper.find('Text').at(10)).toHaveText('Novos');
  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('horizontal');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle(
      styles.topPostTabs
    );
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
  });
  it('renders MenuBar correctly', () => {
    expect(wrapper.find('MenuBar').at(0)).toHaveProp('navigation');
  });
});
