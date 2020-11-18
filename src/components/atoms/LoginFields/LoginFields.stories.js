import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { LoginInput, PasswordInput } from './LoginFields'

storiesOf('LoginFields', module).add('login input', () => <LoginInput placeholder="Seu email"/>)
.add('password input', () => <PasswordInput placeholder="Senha" />);
