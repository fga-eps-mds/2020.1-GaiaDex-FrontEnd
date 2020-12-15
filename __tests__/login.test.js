import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import renderer from 'react-test-renderer';

import { gray, purple } from '../src/theme/colorPalette';


import React from 'react';
import Login from '../src/screen/login/login';

import styles from '../src/screen/login/style';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<Login />', () => {
  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it('renders everything', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('TextInput').length).toBe(2);
    expect(wrapper.find('View').length).toBe(26);
    expect(wrapper.find('Text').length).toBe(18);
    expect(wrapper.find('TouchableOpacity').length).toBe(5);
    expect(wrapper.find('StatusBar').length).toBe(1);
  });

  it('renders Text Input correctly', () => {
    expect(wrapper.find('TextInput').at(0)).toHaveStyle(styles.textinputLogin);
    expect(wrapper.find('TextInput').at(1)).toHaveStyle(styles.textinputLogin);
    expect(wrapper.find('TextInput').at(0)).toHaveProp(
      'placeholder',
      'Seu e-mail:'
    );
    expect(wrapper.find('TextInput').at(1)).toHaveProp(
      'placeholder',
      'Sua senha:'
    );
    expect(wrapper.find('TextInput').at(0)).toHaveProp(
      'underlineColorAndroid',
      'transparent'
    );
    expect(wrapper.find('TextInput').at(1)).toHaveProp(
      'underlineColorAndroid',
      'transparent'
    );
    expect(wrapper.find('TextInput').at(0)).toHaveProp('onChangeText');
    expect(wrapper.find('TextInput').at(1)).toHaveProp('onChangeText');
  });

  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.containerLogin);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.circle3);
    expect(wrapper.find('View').at(4)).toHaveStyle(styles.circle2);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.circle1);
    expect(wrapper.find('View').at(8)).toHaveStyle(styles.direction);
    expect(wrapper.find('View').at(14)).toHaveStyle(styles.viewbtnFbGoogle);
    expect(wrapper.find('View').at(20)).toHaveStyle(styles.direction);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.headerLogin);
    expect(wrapper.find('Text').at(0)).toHaveText('Seja bem-vindo');
    expect(wrapper.find('Text').at(2)).toHaveStyle(styles.midTxt);
    expect(wrapper.find('Text').at(2)).toHaveText('Login');
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.txtBtnFbGoogleLogin);
    expect(wrapper.find('Text').at(8)).toHaveText('Fazer login com o Facebook');
    expect(wrapper.find('Text').at(12)).toHaveStyle(styles.txtBtnFbGoogleLogin);
    expect(wrapper.find('Text').at(12)).toHaveText('Fazer login com o Google');
    expect(wrapper.find('Text').at(14)).toHaveStyle(styles.txtBtnOthersLogin);
    expect(wrapper.find('Text').at(14)).toHaveText('Cadastro');
    expect(wrapper.find('Text').at(16)).toHaveStyle(styles.txtBtnOthersLogin);
    expect(wrapper.find('Text').at(16)).toHaveText('Esqueci a senha');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle(styles.midBtn);
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveStyle(
      styles.btnFbGoogleLogin
    );
    expect(wrapper.find('TouchableOpacity').at(2)).toHaveStyle(
      styles.btnFbGoogleLogin
    );
    expect(wrapper.find('TouchableOpacity').at(3)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(4)).toHaveProp('onPress');
  });
  it('renders Icon correctly', () => {
    expect(wrapper.find('Icon').at(0)).toHaveProp('name', 'arrowright');
    expect(wrapper.find('Icon').at(0)).toHaveProp('size', 35);
    expect(wrapper.find('Icon').at(0)).toHaveProp('color', gray.iron());
    expect(wrapper.find('Icon').at(0)).toHaveProp('style', styles.arrow);
    expect(wrapper.find('Icon').at(1)).toHaveProp('name', 'facebook');
    expect(wrapper.find('Icon').at(1)).toHaveProp('size', 24);
    expect(wrapper.find('Icon').at(1)).toHaveProp('color', purple.frenchLilacLighter());
    expect(wrapper.find('Icon').at(1)).toHaveProp(
      'style',
      styles.iconBtnFbGoogle
    );
    expect(wrapper.find('Icon').at(2)).toHaveProp('name', 'google');
    expect(wrapper.find('Icon').at(2)).toHaveProp('size', 24);
    expect(wrapper.find('Icon').at(2)).toHaveProp('color', purple.frenchLilacLighter());
    expect(wrapper.find('Icon').at(2)).toHaveProp(
      'style',
      styles.iconBtnFbGoogle
    );
  });
});
