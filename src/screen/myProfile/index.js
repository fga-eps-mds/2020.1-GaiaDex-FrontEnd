import React, { useEffect, useState } from "react";;
import { View, Text, Dimensions, ImageBackground } from "react-native";
import { EvilIcons, FontAwesome, Entypo } from "@expo/vector-icons";
import MenuBar from "./../../assets/components/menuBar";
import { getUserLogado } from "./../../services";
import styles from "./styles";

const altura = Dimensions.get("screen").height;

const sort = (user) =>  {
    console.log("Entrada da funcao ", user);
    let i, d1, d2;
    let countT = user?.topics?.length, 
        countP = user?.myPlants?.length;
    let activity = new Array();
    for(i = 0; (i<6) && ((countT + countP) > 0); i++){
        if(countT > 0 && countP > 0){
            d1 = new Date(user?.topics[countT - 1]?.createdAt);
            d2 = new Date(user?.myPlants[countP - 1]?.createdAt);
            if(d1 - d2 > 0){
                activity.push(user?.topics[--countT])
            }else{
                activity.push(user?.myPlants[--countP]);
            }
        }else if(countT > 0){
            activity.push(user?.topics[--countT]);
        }else if(countP > 0){
            activity.push(user?.myPlants[--countP]);
        }
    }
    console.log("Log da funcao ", activity);
    return activity;
}

export default function myProfile({navigation}){
    const [activityLog, setActivitLog] = useState([]);
    const [user, setUser] = useState({});
    useEffect( () => {
        getUserLogado()
        .then( res => {setUser(res); return sort(res)})
        .then( res => {setActivitLog(res)})
    }, []);
    return(
        <>
            <View style={styles.framePerfil}>
                <View style={styles.perfilTextView}>
                    <Text style={styles.perfilText}>Perfil</Text>
                    <EvilIcons name="gear" size={altura/16} color="white"/>
                </View>
                <ImageBackground
                    style={styles.vector}
                    source={require('./../../assets/Vector.png')}
                >
                    <View style={styles.photoView}>

                    </View>
                    <Text style={styles.name}>{user?.username}</Text>
                    <Text style={styles.name}>{user?.email}</Text>
                </ImageBackground>
            </View>
            <View style={styles.frameDown}>
                <Text style={styles.minhasAtividades}>Minhas Atividades</Text>
            </View>
            <View style={styles.sumary}>
                <View style={[styles.sumaryComponents,{borderRightColor: "black",borderRightWidth: 3,}]}>
                    <View style={{flexDirection:"row"}}>
                        <FontAwesome name="twitch" size={30} color="#094820" style={{marginRight: 13}}/>
                    <Text style={{color: "#E5E5E5"}}>{user?.topics?.length}</Text>
                    </View>
                    <Text style={{marginTop:10, color: "#E5E5E5"}}>Tópicos</Text>
                </View>
                <View style={[styles.sumaryComponents,{borderRightColor: "black",borderRightWidth: 3,}]}>
                    <View style={{flexDirection:"row"}}>
                        <FontAwesome name="star-o" size={30} color="#094820" style={{marginRight: 13}}/>
                        <Text style={{color: "#E5E5E5"}}>{user?.favorites?.length}</Text>
                    </View>
                    <Text style={{marginTop:10, color: "#E5E5E5"}}>Favoritos</Text>
                </View>
                <View style={styles.sumaryComponents}>
                    <View style={{flexDirection:"row"}}>
                        <Entypo name="flower" size={30} color="#094820" style={{marginRight: 13}}/>
                        <Text style={{color: "#E5E5E5"}}>{user?.myPlants?.length}</Text>
                    </View>
                    <Text style={{marginTop:10, color: "#E5E5E5"}}>Plantas</Text>
                </View>
            </View>
            <MenuBar/>
        </>
    )
}