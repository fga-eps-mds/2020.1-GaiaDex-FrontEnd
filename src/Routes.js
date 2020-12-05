import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Scanner from './screen/scanner';
import Login from './screen/login/login';
import Signup from './screen/login/signup';
import Update from './screen/login/updateUser';
import DeleteMyAccount from './screen/login/deleteMyAccount';
import MyProfile from './screen/myProfile';
import PlantCard from './screen/cardPlant/cardPlant';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    path: 'Login',
    navigationOptions: {
      headerShown: false,
    },
  },
  Signup: {
    screen: Signup,
    path: 'Signup',
    navigationOptions: {
      headerShown: false,
    },
  },
  Update: {
    screen: Update,
    path: 'Update',
    navigationOptions: {
      headerShown: false,
    },
  },
  Delete: {
    screen: DeleteMyAccount,
    path: 'Delete',
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppStack = createStackNavigator({
  MyProfile: {
    screen: MyProfile,
    path: 'MyProfile',
    navigationOptions: {
      headerShown: false,
    },
  },
  PlantCard:{
    screen: PlantCard,
    path: 'PlantCard',
    navigationOptions: {
      headerShown: false,
    },
  },
  Scanner: {
    screen: Scanner,
    path: 'Scanner',
    navigationOptions: {
      headerShown: false,
    },
  },
});

const Routes = createSwitchNavigator(
  {
    AuthStack,
    AppStack,
  },
  {
    initialRouteName: 'AuthStack',
  }
);

export default createAppContainer(Routes);
