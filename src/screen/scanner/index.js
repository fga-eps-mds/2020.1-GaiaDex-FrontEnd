import React, {useEffect, useState, useRef} from 'react';

import { Camera } from 'expo-camera';
import {View, Text, TouchableOpacity, Modal, Dimensions, ActivityIndicator, Platform, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Result from './result';
import styles from './styles'


const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function camera(){
    const camRef = useRef(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [plants, setPlants] = useState(null);
    // const IPV4 = '192.168.15.5'; //endereco do backend
    // const PORT = '2000'; //porta do backend

    useEffect(() =>{
        (async () => { //seta permissao
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
            if( !hasPermission ){
                return(
                    <View style = {{flex: 1, marginTop: '30%', justifyContent: 'center'}}>
                        <Text>
                            Sem permissão para usar a camera! {hasPermission}
                        </Text>
                    </View>
                )
            }
        })();
    }, []);

    const mudarCamera = () => {
        setType(
            type === Camera.Constants.Type.back ?
            Camera.Constants.Type.front : Camera.Constants.Type.back
        );
    }
    const takePhoto = async() => {
        if(camRef){
            try{
                setIsLoading(true);
                const data = await camRef.current.takePictureAsync({base64: true, quality: 0.5});
                setCapturedPhoto(data.uri);
                const response = await fetch(`http://${process.env.IPV4}:${process.env.PORT}/scanner/`, {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({
                        filename: "planta",
                        mime: "jpg",
                        plantType: "flower",
                        data: data.base64
                    })
                });
                if(!response.ok) throw {message: 'error in fetch'};
                const plant = await response.json();
                setPlants(plant.results);
                setOpen(true);
                setIsLoading(false);
            } catch (err){
                console.log(err)
                setIsLoading(false);
                return(
                    Alert.alert(
                        "Erro ao Reconhecer",
                        "Não foi possivel recohecer sua foto",
                        [
                            {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                    )
                )
            }
        }
    }
    return (
        <View style={styles.container}>
            {isLoading &&
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size={Platform.OS === 'ios' ? 'large' : largura/3} color='#19BB53'/>
                </View>
            }
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
            </View>
            {capturedPhoto &&
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={open}
                >
                    <Result setOpen = {setOpen} capturedPhoto = {capturedPhoto} plants = {plants}/>
                </Modal>
            }
        </View>
    );
}