import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import result from '../src/screen/scanner/result';
import styles from '../src/screen/scanner/styles'

const Sresult = result;


const wrapper = mount(<Sresult />);

describe('<Scamera />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(6);
    expect(wrapper.find('Image').length).toBe(2);
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(4);
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
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle({ margin: 10 });
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');

  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(2)).toHaveText('Esses são os resultados para a sua foto:');

  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });

});