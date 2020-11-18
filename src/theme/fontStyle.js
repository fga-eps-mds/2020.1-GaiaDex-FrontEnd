import styled from 'styled-components';
import { gray } from './colorPalette'

const theme = {
  textColor: gray.shark,
  textAlign: "center"
};

export const TextHeadline1 = styled.Text`
  font-family: unquote("Inter");
  font-size: 93;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextHeadline1.defaultProps = { theme }

export const TextHeadline2 = styled.Text`
  font-family: unquote("Inter");
  font-size: 58;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextHeadline2.defaultProps = { theme }

export const TextHeadline3 = styled.Text`
  font-family: unquote("Inter");
  font-size: 47;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextHeadline3.defaultProps = { theme }

export const TextHeadline4 = styled.Text`
  font-family: unquote("Inter");
  font-size: 33;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextHeadline4.defaultProps = { theme }

export const TextHeadline5 = styled.Text`
  font-family: unquote("Inter");
  font-size: 23;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextHeadline5.defaultProps = { theme }

export const TextHeadline6 = styled.Text`
  font-family: unquote("Inter");
  font-size: 19;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextHeadline6.defaultProps = { theme }

export const TextBody1 = styled.Text`
  font-family: unquote("Roboto");
  font-size: 16;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextBody1.defaultProps = { theme }

export const TextBody2 = styled.Text`
  font-family: unquote("Roboto");
  font-size: 14;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextBody2.defaultProps = { theme }

export const TextSubtitle1 = styled.Text`
  font-family: unquote("Inter");
  font-size: 16;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextSubtitle1.defaultProps = { theme }

export const TextSubtitle2 = styled.Text`
  font-family: unquote("Inter");
  font-size: 14;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextSubtitle2.defaultProps = { theme }

export const TextButton = styled.Text`
  font-family: unquote("Roboto");
  font-size: 14;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextButton.defaultProps = { theme }

export const TextOverline = styled.Text`
  font-family: unquote("Roboto");
  font-size: 10;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextOverline.defaultProps = { theme }

export const TextCaption = styled.Text`
  font-family: unquote("Roboto");
  font-size: 12;
  color: ${props => props.theme.textColor};
  text-align: ${props => props.theme.textAlign};
`;  
TextCaption.defaultProps = { theme }

