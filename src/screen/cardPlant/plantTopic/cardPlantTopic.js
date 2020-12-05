import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import styles from '../styles';
import { getPlant } from '../../../services/backEnd';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function PlantCardTopic({ navigation, plantID }){
    const [plant, setPlant] = useState({});

    useEffect(() => {
        getPlant(plantID)
        .then(res => setPlant(res.plant))
    }, []);

    const User = ( { item } ) => (
        <View style={styles.userDiv}>
             <ImageBackground 
                source={{ uri : plant?.user?.profilePicture}} 
                defaultSource={require('../../../assets/userDefault.png')}
                style={styles.UserImg} 
                imageStyle={{ borderRadius: 50 }}/>
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
            
    )
}