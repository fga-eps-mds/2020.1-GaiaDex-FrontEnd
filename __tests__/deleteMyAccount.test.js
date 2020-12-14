import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import DeleteMyAccount from '../src/screen/login/deleteMyAccount'

import styles from '../src/screen/login/style'


const wrapper = mount(<DeleteMyAccount />);

describe('<DeleteMyAccount />', () => {
    it('renders everything', () => {
        expect(wrapper).toMatchSnapshot;
        expect(wrapper.find('View').length).toBe(4);
        expect(wrapper.find('Text').length).toBe(2);
        expect(wrapper.find('TouchableOpacity').length).toBe(1);
    });
    it('renders Text correctly', () => {
        expect(wrapper.find('Text').at(0)).toHaveStyle(styles.txtBtnDeleteLogout);
        expect(wrapper.find('Text').at(0)).toHaveText('Deletar minha conta');
    });
    it('renders TouchableOpacity correctly', () => {
        expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('style',[styles.btnButtonLogoutDelete, {borderWidth: 1, borderColor: 'red' }]);
        expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    });
});