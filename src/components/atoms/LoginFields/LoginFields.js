import styled from 'styled-components';
import { gray } from '../../../theme/colorPalette';

const theme = {
  textColor: gray.shark,
  placeHolderColor: gray.outerSpace(0.8),
};

export const LoginInput = styled.input.attrs({
  type: 'email',
})`
  box-sizing: border-box;
  height: 2.8em;
  width: 100%;
  background: ${() => gray.shark(0.1)};
  background-opacity: 0.1;
  border-radius: 20px;
  border: transparent;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.05em;
  padding-left: 20px;
  padding-right: 20px;
  color: ${(props) => props.theme.textColor};
  ::placeholder {
    color: ${(props) => props.theme.placeHolderColor};
  }
`;
LoginInput.defaultProps = { theme };

export const PasswordInput = styled(LoginInput).attrs({
  type: 'password',
})``;
