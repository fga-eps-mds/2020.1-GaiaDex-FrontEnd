import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import PlantCard from '../src/screen/cardPlant/cardPlant';
import styles from '../src/screen/cardPlant/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import renderer from 'react-test-renderer';


const wrapper = mount(<PlantCard navigation={{ getParam: jest.fn() }} />);

describe('<TopicCreate />', () => {
  it('renders everything', () => {
    const tree = renderer
      .create(<PlantCard navigation={{ getParam: jest.fn() }}></PlantCard>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(40);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('ImageBackground').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(30);
    expect(wrapper.find('TouchableOpacity').length).toBe(3);
    expect(wrapper.find('PlantCardTopic').length).toBe(1);
    expect(wrapper.find('NewTopic').length).toBe(1);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.containerView);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.containerPlant);
    expect(wrapper.find('View').at(10)).toHaveStyle(styles.plantInfo);
    expect(wrapper.find('View').at(12)).toHaveStyle(styles.plantInfoStats);
    expect(wrapper.find('View').at(14)).toHaveStyle(styles.plantInfoDiv);
    expect(wrapper.find('View').at(16)).toHaveStyle(styles.plantInfoDiv);
    expect(wrapper.find('View').at(18)).toHaveStyle(styles.plantText);
    expect(wrapper.find('View').at(20)).toHaveStyle(styles.menuBar);
  });
  it('renders Header correctly', () => {
    expect(wrapper.find('Header').at(0)).toHaveProp('navigation');
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(2)).toHaveStyle(styles.plantInfoTitle);
    expect(wrapper.find('Text').at(6)).toHaveStyle(styles.plantInfoText);
    expect(wrapper.find('Text').at(6)).toHaveText(' Usuários');
    expect(wrapper.find('Text').at(10)).toHaveStyle(styles.plantInfoText);
    expect(wrapper.find('Text').at(10)).toHaveText(' Tópicos');

    expect(wrapper.find('Text').at(14)).toHaveStyle(styles.plantTextDescription);
    expect(wrapper.find('Text').at(14)).toHaveText('Esta é uma comunidade certificada/padrão do app. Direcionada para se interagir sobre quaisquer assuntos envolvendo cenouras.');

    expect(wrapper.find('Text').at(16)).toHaveStyle(styles.menuBarTabText);
    expect(wrapper.find('Text').at(16)).toHaveText('Informações');
    expect(wrapper.find('Text').at(20)).toHaveStyle(styles.menuBarTabText);
    expect(wrapper.find('Text').at(20)).toHaveText('Topicos');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle(
      styles.menuBarTab
    );
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveStyle(
      styles.menuBarTab
    );
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveProp('onPress');
  });
  it('renders PlantCardTopic correctly', () => {
    expect(wrapper.find('PlantCardTopic').at(0)).toHaveProp('navigation');
    expect(wrapper.find('PlantCardTopic').at(0)).toHaveProp('plantID');
  });
});
