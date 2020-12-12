import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import { mount } from 'enzyme';
import PlantCardTopic from '../src/screen/cardPlant/plantTopic/cardPlantTopic';
import NewTopic from '../src/screen/cardPlant/plantTopic/newTopic';
import styles from '../src/screen/cardPlant/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<PlantCardTopic />);
const wrapperNewTopic = mount(<NewTopic />);

describe('<PlantCardTopic />', () => {
  it('renders everything in PlantCardTopic', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(10);
    expect(wrapper.find('Text').length).toBe(4);
    expect(wrapper.find('FlatList').length).toBe(2);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.containerBody);
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.bodyPlants);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.bodyTopics);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(0)).toHaveStyle(styles.bodyPlantsTitle);
    expect(wrapper.find('Text').at(2)).toHaveStyle(styles.bodyPlantsTitle);
  });
  it('renders FlatList correctly', () => {
    expect(wrapper.find('FlatList').at(0)).toHaveProp('data');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('renderItem');
    expect(wrapper.find('FlatList').at(0)).toHaveProp('keyExtractor');
  });
});

describe('<NewTopic />', () => {
  it('renders everything in NewTopic', () => {
    expect(wrapperNewTopic).toMatchSnapshot;
    expect(wrapperNewTopic.find('View').length).toBe(4);
  });
  it('renders View of NewTopic correctly', () => {
    expect(wrapperNewTopic.find('View').at(0)).toHaveStyle(
      styles.ButtonBackground
    );
    expect(wrapperNewTopic.find('View').at(2)).toHaveStyle(styles.ButtonDiv);
  });
});
