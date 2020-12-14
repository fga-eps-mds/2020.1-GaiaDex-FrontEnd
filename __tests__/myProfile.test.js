import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import MyProfile from '../src/screen/myProfile/index';
import styles from '../src/screen/myProfile/styles';
import renderer from 'react-test-renderer';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<MyProfile />);

describe('<MyProfile />', () => {
  it('renders everything', () => {
    const tree = renderer
      .create(<MyProfile></MyProfile>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(44);
    expect(wrapper.find('Text').length).toBe(36);
    expect(wrapper.find('ImageBackground').length).toBe(2);
    expect(wrapper.find('FlatList').length).toBe(1);
    expect(wrapper.find('MenuBar').length).toBe(1);
  });

  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.framePerfil);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.perfilTextView);
    expect(wrapper.find('View').at(8)).toHaveStyle(styles.sumary);
    expect(wrapper.find('View').at(14)).toHaveStyle(styles.sumaryComponents);
    expect(wrapper.find('View').at(22)).toHaveStyle(styles.frameDown);
    expect(wrapper.find('View').at(24)).toHaveStyle(styles.list);
  });

  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.perfilText);
    expect(wrapper.find('Text').at(4)).toHaveStyle(styles.name);
    expect(wrapper.find('Text').at(24)).toHaveStyle(styles.minhasAtividades);
  });

  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
});
