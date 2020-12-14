import { shallow } from 'enzyme';
import React from 'react';
import { View, StyleSheet } from 'react-native';

it(`renders a view with a custom background`, () => {
  const component = shallow(
    <View style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} />
  );

  console.log('Component:', component.debug({ verbose: true }));

  const prop = component.find('View').prop('style');

  // Flatten the style so we can read it as an object
  const style = StyleSheet.flatten(prop);

  expect(style.backgroundColor).toMatchSnapshot();
});
