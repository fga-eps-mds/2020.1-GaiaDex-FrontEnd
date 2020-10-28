import React, {useEffect, useState, useRef} from 'react';

import { Camera } from 'expo-camera';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles'
import { Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function camera(){
    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() =>{
        (async () => { //seta permissao
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if(hasPermission === null){//permissao não setada
        return(
            <View style = {{flex: 1, marginTop: '30%', justifyContent: 'center'}}>
                <Text>
                    Sem permissão para usar a camera! (null)
                </Text>
            </View>
        )
    }
    if(hasPermission === false){//sem permissão para acessar a camera
        return(
            <View style = {{flex: 1, marginTop: '30%', justifyContent: 'center'}}>
                <Text>
                    Sem permissão para usar a camera! (false)
                </Text>
            </View>
        )
    }
    const mudarCamera = () => {
        setType(
            type === Camera.Constants.Type.back ?
            Camera.Constants.Type.front : Camera.Constants.Type.back
        );
    }
    async function takePhoto(){
        if(camRef){
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri);
            setOpen(true);
            console.log(data);
        }
    }
    return (
        <View style={styles.container}>
            <Camera
                style = {styles.camera}
                type = {type}
                ref={camRef}
            >
            <View style={styles.botoesConteinerTop}>
                <TouchableOpacity 
                    style={styles.botaoFlip}
                    onPress={ mudarCamera }
                >
                    <Icon name='camerao' size={36} color="#FFF"/>
                </TouchableOpacity>
            </View>
            </Camera>
            <View style={styles.botoesConteinerBottom}>
                <TouchableOpacity onPress={takePhoto}>
                    <MaterialCommunityIcons name="circle-slice-8" size={largura/4} color="#19BB53" />
                </TouchableOpacity>
            {capturedPhoto &&
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={open}
                >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
                        <TouchableOpacity  
                            style={{margin: 10}}
                            onPress={() => setOpen(false)}
                        >
                            <MaterialCommunityIcons name="close-circle-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <Image 
                            style={{width: '100%', height: altura*4/5, borderRadius: 20}}
                            source={{uri: capturedPhoto}}
                        />
                    </View>
                </Modal>
            }
            </View>
        </View>
    );
}