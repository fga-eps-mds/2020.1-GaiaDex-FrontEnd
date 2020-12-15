import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import renderer from 'react-test-renderer';
import React from 'react';
import Collection from '../src/screen/collection/collection';
import styles from '../src/screen/collection/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);



let wrapper;

describe('<Collection />', () => {
  beforeEach(() => {
    wrapper = mount(<Collection />);
  });

  it('renders everything', () => {
    let wrapperSnap = shallow(<Collection />)
    expect(wrapperSnap).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(42);
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

  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.editTitle);
    expect(wrapper.find('Text').at(0)).toHaveText('Digite o novo nome para sua planta:');
    expect(wrapper.find('Text').at(2)).toHaveStyle(styles.editButton);
    expect(wrapper.find('Text').at(2)).toHaveText('FEITO');
    expect(wrapper.find('Text').at(4)).toHaveStyle(styles.editButton);
    expect(wrapper.find('Text').at(4)).toHaveText('CANCELAR');
    expect(wrapper.find('Text').at(6)).toHaveStyle(styles.exploreText);
    expect(wrapper.find('Text').at(6)).toHaveText('Coleção');
    expect(wrapper.find('Text').at(10)).toHaveStyle(styles.tabTextActive);
    expect(wrapper.find('Text').at(10)).toHaveText('Minhas Plantas');
    expect(wrapper.find('Text').at(12)).toHaveStyle(styles.tabText);
    expect(wrapper.find('Text').at(12)).toHaveText('Favoritas');
  });

  it('renders TextInput correctly', () => {
    expect(wrapper.find('TextInput').at(0)).toHaveStyle(styles.editTextInput);
    expect(wrapper.find('TextInput').at(0)).toHaveProp('onChangeText');
    expect(wrapper.find('TextInput').at(0)).toHaveProp('autoFocus');
  });

  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(2)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(3)).toHaveProp('onPress');
  });

  it('renders MenuBar correctly', () => {
    expect(wrapper.find('MenuBar').at(0)).toHaveProp('navigation');
  });

  it('renders Modal correctly', () => {
    expect(wrapper.find('Modal').at(0)).toHaveProp('visible');
  });

  it('renders MyPlants correctly', () => {
    expect(wrapper.find('MyPlants').at(0)).toHaveProp('user');
    expect(wrapper.find('MyPlants').at(0)).toHaveProp('setUser');
    expect(wrapper.find('MyPlants').at(0)).toHaveProp('navigation');
    expect(wrapper.find('MyPlants').at(0)).toHaveProp('setPlantTab');
    expect(wrapper.find('MyPlants').at(0)).toHaveProp('setPlantToUpdate');
    expect(wrapper.find('MyPlants').at(0)).toHaveProp('setEditingText');
  });
});
