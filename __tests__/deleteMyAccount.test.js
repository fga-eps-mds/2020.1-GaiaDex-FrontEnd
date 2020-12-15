import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import renderer from 'react-test-renderer';

import React from 'react';
import DeleteMyAccount from '../src/screen/login/deleteMyAccount';

import styles from '../src/screen/login/style';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<DeleteMyAccount />', () => {
  beforeEach(() => {
    wrapper = mount(<DeleteMyAccount />);
  });

  it('renders everything', () => {
    const tree = renderer.create(<DeleteMyAccount />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(4);
    expect(wrapper.find('Text').length).toBe(2);
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.txtBtnDeleteLogout);
    expect(wrapper.find('Text').at(0)).toHaveText('Deletar minha conta');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('style', [
      styles.btnButtonLogoutDelete,
      { borderWidth: 1, borderColor: 'red' },
    ]);
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
  });
});
