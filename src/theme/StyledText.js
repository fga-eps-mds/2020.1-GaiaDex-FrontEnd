import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { gray } from './colorPalette';

export default function StyledText({ option, title, propStyle }) {
  const chosenStyle = defaultStyle[option];
  const combineStyles = StyleSheet.flatten([chosenStyle, propStyle]);
  return <Text style={combineStyles}>{title}</Text>;
}

/*
uso:
  exemplo 1:
    <StyledText option="h1" title="Este é um texto grande padrão" />

  exemplo 2:
    <StyledText
      option="body1"
      title="Este é menor e azul"
      style={{ color: '#10f1f0' }}
    />;
*/
const defaultStyle = StyleSheet.create({
  h1: {
    fontFamily: 'Inter',
    fontSize: 93,
    color: gray.shark(),
    textAlign: 'center',
  },

  h2: {
    fontFamily: 'Inter',
    fontSize: 58,
    color: gray.shark(),
    textAlign: 'center',
  },

  h3: {
    fontFamily: 'Inter',
    fontSize: 47,
    color: gray.shark(),
    textAlign: 'center',
  },

  h4: {
    fontFamily: 'Inter',
    fontSize: 33,
    color: gray.shark(),
    textAlign: 'center',
  },

  h5: {
    fontFamily: 'Inter',
    fontSize: 23,
    color: gray.shark(),
    textAlign: 'center',
  },

  h6: {
    fontFamily: 'Inter',
    fontSize: 19,
    color: gray.shark(),
    textAlign: 'center',
  },

  body1: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: gray.shark(),
    textAlign: 'center',
  },

  body2: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: gray.shark(),
    textAlign: 'center',
  },

  subtitle1: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: gray.shark(),
    textAlign: 'center',
  },

  subtitle2: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: gray.shark(),
    textAlign: 'center',
  },

  button: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: gray.shark(),
    textAlign: 'center',
  },

  overline: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: gray.shark(),
    textAlign: 'center',
  },

  caption: {
    fontFamily: 'Roboto',
    fontSize: 12,
    color: gray.shark(),
    textAlign: 'center',
  },
});
