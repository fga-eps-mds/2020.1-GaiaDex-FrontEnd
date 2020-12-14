import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import Collection from '../src/screen/collection/collection';
import styles from '../src/screen/collection/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<Collection />);

describe('<Collection />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(42);
    expect(wrapper.find('Modal').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(24);
    expect(wrapper.find('TextInput').length).toBe(1);
    expect(wrapper.find('TouchableOpacity').length).toBe(4);
    expect(wrapper.find('MenuBar').length).toBe(1);
    expect(wrapper.find('MyPlants').length).toBe(1);
  });

  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.container);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.editView);
    expect(wrapper.find('View').at(12)).toHaveStyle(styles.exploreContainer);
    expect(wrapper.find('View').at(14)).toHaveStyle(styles.popularContainer);
    expect(wrapper.find('View').at(16)).toHaveStyle(styles.tabContainer);
  });

});
