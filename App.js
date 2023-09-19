// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BalloonPage from './BalloonPage';
import FormPage from './FormPage';
import { StatusBar } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator
    initialRouteName="Balloon"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f7f7f7', // Light gray background
        elevation: 0, // Remove shadow on Android
        shadowOpacity: 0, // Remove shadow on iOS
        borderBottomWidth: 0.5, // Add a thin border at the bottom
        borderBottomColor: '#d1d1d1', // Border color
      },
      headerTintColor: '#333', // Dark text color
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      cardStyle: {
        backgroundColor: 'white', // Background color for the screen
      },
      headerBackTitleVisible: false, // Hide back title
    }}
  >
    <Stack.Screen
      name="Balloon"
      component={BalloonPage}
      options={{
        title: 'Balloon Animation Shagoon Maurya', // Custom title
        headerTitleAlign: 'center', // Center the title
        headerTitleStyle: {
          fontSize: 18,
        },
        headerPadding: {
          top: StatusBar.currentHeight, // Add padding for the status bar
        },
      }}
    />
    <Stack.Screen
      name="Form"
      component={FormPage}
      options={{
        title: 'User Form',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 18,
        },
        headerPadding: {
          top: StatusBar.currentHeight,
        },
      }}
    />
  </Stack.Navigator>
</NavigationContainer>
  );
}
