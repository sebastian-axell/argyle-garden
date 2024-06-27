import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import PlantList from './PlantList';
import AdoptPlant from './AdoptPlant';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlantList" component={PlantList} />
        <Stack.Screen name="AdoptPlant" component={AdoptPlant} />
        {/* <Stack.Screen name="ScanPlant" component={ScanPlant} /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}
