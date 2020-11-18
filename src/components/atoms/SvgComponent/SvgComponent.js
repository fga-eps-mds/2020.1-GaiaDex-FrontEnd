import React from 'react';
import { View } from 'react-native';
import starUrl, { ReactComponent as Star } from '../../../assets/Search.svg';

function SvgComponent(props) {
  return (
    <View>
      <img src={starUrl} alt="star" width="14" height="14" />
      <Star />
    </View>
  );
}

export default SvgComponent;
