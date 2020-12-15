import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import React from 'react';
import Logout from '../src/screen/login/logout';

import styles from '../src/screen/login/style';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<Logout />', () => {
  beforeEach(() => {
    wrapper = mount(<Logout />);
  });

  it('renders everything', () => {
    const wrapperSnap = shallow(<Logout />);
    expect(wrapperSnap).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(4);
    expect(wrapper.find('Text').length).toBe(2);
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.txtBtnDeleteLogout);
    expect(wrapper.find('Text').at(0)).toHaveText('Sair');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp(
      'style',
      styles.btnButtonLogoutDelete
    );
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
  });
});
