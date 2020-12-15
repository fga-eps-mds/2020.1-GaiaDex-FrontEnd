import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import renderer from 'react-test-renderer';

import React from 'react';
import { gray } from '../src/theme/colorPalette';

import TopicView from '../src/screen/topic/TopicView';
import styles from '../src/screen/topic/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

let wrapper;

describe('<TopicView />', () => {
  beforeEach(() => {
    wrapper = mount(<TopicView navigation={{ getParam: jest.fn() }} />);
  });

  it('renders everything', () => {
    const tree = renderer
      .create(<TopicView navigation={{ getParam: jest.fn() }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(wrapper.find('KeyboardAvoidingView').length).toBe(1);
    expect(wrapper.find('View').length).toBe(36);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('Image').length).toBe(2);
    expect(wrapper.find('Data').length).toBe(1);
    expect(wrapper.find('ScrollView').length).toBe(2);
    expect(wrapper.find('Comments').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(26);
    expect(wrapper.find('TouchableOpacity').length).toBe(2);
    expect(wrapper.find('Icon').length).toBe(5);
  });
  it('renders KeyboardAvoidingView correctly', () => {
    expect(wrapper.find('KeyboardAvoidingView').at(0)).toHaveStyle(
      styles.containerMaster
    );
  });
  it('renders Header correctly', () => {
    expect(wrapper.find('Header').at(0)).toHaveProp('title');
    expect(wrapper.find('Header').at(0)).toHaveProp('onPress');
  });
  it('renders Image correctly', () => {
    expect(wrapper.find('Image').at(0)).toHaveStyle(styles.imgUser);
    expect(wrapper.find('Image').at(0)).toHaveProp('source');
    expect(wrapper.find('Image').at(0)).toHaveProp('defaultSource');
  });
  it('renders Data correctly', () => {
    expect(wrapper.find('Data').at(0)).toHaveProp('time');
  });
  it('renders ScrollView correctly', () => {
    expect(wrapper.find('ScrollView').at(0)).toHaveStyle(
      styles.scrollViewDescription
    );
  });
  it('renders Comments correctly', () => {
    expect(wrapper.find('Comments').at(0)).toHaveProp('topic');
    expect(wrapper.find('Comments').at(0)).toHaveProp('setTopic');
    expect(wrapper.find('Comments').at(0)).toHaveProp('user');
    expect(wrapper.find('Comments').at(0)).toHaveProp('like');
    expect(wrapper.find('Comments').at(0)).toHaveProp('dislike');
    expect(wrapper.find('Comments').at(0)).toHaveProp('topicIsLiked');
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(8)).toHaveStyle(styles.container);
    expect(wrapper.find('View').at(10)).toHaveStyle(styles.UserDiv);
    expect(wrapper.find('View').at(14)).toHaveStyle(styles.topicDiv);
    expect(wrapper.find('View').at(16)).toHaveStyle({ marginTop: 10 });
    expect(wrapper.find('View').at(17)).toHaveStyle({ marginTop: 10 });
    expect(wrapper.find('View').at(20)).toHaveStyle(styles.topicContainer);
    expect(wrapper.find('View').at(28)).toHaveStyle(styles.commentsBar);
    expect(wrapper.find('View').at(30)).toHaveStyle(styles.commentsListDiv);
    expect(wrapper.find('View').at(32)).toHaveStyle(styles.commentsList);
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(4)).toHaveStyle(styles.nameUser);
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.topicDivTitle);
    expect(wrapper.find('Text').at(22)).toHaveStyle(styles.commentsBarText);
    expect(wrapper.find('Text').at(22)).toHaveText('Novo Comentário');
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
  });
  it('renders Icon correctly', () => {
    expect(wrapper.find('Icon').at(1)).toHaveProp('size', 18);
    expect(wrapper.find('Icon').at(1)).toHaveProp('color', gray.shark());
    expect(wrapper.find('Icon').at(1)).toHaveProp('onPress');
    expect(wrapper.find('Icon').at(1)).toHaveProp('name', 'arrowup');
    expect(wrapper.find('Icon').at(2)).toHaveProp('size', 18);
    expect(wrapper.find('Icon').at(2)).toHaveProp('color', gray.shark());
    expect(wrapper.find('Icon').at(2)).toHaveProp('onPress');
    expect(wrapper.find('Icon').at(3)).toHaveProp('name', 'corner-up-right');
    expect(wrapper.find('Icon').at(3)).toHaveProp('size', 15);
    expect(wrapper.find('Icon').at(3)).toHaveProp('color', gray.shark());
    expect(wrapper.find('Icon').at(4)).toHaveProp('name', 'triangle-right');
    expect(wrapper.find('Icon').at(4)).toHaveProp('size', 15);
    expect(wrapper.find('Icon').at(4)).toHaveProp('color', gray.shark());
  });
});
