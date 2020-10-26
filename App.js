import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './app/screens/Home';
import FirstScreen from './app/screens/FirstScreen';
import SecondScreen from './app/screens/SecondScreen';
import TestScreen from './app/screens/TestScreen';
import FourthScreen from './app/screens/FourthScreen';
import ListScreen from './app/screens/ListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListScreen"
        screenOptions={{headerShown: false}}
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#0a0a0a',
        //     elevation: 12,
        //   },
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //     color: '#fff',
        //   },
        // }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Time Slots'}}
        />
        <Stack.Screen
          name="FirstScreen"
          component={FirstScreen}
          screenOptions={{headerShown: false}}
          // options={{headerShown: false}}
          options={({route}) => ({
            title: 'Book a slot',
            headerTintColor: '#36e4ff',
            headerTitleStyle: {marginLeft: 0},
            headerStyle: {
              elevation: 12,
              backgroundColor: '#0a0a0a',
            },
          })}
        />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="FourthScreen" component={FourthScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
