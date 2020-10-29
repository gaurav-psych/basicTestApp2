import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './app/screens/Home';
import FirstScreen from './app/screens/FirstScreen';
import SecondScreen from './app/screens/SecondScreen';
import TestScreen from './app/screens/TestScreen';
import FourthScreen from './app/screens/FourthScreen';
import ListScreen from './app/screens/ListScreen';
import UserDetails from './app/screens/UserDetails';
import ThirdDrawer from './app/screens/THirdDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ExtraStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserDetails"
      screenOptions={{headerShown: true}}>
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="FirstScreen"
      screenOptions={{headerShown: true}}>
      <Drawer.Screen name="FirstScreen" component={FirstScreen} />
      <Drawer.Screen name="ListScreen" component={ListScreen} />
      <Drawer.Screen name="ThirdDrawer" component={ThirdDrawer} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DrawerStack"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen
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
        <Stack.Screen name="TestScreen" component={TestScreen} /> */}
        <Stack.Screen name="ExtraStack" component={ExtraStack} />
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
