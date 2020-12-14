import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import Favorite from '../src/screen/collection/components/Favorite';
import styles from '../src/screen/collection/styles';
import renderer from 'react-test-renderer';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<Favorite />);

describe('<Favorite />', () => {
  it('renders everything', () => {
    const tree = renderer
      .create(<Favorite></Favorite>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('FlatList').length).toBe(1);
  });

  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
  
});
