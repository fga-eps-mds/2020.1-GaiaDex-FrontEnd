import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style';
import MenuBar from '../../assets/components/menuBar';
import { EvilIcons, Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { getUser } from '../../services/backEnd';
import { FlatList } from 'react-native-gesture-handler';
 
export default function Forum({ navigation }){
     const [user, setUser] = useState({})
     const userID = '5fb6ae9a66149b0050db65a1';
     useEffect(() => {
        getUser(userID)
        .then(res => setUser(res))
      }, []);

      const Favorite = ({ item }) => (
        <View style={styles.FavoritePlant}>
            <View style={styles.FavoriteTopicImg}></View>
            <Text style={styles.FavoriteTopicText}>{item?.plant}</Text>
        </View>
      );
      const TopPost = ({ item }) => (
        <View style={styles.topPostPlant}>
            <View style={styles.topPostInfo}>
                <Text numberOfLines={1} style={styles.postTitle}>{item?.title}</Text>
                <Text numberOfLines={2} style={styles.postDescription}>{item?.description}</Text>
                <Text style={styles.postData}>{item?.createdAt}</Text>
                <View style={styles.posStatus}>
                    <FontAwesome5 name="comment-alt" size={20} color="white" />
                    <View style={styles.postLikes}>
                        <AntDesign name="arrowup" size={20} color="white" />
                        <Text style={styles.postTitle}>{item?.likes}</Text>
                        <AntDesign name="arrowdown" size={20} color="white" />
                    </View>
                </View>
            </View>
        </View>
      );
     return(
         <View style={styles.container}>
             <View style={styles.forumContainer}>
                <Text style={styles.forumText}>Fórum</Text>
                <EvilIcons name="search" size={45} color="black" />
             </View>
             <View style={styles.myforumsContainer}>
                <View style={styles.myforumsTabs}>
                    <Text style={styles.myforumsTab}>Meus Fórums</Text>
                    <Ionicons name="ios-add-circle-outline" size={30} color="black" />
                </View>
                <View style={styles.myforumsContent}>
                <FlatList
                    horizontal
                    data={user?.topics}
                    keyExtractor={(item) => item?._id}
                    renderItem={({ item }) => (
                        <Favorite
                            item={item}
                        />
                        
                    )}
                    />
                </View>
             </View>
             <View style={styles.topPostContainer}>
                <Text style={styles.topPostText}>Top posts</Text>
                <FlatList
                    data={user?.topics}
                    keyExtractor={(item) => item?._id}
                    renderItem={({ item }) => (
                        <TopPost
                            item={item}
                        />
                        
                    )}
                    />
             </View>
             <MenuBar navigation={ navigation }/>
         </View>
     )
 };