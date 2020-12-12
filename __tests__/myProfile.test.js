import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import MyProfile from '../src/screen/myProfile/index';
import styles from '../src/screen/myProfile/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<MyProfile />);

describe('<MyProfile />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(44);
    //expect(wrapper.find('Header').length).toBe(1);
    //expect(wrapper.find('Switch').length).toBe(3);
    //expect(wrapper.find('Text').length).toBe(16);
    //console.log(wrapper.find('View').length);
  });

});
