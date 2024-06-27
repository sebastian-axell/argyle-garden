import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import HomeScreen from './HomeScreen';
import PlantList from './PlantList';
import AdoptPlant from './AdoptPlant';
import ScanPlant from './ScanPlant';
import { firebaseConfig } from '../firebaseApp'; // Adjust this import as per your Firebase initialization

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Stack navigator for navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PlantList">
              {(props) => <PlantList {...props} db={db}/>}
          </Stack.Screen>
          <Stack.Screen name="AdoptPlant" component={AdoptPlant} />
        <Stack.Screen name="ScanPlant" component={ScanPlant} />


      </Stack.Navigator>
    </NavigationContainer>
  );

}
