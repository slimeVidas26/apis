import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';


      

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home"
         component={HomeScreen}
         options={{title:'Home'}} />

        <Stack.Screen name="Details"
         component={DetailsScreen} 
         initialParams = {{itemId : 45}}/>

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


