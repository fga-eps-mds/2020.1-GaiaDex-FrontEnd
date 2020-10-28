import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Svg, { Path } from "react-native-svg";
import Styled from 'styled-components/native'
import { Platform, 
    StyleSheet, 
    Text,
    Button, 
    View, 
    StatusBar as sBar, 
    TextInput, 
    TouchableOpacity
} from 'react-native';

/*
linhas apagadas:
-const Header = styled.Text`
  font-family: Inter;
  font-size: 2.76em;
  line-height: 3.3em;
-const InputField = styled.TextInput`
  -input[type=text],[type=password] {}
  font-family: Inter;
  font-size: 1.08em;
  line-height: 100%;
-const LoginText = styled.Text`
  font-family: Inter;
  font-size: 1.92em;
  line-height: 2.3em;
const Touch = Styled.TouchableOpacity`
  -#circle {}
  border-radius: 100%;
-const ButtonFacebookGoogle = styled.Button`
  box-sizing: border-box;
-const TextFacebookGoogle = styled.Text`
  font-family: Inter;
  line-height: 171%;
-const Text_Register_Forget_Password = styled.Text
  font-family: Inter;
  font-size: 1.08em;
  line-height: 100%;
  box-shadow: inset 0 -0.5vw 0 white, inset 0 -1.2vw 0 #19BB53;
*/ 

export default function Regform() {
  const Header = Styled.Text`
  
  font-style: normal;
  font-weight: 600;

  
  color: #F2E0F5;
  `

  const InputField = Styled.TextInput`

    height: 8%;
    width:83%;
    margin-left: 8.5%;
    margin-right: 8.5%;
    background: rgba(36, 37, 40, 0.1);
    border-radius: 20px;
    border: transparent;
      
    font-style: normal;
    font-weight: 500;
      
      
    color: #3C3C3C;
  `

  const LoginText = Styled.Text`
    
    font-style: normal;
    font-weight: 600;

    
    color: #242528;
  `

  const Touch = Styled.TouchableOpacity`

    
    width: 8.5vw;
    height: 8.5vw;
    background: #4D525A;
  `

  const ButtonFacebookGoogle = Styled.TouchableOpacity`
    height: 6.20%;
    width: 83%;
    margin-left: 8.5%;
    margin-right: 8.5%;
    background: #38143E;
    border: 0.95px solid #E15A97;

    border-radius: 10px;
  `

  const TextFacebookGoogle = Styled.Text`
    
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    
    text-align: center;
    letter-spacing: 0.1px;
    color: #F2E0F5;
  `

  const Text_Register_Forget_Password = Styled.Text`
    
    font-style: normal;
    font-weight: 600;

    
    display: flex;
    align-items: center;
    text-align: center;
    color: #242528;

  `

  return (
    <View alignSelf = 'stretch'>

      <Header>Seja bem-vindo</Header>

      <InputField placeholder='Seu e-mail:'/>

      <InputField placeholder='Sua senha:'/>

      <LoginText>Login</LoginText>

      <Touch>
        <Svg width={24} height={15} viewBox="0 0 24 15" fill="none">
          <Path
          d="M23.1 6.933L15.9.172a.502.502 0 00-.68 0 .431.431 0 000 .637l6.381 5.992H.68c-.265 0-.48.201-.48.45 0 .25.215.451.48.451h20.921l-6.38 5.992a.431.431 0 000 .637.495.495 0 00.339.132.495.495 0 00.34-.132l7.2-6.76a.431.431 0 000-.638z"
          fill="#F2E0F5"
          />
        </Svg>
      </Touch>

      <ButtonFacebookGoogle>
        <TextFacebookGoogle>Fazer login com Facebook</TextFacebookGoogle>
        <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.883 0A2.883 2.883 0 000 2.883v13.234A2.883 2.883 0 002.883 19h13.234A2.883 2.883 0 0019 16.117V2.883A2.883 2.883 0 0016.117 0H2.883zm4.61 18.877V12.44h-2.97V9.41h2.97V7.102c0-2.626 1.745-4.077 4.416-4.077 1.28 0 2.617.205 2.617.205v2.578h-1.474c-1.452 0-1.905.808-1.905 1.636v1.967h3.242l-.518 3.03h-2.724v6.436H7.493z"
            fill="#F2E0F5"
          />
        </Svg>
      </ButtonFacebookGoogle>

      <ButtonFacebookGoogle>
        <TextFacebookGoogle>Fazer login com Google</TextFacebookGoogle>
        <Svg width={21} height={20} viewBox="0 0 21 20" fill="none">
          <Path
          d="M20.88 10.168c0 5.658-4.003 9.684-9.915 9.684C5.297 19.852.72 15.422.72 9.936.72 4.45 5.297.02 10.965.02c2.76 0 5.082.98 6.87 2.595L15.047 5.21C11.399 1.803 4.616 4.362 4.616 9.936c0 3.458 2.854 6.261 6.35 6.261 4.056 0 5.576-2.814 5.816-4.274h-5.817v-3.41h9.754c.095.507.161.995.161 1.655z"
          fill="#F2E0F5"
          />
        </Svg>
      </ButtonFacebookGoogle>

      <TouchableOpacity>
        <Text_Register_Forget_Password>Cadastro</Text_Register_Forget_Password>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text_Register_Forget_Password>Esqueci a senha</Text_Register_Forget_Password>
      </TouchableOpacity>

      <StatusBar style="auto"/>
    </View>
  );
}

/*const styles = StyleSheet.create({
  Regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
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
    fontWeight: '500',
    fontSize: '1.08em',
    lineHeight: '100%',
    color: '#3C3C3C',
  },
  loginText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
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
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '171%',
    textAlign: 'center',
    letterSpacing: '0.1px',
    color: '#F2E0F5',
  },
  text_Register_Forget_Password: {
    //fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    //fontSize: '1.08em',
    //lineHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#242528',
    //boxShadow: 'inset 0 -0.5vw 0 white, inset 0 -1.2vw 0 #19BB53',
  }
});*/
