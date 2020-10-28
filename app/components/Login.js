import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, 
    StyleSheet, 
    Text, 
    View, 
    StatusBar as sBar, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import Svg from 'react-native-svg';
import Path from 'react-native-path';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Login() {
  const CircleArrow = props => (
    <Svg width={24} height={15} viewBox="0 0 24 15" fill="none" {...props}>
      <Path
        d="M23.1 6.933L15.9.172a.502.502 0 00-.68 0 .431.431 0 000 .637l6.381 5.992H.68c-.265 0-.48.201-.48.45 0 .25.215.451.48.451h20.921l-6.38 5.992a.431.431 0 000 .637.495.495 0 00.339.132.495.495 0 00.34-.132l7.2-6.76a.431.431 0 000-.638z"
        fill="#F2E0F5"
      />
    </Svg>
  );

  const FacebookIcon = props => (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.883 0A2.883 2.883 0 000 2.883v13.234A2.883 2.883 0 002.883 19h13.234A2.883 2.883 0 0019 16.117V2.883A2.883 2.883 0 0016.117 0H2.883zm4.61 18.877V12.44h-2.97V9.41h2.97V7.102c0-2.626 1.745-4.077 4.416-4.077 1.28 0 2.617.205 2.617.205v2.578h-1.474c-1.452 0-1.905.808-1.905 1.636v1.967h3.242l-.518 3.03h-2.724v6.436H7.493z"
        fill="#F2E0F5"
      />
    </Svg>
  );

  const GoogleIcon = props => (
    <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
      <Path
        d="M20.88 10.168c0 5.658-4.003 9.684-9.915 9.684C5.297 19.852.72 15.422.72 9.936.72 4.45 5.297.02 10.965.02c2.76 0 5.082.98 6.87 2.595L15.047 5.21C11.399 1.803 4.616 4.362 4.616 9.936c0 3.458 2.854 6.261 6.35 6.261 4.056 0 5.576-2.814 5.816-4.274h-5.817v-3.41h9.754c.095.507.161.995.161 1.655z"
        fill="#F2E0F5"
      />
    </Svg>
  );

  return (
    <View style={styles.container}>

      <View style={styles.circle3}/>
      <View style={styles.circle2}/>
      <View style={styles.circle1}/>

      <Text style={styles.header}>Seja bem-vindo</Text>
      
      <TextInput style={styles.textinput} placeholder='Seu e-mail:'
      underlineColorAndroid={'transparent'}/>

      <TextInput style={styles.textinput} placeholder='Sua senha:'
      securyTextEntry={true} underlineColorAndroid={'transparent'}/>

      <View style={styles.direction}>
        <Text style={styles.txtLogin}>Login</Text>

        <TouchableOpacity style={styles.btnLogin}>
                      
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnFbGoogle}>
        <Text style={styles.txtBtnFbGoogle}>Fazer login com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnFbGoogle}>
        <Text style={styles.txtBtnFbGoogle}>Fazer login com o Google</Text>
      </TouchableOpacity>

      <View style={styles.direction}>
        <TouchableOpacity>
          <Text style={styles.txtBtnOthers}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.txtBtnOthers}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
          
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: windowHeight + sBar.currentHeight,
    width: windowWidth,
    backgroundColor: '#f2d9e6',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    paddingLeft: '8.5%',
    paddingRight: '8.5%',
    paddingTop: Platform.OS === "android" ? sBar.currentHeight : 0,
  },
  circle1: {
    position: 'absolute',
    width: 382.49+ 50,
    height: 382.49+ 50,
    left: -156.65,
    top: -300.62,
    borderRadius: 382.49+ 50,
    backgroundColor: '#0582CA',
  },
  circle2: {
    position: 'absolute',
    width: 673+ 50,
    height: 673+ 50,
    left: -177,
    top: -416,
    borderRadius: 673+ 50,
    backgroundColor: '#541E5C',
  },
  circle3: {
    position: 'absolute',
    width: 382 + 50,
    height: 382+ 50,
    left: 226,
    top: -35,
    borderRadius: 382+ 50,
    backgroundColor: '#19BB53',
  },
  header: {
    flex: 1,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 60,
    lineHeight: 60,
    color: '#F2E0F5',
    marginTop: windowHeight/7.25,
    /*paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#5a008c',
    borderBottomWidth: 1,*/
  },
  textinput: {
    alignSelf: 'stretch',
    height: '8%',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    //marginLeft: '2.5%',
    //marginRight: '2.5%',
    backgroundColor: '#e4b4cd',
    borderRadius: 20,
    borderColor: 'transparent',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 100,
    color: '#3C3C3C',
    marginBottom: 20,
    /*color: '#000000',
    borderBottomColor: '#5a008c',
    borderBottomWidth: 1,*/
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtLogin: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 40,
    lineHeight: 40,
    color: '#242528',
    marginTop: 12.75,
  },
  btnLogin: {
    borderRadius: 100,
    width: 8.5,
    height: 8.5,
    backgroundColor: '#4D525A',
    padding: 35,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
    /*alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,*/
  },
  btnFbGoogle: {
    height: '6.20%',
    width: '100%',
    //marginLeft: '8.5%',
    //marginRight: '8.5%',
    backgroundColor: '#45194d',
    borderColor: '#E15A97',
    borderRadius: 10,
    marginBottom: 10,
  },
  txtBtnFbGoogle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    //lineHeight: 171,
    textAlign: 'center',
    letterSpacing: 0.1,
    color: '#F2E0F5',
    marginTop: '3%'
  },
  txtBtnOthers: {
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 18,
    //lineHeight: 171,
    textAlign: 'center',
    letterSpacing: 0.1,
    color: '#242528',
    marginBottom: 40,
  },
});