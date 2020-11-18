/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Container from '../Container/Container';
import { gray } from '../../../theme/colorPalette';
import {
  CircleLoginButton,
  BigBigCircleLoginButton,
} from './CircleLoginButton';

storiesOf('CircleLoginButton', module)
  .add('normal size', () => (
    <Container color={gray.shark()}>
      <CircleLoginButton />
    </Container>
  ))
  .add('big size', () => (
    <Container color={gray.shark()}>
      <BigBigCircleLoginButton />
    </Container>
  ));
