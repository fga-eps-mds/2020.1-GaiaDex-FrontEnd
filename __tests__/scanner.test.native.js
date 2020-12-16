import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import React from 'react';
import { gray } from '../src/theme/colorPalette';

import camera from '../src/screen/scanner/index';
import styles from '../src/screen/scanner/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const Scamera = camera;

let wrapper;

describe('<Scamera />', () => {
  beforeEach(() => {
    wrapper = mount(<Scamera />);
  });

  it('renders everything', () => {
    const wrapperSnap = shallow(<Scamera />);
    expect(wrapperSnap).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(16);
    expect(wrapper.find('Camera').length).toBe(1);
    expect(wrapper.find('TouchableOpacity').length).toBe(5);
    expect(wrapper.find('Icon').length).toBe(3);
    expect(wrapper.find('Text').length).toBe(10);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.container);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.botoesConteinerTop);
    expect(wrapper.find('View').at(8)).toHaveStyle(
      styles.botoesConteinerBottom
    );
  });
  it('renders Camera correctly', () => {
    expect(wrapper.find('Camera').at(0)).toHaveStyle(styles.camera);
    expect(wrapper.find('Camera').at(0)).toHaveProp('type');
    expect(wrapper.find('Camera').at(0)).toHaveProp('flashMode');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle(
      styles.buttonFlip
    );
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveStyle(
      styles.buttonFlip
    );
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(2)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(2)).toHaveProp('style');
    expect(wrapper.find('TouchableOpacity').at(3)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(4)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(4)).toHaveProp('style');

    expect(wrapper.find('Icon').at(0)).toHaveProp('name', 'flash-off');
    wrapper.find('TouchableOpacity').at(0).simulate('click');
    expect(wrapper.find('Icon').at(0)).toHaveProp('name', 'flash-auto');
    wrapper.find('TouchableOpacity').at(0).simulate('click');
    expect(wrapper.find('Icon').at(0)).toHaveProp('name', 'flash');
    wrapper.find('TouchableOpacity').at(0).simulate('click');
    expect(wrapper.find('Icon').at(0)).toHaveProp('name', 'flashlight');
    wrapper.find('TouchableOpacity').at(0).simulate('click');
    expect(wrapper.find('Icon').at(0)).toHaveProp('name', 'flash-off');
    wrapper.find('TouchableOpacity').at(2).simulate('click');
    expect(wrapper.find('TouchableOpacity').at(2)).toHaveStyle(
      styles.buttonActived
    );
    expect(wrapper.find('TouchableOpacity').at(4)).toHaveStyle(
      styles.buttonDisabled
    );
    wrapper.find('TouchableOpacity').at(4).simulate('click');
    expect(wrapper.find('TouchableOpacity').at(2)).toHaveStyle(
      styles.buttonDisabled
    );
    expect(wrapper.find('TouchableOpacity').at(4)).toHaveStyle(
      styles.buttonActived
    );
  });
  it('renders Icon correctly', () => {
    expect(wrapper.find('Icon').at(1)).toHaveProp('name', 'camerao');
    expect(wrapper.find('Icon').at(1)).toHaveProp('size', 36);
    expect(wrapper.find('Icon').at(1)).toHaveProp('color', gray.iron());
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(5)).toHaveText('Flor');
    expect(wrapper.find('Text').at(8)).toHaveText('Folha');
  });
});
