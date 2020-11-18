import styled from 'styled-components';
import { gray } from '../../../theme/colorPalette';
import React from 'react'

const theme = {
  textColor: gray.shark,
  placeHolderColor: gray.outerSpace(0.8)
};

export const LoginInput = styled.input.attrs({ 
  type: 'email'
})`
  height:2.8em;
  width:66%;
  margin-left: 8.5%;
  margin-right: 8.5%;
  background: ${ props => gray.shark(0.10) };
  background-opacity: .10;
  border-radius: 20px;
  border: transparent;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.05em;
  padding-left: 8.5%;
  padding-right: 8.5%;
  color: ${ props => props.theme.textColor };
  ::placeholder {
    color: ${ props => props.theme.placeHolderColor };
  }
`;
LoginInput.defaultProps = { theme }

export const PasswordInput = styled(LoginInput).attrs({
  type: 'password'
})``;
