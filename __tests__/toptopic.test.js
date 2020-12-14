import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import TopTopic from '../src/screen/forum/components/TopTopic';
import styles from '../src/screen/forum/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<TopTopic />);

describe('<Config />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(2);
    expect(wrapper.find('FlatList').length).toBe(1);
  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
});
