import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import Update from '../src/screen/login/updateUser'

import styles from '../src/screen/login/style'


const wrapper = mount(<Update />);

describe('<Update />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('TextInput').length).toBe(3);
    expect(wrapper.find('View').length).toBe(20);
    expect(wrapper.find('Text').length).toBe(16);
    expect(wrapper.find('TouchableOpacity').length).toBe(4);
    expect(wrapper.find('StatusBar').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(3);
  });

  it('renders Text Input correctly', () => {
    expect(wrapper.find('TextInput').at(0)).toHaveStyle(styles.textinputRegform);
    expect(wrapper.find('TextInput').at(1)).toHaveStyle(styles.textinputRegform);
    expect(wrapper.find('TextInput').at(2)).toHaveStyle(styles.textinputRegform);
    expect(wrapper.find('TextInput').at(0)).toHaveProp('placeholder', 'Nome:');
    expect(wrapper.find('TextInput').at(1)).toHaveProp('placeholder', 'Seu e-mail:');
    expect(wrapper.find('TextInput').at(2)).toHaveProp('placeholder', 'Senha:');
    expect(wrapper.find('TextInput').at(0)).toHaveProp('underlineColorAndroid', 'transparent');
    expect(wrapper.find('TextInput').at(1)).toHaveProp('underlineColorAndroid', 'transparent');
    expect(wrapper.find('TextInput').at(2)).toHaveProp('underlineColorAndroid', 'transparent');
    expect(wrapper.find('TextInput').at(0)).toHaveProp('onChangeText');
    expect(wrapper.find('TextInput').at(1)).toHaveProp('onChangeText');
    expect(wrapper.find('TextInput').at(2)).toHaveProp('onChangeText');

  });

  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.containerRegform);
    expect(wrapper.find('View').at(3)).toHaveStyle(styles.circle4);
    expect(wrapper.find('View').at(4)).toHaveStyle(styles.circle5);
    expect(wrapper.find('View').at(7)).toHaveStyle(styles.direction);
    expect(wrapper.find('View').at(13)).toHaveStyle(styles.viewbtnFbGoogle);
    expect(wrapper.find('View').at(16)).toHaveStyle(styles.viewbtnFbGoogle);
  });

  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.headerRegform);
    expect(wrapper.find('Text').at(0)).toHaveText('Alterar Dados:');
    expect(wrapper.find('Text').at(2)).toHaveStyle(styles.midTxt);
    expect(wrapper.find('Text').at(2)).toHaveText('Alterar');
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.txtBtnFbGoogleRegform);
    expect(wrapper.find('Text').at(8)).toHaveText('Fazer login com o Facebook');
    expect(wrapper.find('Text').at(12)).toHaveStyle(styles.txtBtnFbGoogleRegform);
    expect(wrapper.find('Text').at(12)).toHaveText('Fazer login com o Google');
    expect(wrapper.find('Text').at(14)).toHaveStyle(styles.txtBtnOthersRegform);
    expect(wrapper.find('Text').at(14)).toHaveText('Login');
  });

  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle(styles.midBtn);
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveStyle(styles.btnFbGoogleRegform);
    expect(wrapper.find('TouchableOpacity').at(2)).toHaveStyle(styles.btnFbGoogleRegform);
    expect(wrapper.find('TouchableOpacity').at(3)).toHaveProp('onPress');

  });
  it('renders Icon correctly', () => {
    expect(wrapper.find('Icon').at(0)).toHaveProp('name','arrowright');
    expect(wrapper.find('Icon').at(0)).toHaveProp('size', 35);
    expect(wrapper.find('Icon').at(0)).toHaveProp('color','white');
    expect(wrapper.find('Icon').at(0)).toHaveProp('style',styles.arrow);
    expect(wrapper.find('Icon').at(1)).toHaveProp('name','facebook');
    expect(wrapper.find('Icon').at(1)).toHaveProp('size', 24);
    expect(wrapper.find('Icon').at(1)).toHaveProp('color','#38143E');
    expect(wrapper.find('Icon').at(1)).toHaveProp('style',styles.iconBtnFbGoogle);
    expect(wrapper.find('Icon').at(2)).toHaveProp('name','google');
    expect(wrapper.find('Icon').at(2)).toHaveProp('size', 24);
    expect(wrapper.find('Icon').at(2)).toHaveProp('color','#38143E');
    expect(wrapper.find('Icon').at(2)).toHaveProp('style',styles.iconBtnFbGoogle);
  });
});