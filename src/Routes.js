import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Scanner from './screen/scanner';
import PlantView from './screen/plant/plantView';

const AppStack = createStackNavigator({
  Scanner: {
    screen: Scanner,
    path: 'Scanner',
    navigationOptions: {
      headerShown: false,
    },
  },
  Plant: {
    screen: PlantView,
    path: 'Plant',
    navigationOptions: {
      headerShown: false,
    },
  },
});

const Routes = createSwitchNavigator(
  {
    AppStack,
  },
  {
    initialRouteName: 'AppStack',
  }
);

export default createAppContainer(Routes);
