import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import NewTopic from '../src/screen/forum/components/NewTopic';
import styles from '../src/screen/forum/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<NewTopic />);

describe('<NewTopic />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('TouchableOpacity').length).toBe(0);
    expect(wrapper.find('ImageBackground').length).toBe(0);
    expect(wrapper.find('View').length).toBe(2);
    expect(wrapper.find('Text').length).toBe(0);
    expect(wrapper.find('FontAwesome5').length).toBe(0);
    expect(wrapper.find('AntDesign').length).toBe(0);
    expect(wrapper.find('FlatList').length).toBe(1);
  });
});
