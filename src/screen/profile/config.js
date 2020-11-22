import React, { useState, } from 'react';
import {
    View,
    Text,
    Switch,
    Image,
} from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileHeaderConfig from './configHeader';
import styles from './style';
export default function ProfileConfig() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = async (type) => {
        const options = {
          A: () => {
            setIsEnabled(previousState => !previousState);
          },
          C: () => {
            setIsEnabled(previousState => !previousState);
          }
        }
        if (options[type]) options[type]();
    };
    return(
        <View style={styles.pConfigDiv}>
            <ProfileHeaderConfig/>
            <View style={styles.pConfigUserDiv}>
                <Image
                    style={styles.pUserProfilePic}
                    source={require('../../assets/usos.png')}
                    
                />
            </View>
            <View style={styles.pConfigNotificationsDiv}>
                <Text style={styles.pConfigTitle}>Notificações :</Text>
                {/* Notificações */}
                <View style={styles.pcNotification}>
                    <View style={styles.pcNotificationItem}>
                        <Text style={styles.pcNotificationText}>Notificação A</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch('A')}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.pcNotificationItem}>
                        <Text style={styles.pcNotificationText}>Notificação B</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch('A')}
                            value={isEnabled}
                        />
                    </View> 
                    <View style={styles.pcNotificationItem}>
                        <Text style={styles.pcNotificationText}>Notificação C</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch('A')}
                            value={isEnabled}
                        />
                    </View>   
                </View>
            </View>
            <View style={styles.pConfigPoliticsDiv}>
                <Text style={styles.pConfigTitle}>Politica</Text>
                {/* Notificações */}
                <View>
                    
                </View>
            </View>
            
        </View>
    )
}