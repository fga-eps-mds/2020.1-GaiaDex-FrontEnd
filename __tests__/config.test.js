import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import React from 'react';
import Config from '../src/screen/config/config';
import styles from '../src/screen/config/styles';
import Header from '../src/screen/config/header';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;
const wrapperHeader = mount(<Header />);

describe('<Config />', () => {
  beforeEach(() => {
    wrapper = mount(<Config />);
  });

  it('renders everything', () => {
    const tree = renderer.create(<Config />).toJSON();
    expect(tree).toMatchSnapshot();
    const tree2 = renderer.create(<Header />).toJSON();
    expect(tree2).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(24);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('Switch').length).toBe(3);
    expect(wrapper.find('Text').length).toBe(16);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.containerView);
    expect(wrapper.find('View').at(6)).toHaveStyle(
      styles.notificationContainer
    );
    expect(wrapper.find('View').at(8)).toHaveStyle(styles.notification);
    expect(wrapper.find('View').at(10)).toHaveStyle(styles.notification);
    expect(wrapper.find('View').at(12)).toHaveStyle(styles.notification);
    expect(wrapper.find('View').at(14)).toHaveStyle(styles.notification);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(6)).toHaveStyle(styles.notificationText);
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.notificationText);
    expect(wrapper.find('Text').at(10)).toHaveStyle(styles.notificationText);
  });
  it('renders Header correctly', () => {
    expect(wrapper.find('Header').at(0)).toExist();
    expect(wrapperHeader.find('View').at(0)).toHaveStyle(
      styles.containerHeader
    );
    expect(wrapperHeader.find('TouchableOpacity').at(0)).toHaveStyle(
      styles.containerHeaderIcon
    );
    expect(wrapperHeader.find('Text').at(2)).toHaveStyle(styles.headerTitle);
  });
  it('renders Switch correctly', () => {
    expect(wrapper.find('Switch').at(0)).toExist();
    expect(wrapper.find('Switch').at(0)).toHaveProp('trackColor', {
      false: '#767577',
      true: '#81b0ff',
    });
    expect(wrapper.find('Switch').at(0)).toHaveProp('thumbColor');
    expect(wrapper.find('Switch').at(0)).toHaveProp(
      'ios_backgroundColor',
      '#3e3e3e'
    );
    expect(wrapper.find('Switch').at(1)).toExist();
    expect(wrapper.find('Switch').at(1)).toHaveProp('trackColor', {
      false: '#767577',
      true: '#81b0ff',
    });
    expect(wrapper.find('Switch').at(1)).toHaveProp('thumbColor');
    expect(wrapper.find('Switch').at(1)).toHaveProp(
      'ios_backgroundColor',
      '#3e3e3e'
    );
    expect(wrapper.find('Switch').at(2)).toExist();
    expect(wrapper.find('Switch').at(2)).toHaveProp('trackColor', {
      false: '#767577',
      true: '#81b0ff',
    });
    expect(wrapper.find('Switch').at(2)).toHaveProp('thumbColor');
    expect(wrapper.find('Switch').at(2)).toHaveProp(
      'ios_backgroundColor',
      '#3e3e3e'
    );
  });
  it('renders Logout', () => {
    expect(wrapper.find('Logout').at(0)).toExist();
  });
  it('renders DeleteMyAccount', () => {
    expect(wrapper.find('DeleteMyAccount').at(0)).toExist();
  });
});
