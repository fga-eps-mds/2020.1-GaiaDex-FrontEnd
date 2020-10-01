import React, { useState} from 'react';

import {View, Modal, Alert, Text} from 'react-native';
import styles from './styles';
import ImgButton from './imgButton';
import FlatButton from './flatButton';
import Alternative from './alternativeView';

export default function Menu ({text}){

    const [modalVisible, setModalVisible] = useState(true);

    return(
        <View style={styles.background}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.backgroundMenu}>
                    <View style={styles.TabContainer}>
                        <ImgButton text="Descrição" source={require("../../assents/descricao.png")} onPress={() => {setModalVisible(!modalVisible);}} icon = 'filetext1'/>
                        <ImgButton text="Galeria" source={require("../../assents/galeria.png")} onPress={() => {setModalVisible(!modalVisible);}} icon = 'picture'/>
                        <ImgButton text="Guia de Cultivo" source={require("../../assents/guiadecultivo.png")} onPress={() => {setModalVisible(!modalVisible);}} icon = 'book'/>
                        <ImgButton text="Usos" source={require("../../assents/usos.png")} onPress={() => {setModalVisible(!modalVisible);}} icon = 'bulb1'/>
                    </View>
                    <View style={styles.buttonForum}>
                        <FlatButton text='FÓRUM'/>
                    </View>
                </View>
            </Modal>
            <Alternative text = {text}/>
            <View style={styles.buttonForum}>
                    <FlatButton text='FÓRUM'/>
            </View>
        </View>
    );
};