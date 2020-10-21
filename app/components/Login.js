import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Svg, { Path } from "react-native-svg";
import { Platform, 
    StyleSheet, 
    Text,
    Button, 
    View, 
    StatusBar as sBar, 
    TextInput, 
    TouchableOpacity
} from 'react-native';

export default function Regform() {
  return (
    <View style={styles.Regform}>

      <Text style={styles.header}>Seja bem-vindo</Text>

      <TextInput style={styles.textinput} placeholder='Seu e-mail:'
      underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder='Sua senha:'
      securyTextEntry={true} underlineColorAndroid={'transparent'}/>

      <Text style={styles.loginText}>Login</Text>

      <TouchableOpacity style={styles.button}>
        <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.0993 6.93273L15.8993 0.171614C15.7118 -0.00447041 15.4081 -0.00447041 15.2206 0.171614C15.0331 0.347699 15.0331 0.632934 15.2206 0.808976L21.6012 6.80068H0.680026C0.414707 6.80068 0.200012 7.00228 0.200012 7.25143C0.200012 7.50058 0.414707 7.70219 0.680026 7.70219H21.6012L15.2206 13.6938C15.0331 13.8699 15.0331 14.1552 15.2206 14.3312C15.3143 14.4192 15.4372 14.4633 15.56 14.4633C15.6828 14.4633 15.8056 14.4192 15.8994 14.3312L23.0994 7.57009C23.2868 7.39405 23.2868 7.10881 23.0993 6.93273Z" fill="#F2E0F5"/>
        </svg>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button_Fb_Google}>
        <Text>Fazer login com Facebook</Text>
        <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.883 0A2.883 2.883 0 000 2.883v13.234A2.883 2.883 0 002.883 19h13.234A2.883 2.883 0 0019 16.117V2.883A2.883 2.883 0 0016.117 0H2.883zm4.61 18.877V12.44h-2.97V9.41h2.97V7.102c0-2.626 1.745-4.077 4.416-4.077 1.28 0 2.617.205 2.617.205v2.578h-1.474c-1.452 0-1.905.808-1.905 1.636v1.967h3.242l-.518 3.03h-2.724v6.436H7.493z"
            fill="#F2E0F5"
          />
        </Svg>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button_Fb_Google}>
        <Text>Fazer login com Google</Text>
        <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
          <Path
          d="M20.88 10.168c0 5.658-4.003 9.684-9.915 9.684C5.297 19.852.72 15.422.72 9.936.72 4.45 5.297.02 10.965.02c2.76 0 5.082.98 6.87 2.595L15.047 5.21C11.399 1.803 4.616 4.362 4.616 9.936c0 3.458 2.854 6.261 6.35 6.261 4.056 0 5.576-2.814 5.816-4.274h-5.817v-3.41h9.754c.095.507.161.995.161 1.655z"
          fill="#F2E0F5"
          />
        </Svg>
      </TouchableOpacity>

      <View>
        <Button style={styles.text_Register_Forget_Password} title="Cadastro" />
        <Button style={styles.text_Register_Forget_Password} title="Esqueci a senha" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '2.76em',
    lineHeight: '3.3em',
    color: '#F2E0F5',
  },
  textinput: {
    height: '8%',
    width: '83%',
    marginLeft: '8.5%',
    marginRight: '8.5%',
    background: 'rgba(36, 37, 40, 0.1)',
    borderRadius: '20px',
    border: 'transparent',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '1.08em',
    lineHeight: '100%',
    color: '#3C3C3C',
  },
  loginText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '1.92em',
    lineHeight: '2.3em',
    color: '#242528',
  },
  button: {
    borderRadius: '100%',
    width: '8.5vw',
    height: '8.5vw',
    background: '#4D525A',
  },
  button_Fb_Google: {
    height: '6.20%',
    width: '83%',
    marginLeft: '8.5%',
    marginRight: '8.5%',
    background: '#38143E',
    border: '0.95px solid #E15A97',
    boxSizing: 'border-box',
    borderRadius: '10px',
  },
  text_Fb_Google: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '171%',
    textAlign: 'center',
    letterSpacing: '0.1px',
    color: '#F2E0F5',
  },
  text_Register_Forget_Password: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1.08em',
    lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#242528',
    boxShadow: 'inset 0 -0.5vw 0 white, inset 0 -1.2vw 0 #19BB53', /* #E15A97 */
  },
});
