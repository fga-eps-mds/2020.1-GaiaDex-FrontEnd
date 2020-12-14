import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import Comments from '../src/screen/topic/comment/Comments';
import renderer from 'react-test-renderer';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<Comments />', () => {

  beforeEach(() => {
    wrapper = mount(<Comments />);
  });

  it('renders everything', () => {
    const tree = renderer
      .create(<Comments></Comments>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(2);
    expect(wrapper.find('ScrollView').length).toBe(1);
    expect(wrapper.find('FlatList').length).toBe(1);
  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
});
