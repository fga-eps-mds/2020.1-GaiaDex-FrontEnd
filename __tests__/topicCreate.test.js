import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import renderer from 'react-test-renderer';

import { gray } from '../src/theme/colorPalette';

import React from 'react';
import TopicCreate from '../src/screen/topic/TopicCreate';
import styles from '../src/screen/topic/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<TopicCreate />', () => {
  beforeEach(() => {
    wrapper = mount(<TopicCreate navigation={{ getParam: jest.fn() }} />);
  });

  it('renders everything', () => {
    const tree = renderer
      .create(<TopicCreate navigation={{ getParam: jest.fn() }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('View').length).toBe(16);
    expect(wrapper.find('Text').length).toBe(10);
    expect(wrapper.find('TouchableOpacity').length).toBe(1);
    expect(wrapper.find('Icon').length).toBe(2);
    expect(wrapper.find('TextInput').length).toBe(2);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(
      styles.TopicCreatemasterView
    );
    expect(wrapper.find('View').at(2)).toHaveStyle(styles.TopicCreateheader);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.TopicCreatecontainer);
    expect(wrapper.find('View').at(8)).toHaveStyle(styles.TopicCreateUserDiv);
    expect(wrapper.find('View').at(10)).toHaveStyle(
      styles.TopicCreatetituloDiv
    );
    expect(wrapper.find('View').at(14)).toHaveStyle(
      styles.TopicCreatescrollDiv
    );
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(2)).toHaveStyle({
      color: gray.iron(),
      fontSize: 15,
    });
    expect(wrapper.find('Text').at(6)).toHaveStyle(
      styles.TopicCreatepublicarText
    );
    expect(wrapper.find('Text').at(6)).toHaveText('PUBLICAR');
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.TopicCreatenameUser);
    expect(wrapper.find('Text').at(8)).toHaveText('username');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle(
      styles.TopicCreatepublicarDiv
    );
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
  });
  it('renders Icon correctly', () => {
    expect(wrapper.find('Icon').at(1)).toHaveProp('name', 'send');
    expect(wrapper.find('Icon').at(1)).toHaveProp('size', 24);
    expect(wrapper.find('Icon').at(1)).toHaveProp('color', gray.iron());
    expect(wrapper.find('Icon').at(1)).toHaveProp('style', { marginRight: 20 });
  });
  it('renders Text Input correctly', () => {
    expect(wrapper.find('TextInput').at(0)).toHaveStyle(
      styles.TopicCreatetituloTopic
    );
    expect(wrapper.find('TextInput').at(1)).toHaveStyle(
      styles.TopicCreatetopicComment
    );
    expect(wrapper.find('TextInput').at(0)).toHaveProp(
      'placeholder',
      'Titulo do post...'
    );
    expect(wrapper.find('TextInput').at(1)).toHaveProp(
      'placeholder',
      'Conteudo do post...'
    );
    expect(wrapper.find('TextInput').at(1)).toHaveProp('blurOnSubmit');
    expect(wrapper.find('TextInput').at(1)).toHaveProp('multiline');
    expect(wrapper.find('TextInput').at(0)).toHaveProp('onChangeText');
    expect(wrapper.find('TextInput').at(1)).toHaveProp('onChangeText');
  });
});
