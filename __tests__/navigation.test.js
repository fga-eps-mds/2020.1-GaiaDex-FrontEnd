import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

import Routes from '../src/Routes';


describe('<Routes />', () => {

  it('navigates from login to signup and from signup to login', async() => {
    const component = (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );

    const { findByText, findAllByText } = render(component);

    var log = await findByText('Seja bem-vindo');

    expect(log).toBeTruthy();

    var toClick = await findByText('Cadastro');
    fireEvent(toClick, 'press');

    const cad = await findByText('Criar Conta');

    expect(cad).toBeTruthy();

    var toClick = await findAllByText('Login');
    fireEvent(toClick[1], 'press');

    var log = await findAllByText('Seja bem-vindo');

    expect(log[1]).toBeTruthy();


  });

  it('navigates from login to update and from update to login', async() => {
    const component = (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );

    const { findByText, findAllByText } = render(component);

    var log = await findByText('Seja bem-vindo');

    expect(log).toBeTruthy();

    var toClick = await findByText('Esqueci a senha');
    fireEvent(toClick, 'press');

    const upd = await findByText('Alterar Dados:');

    expect(upd).toBeTruthy();

    var toClick = await findAllByText('Login');
    fireEvent(toClick[1], 'press');

    var log = await findAllByText('Seja bem-vindo');

    expect(log[1]).toBeTruthy();


  });
 

});