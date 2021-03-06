import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import renderer from 'react-test-renderer';

import React from 'react';
import result from '../src/screen/scanner/result';
import styles from '../src/screen/scanner/styles';
import stylesEdit from '../src/screen/collection/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const Sresult = result;

let wrapper;

describe('<Scamera />', () => {
  beforeEach(() => {
    wrapper = mount(<Sresult />);
  });

  it('renders everything', () => {
    const tree = renderer.create(<Sresult />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(16);
    expect(wrapper.find('Image').length).toBe(2);
    expect(wrapper.find('TouchableOpacity').length).toBe(3);
    expect(wrapper.find('Icon').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(10);
    expect(wrapper.find('FlatList').length).toBe(1);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.result);
  });
  it('renders Image correctly', () => {
    expect(wrapper.find('Image').at(0)).toHaveStyle(styles.imagem);
    expect(wrapper.find('Image').at(0)).toHaveProp('source');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(2)).toHaveProp('onPress');
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(stylesEdit.editTitle);
    expect(wrapper.find('Text').at(0)).toHaveText(
      'Digite o novo nome para sua planta:'
    );
    expect(wrapper.find('Text').at(2)).toHaveStyle(stylesEdit.editButton);
    expect(wrapper.find('Text').at(2)).toHaveText('FEITO');
    expect(wrapper.find('Text').at(4)).toHaveStyle(stylesEdit.editButton);
    expect(wrapper.find('Text').at(4)).toHaveText('CANCELAR');
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.titulo);
    expect(wrapper.find('Text').at(8)).toHaveText(
      'Esses são os resultados para a sua foto:'
    );
  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
});
