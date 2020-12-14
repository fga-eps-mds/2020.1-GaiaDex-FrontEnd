import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import Logout from '../src/screen/login/logout'

import styles from '../src/screen/login/style'


const wrapper = mount(<Logout />);

describe('<Logout />', () => {
    it('renders everything', () => {
        expect(wrapper).toMatchSnapshot;
        expect(wrapper.find('View').length).toBe(4);
        expect(wrapper.find('Text').length).toBe(2);
        expect(wrapper.find('TouchableOpacity').length).toBe(1);
    });
    it('renders Text correctly', () => {
        expect(wrapper.find('Text').at(0)).toHaveStyle(styles.txtBtnDeleteLogout);
    });
    it('renders TouchableOpacity correctly', () => {
        expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('style',styles.btnButtonLogoutDelete);
        expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    });
});