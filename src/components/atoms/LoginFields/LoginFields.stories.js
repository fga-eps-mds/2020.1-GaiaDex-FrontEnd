import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Container from '../Container/Container';
import { gray } from '../../../theme/colorPalette';
import { LoginInput, PasswordInput } from './LoginFields';

storiesOf('LoginFields', module)
  .add('login input', () => (
    <Container color={gray.iron()}>
      <LoginInput placeholder="Seu email" />
    </Container>
  ))
  .add('password input', () => (
    <Container color={gray.iron()}>
      <PasswordInput placeholder="Senha" />
    </Container>
  ));
