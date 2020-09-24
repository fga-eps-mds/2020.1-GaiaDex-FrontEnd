import React, { Component } from 'react';

import { View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Header = () =>(
    <View style = {styles.header}>
            <Icon name="arrowleft" size={24} style = { styles.icon }/>
            <Icon name="sharealt" size={24} style = { styles.icon }/>
    </View>
);

export default Header;