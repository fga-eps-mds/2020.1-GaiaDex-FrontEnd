import React, { useEffect, useState, useRef } from 'react';

import { Camera } from 'expo-camera';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons, AntDesign as Icon } from '@expo/vector-icons';
import Result from './result';
import styles from './styles';
import { scannerPlant } from '../../services';

const { width } = Dimensions.get('screen');

export default function camera({ navigation }) {
  const camRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);
  const [plantType, setPlantType] = useState(true);
  const falshTypes = [
    'off',
    'auto',
    'on',
    'torch',
    'flash-off',
    'flash-auto',
    'flash',
    'flashlight',
  ];
  const [flash, setFlash] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      if (!hasPermission) {
        return (
          <View style={{ flex: 1, marginTop: '30%', justifyContent: 'center' }}>
            <Text>Sem permissão para usar a camera! {hasPermission}</Text>
          </View>
        );
      }
      return null;
    })();
  }, []);

  const switchCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  const switchFlash = () => {
    setFlash((flash + 1) % 4);
  };
  const takePhoto = async () => {
    if (camRef) {
      try {
        setIsLoading(true);
        const data = await camRef.current.takePictureAsync({
          base64: true,
          quality: 0.5,
        });
        setCapturedPhoto(data.uri);
        const body = {
          filename: 'planta',
          mime: 'jpg',
          plantType: plantType ? 'flower' : 'leaf',
          data: data.base64,
        };
        scannerPlant(body)
          .then((res) => setPlants(res.results))
          .then(setOpen(true))
          .then(setIsLoading(false));
        return null;
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        return Alert.alert(
          'Erro ao Reconhecer',
          'Não foi possivel recohecer sua foto',
          [{ text: 'OK' }],
          { cancelable: false }
        );
      }
    } else {
      return Alert.alert('Erro ao inicializar a câmera.', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  };
  const switchPlantType = () => {
    setPlantType(!plantType);
  };
  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size={Platform.OS === 'ios' ? 'large' : width / 3}
            color="#19BB53"
          />
        </View>
      )}
      <Camera
        style={styles.camera}
        type={type}
        ref={camRef}
        flashMode={falshTypes[flash]}
      >
        <View style={styles.botoesConteinerTop}>
          <TouchableOpacity style={styles.buttonFlip} onPress={switchFlash}>
            <MaterialCommunityIcons
              name={falshTypes[flash + 4]}
              size={36}
              color="#FFF"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFlip} onPress={switchCamera}>
            <Icon name="camerao" size={36} color="#FFF" />
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.botoesConteinerBottom}>
        <TouchableOpacity
          style={plantType ? styles.buttonActived : styles.buttonDisabled}
          onPress={!plantType ? switchPlantType : () => {}}
        >
          <Text>Flor</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto}>
          <MaterialCommunityIcons
            name="circle-slice-8"
            size={width / 4}
            color="#19BB53"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={!plantType ? styles.buttonActived : styles.buttonDisabled}
          onPress={plantType ? switchPlantType : () => {}}
        >
          <Text>Folha</Text>
        </TouchableOpacity>
      </View>
      {capturedPhoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <Result
            setOpen={setOpen}
            capturedPhoto={capturedPhoto}
            plants={plants}
            navigation={navigation}
          />
        </Modal>
      )}
    </View>
  );
}
