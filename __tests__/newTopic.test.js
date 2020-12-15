import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import renderer from 'react-test-renderer';

import React from 'react';
import NewTopic from '../src/screen/forum/components/NewTopic';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<NewTopic />', () => {
  beforeEach(() => {
    wrapper = mount(<NewTopic />);
  });

  it('renders everything', () => {
    const tree = renderer.create(<NewTopic />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('TouchableOpacity').length).toBe(0);
    expect(wrapper.find('ImageBackground').length).toBe(0);
    expect(wrapper.find('View').length).toBe(2);
    expect(wrapper.find('Text').length).toBe(0);
    expect(wrapper.find('FontAwesome5').length).toBe(0);
    expect(wrapper.find('AntDesign').length).toBe(0);
    expect(wrapper.find('FlatList').length).toBe(1);
  });
});
