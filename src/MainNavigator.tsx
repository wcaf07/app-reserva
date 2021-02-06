import * as React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import PickModelScreen from './screens/PickModelScreen/PickModelScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PickModel" component={PickModelScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
