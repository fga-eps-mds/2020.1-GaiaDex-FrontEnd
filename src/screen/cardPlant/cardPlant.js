import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import Header from './header';
import styles from './styles';
import { getPlant } from '../../services/backEnd';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import NewTopic from './newTopic';
export default function PlantCard({ navigation }){
    const plantID = navigation.getParam('itemID', '5fc6af5e0187ef0027bb3b02'); // Recebe ID da planta a ser exibida ou apresenta valor default
    const [plant, setPlant] = useState({});

    useEffect(() => {
        getPlant(plantID)
        .then(res => setPlant(res.plant))
    }, []);

    const User = ( { item } ) => (
        <View style={styles.userDiv}>
            <ImageBackground source={require('../../assets/background.jpg') } style={styles.UserImg} imageStyle={{ borderRadius: 50 }}/>
            <Text style={styles.userName}>{item?.user?.username}</Text>
        </View>
      );
      const renderUser = ({ item }) => <User item={item} />;    
    
    const Topic = ( { item } ) => (
        <View style={styles.TopicDivContainer}>
            <ImageBackground source={{uri : plant?.profilePicture}} style={styles.TopicImg} imageStyle={{ borderRadius: 20 }}>
                <View style={styles.TopicCommentsDiv}>
                    <MaterialCommunityIcons name="comment-outline" size={18} color="white" />
                    <Text style={[styles.TopicUsername,{paddingLeft:5,fontWeight:'600'}]}>{item?.comments?.length}</Text>
                </View>
                <View style={styles.TopicDescriptionDiv}>
                    <Text style={styles.TopicUsername}>{item?.user?.username}</Text>
                    <Text style={styles.TopicTitle} numberOfLines={1}>{item?.title}</Text>
                    <Text style={styles.TopicDescription} numberOfLines={2}>{item?.description}</Text>
                </View>
                
            </ImageBackground>
        </View>
      );

    const renderItem = ({ item }) => <Topic item={item} />;
    return(
        <View style={styles.containerView}>
            <Header navigation={navigation}/>
            <View style={styles.containerPlant}>
                
                <ImageBackground source={{uri : plant?.profilePicture}} style={styles.plantImg} imageStyle={{ borderRadius: 25 }}/>
                <View style={styles.plantInfo}>
                        <Text style={styles.plantInfoTitle}>
                            Cenoura
                        </Text>
                        <View style={styles.plantInfoStats}>
                            <View style={styles.plantInfoDiv}>
                                <Feather name="users" size={15} color="white" />
                                <Text style={styles.plantInfoText}>{plant?.topics?.length} Usuários</Text>
                            </View>
                            <View style={styles.plantInfoDiv}>
                                <FontAwesome5 name="comment" size={14} color="white" />
                                <Text style={styles.plantInfoText}>{plant?.topics?.length} Tópicos</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.plantText}>
                        <Feather name="check-circle" size={18} color="green" style={{paddingBottom:10}}/>
                        <Text style={styles.plantTextDescription}>
                        Esta é uma comunidade certificada/padrão do app. Direcionada para se interagir sobre quaisquer assuntos envolvendo cenouras.
                        </Text>
                </View>
            </View>
            <View style={styles.containerBody}>
                <View style={styles.bodyPlants}>
                    <Text style={styles.bodyPlantsTitle}>Contribuidores:</Text>
                    <FlatList
                        data={plant?.topics}
                        horizontal
                        renderItem={renderUser}
                        keyExtractor={(item) => item?._id}
                    />
                    
                </View>
                <View style={styles.bodyTopics}>
                    <Text style={styles.bodyPlantsTitle}>Tópicos mais comentados</Text>
                    <FlatList
                        data={plant?.topics}
                        renderItem={renderItem}
                        keyExtractor={(item) => item?._id}
                    />
                    
                </View>
            </View>
            <NewTopic/>
        </View>
    )
}