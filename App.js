import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import ReorderScreen from './src/screens/ReorderScreen';
import Cart from './src/screens/Cart';
import Account from './src/screens/Account';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E6E',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <FontAwesome5 name="home" size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="ReorderScreen"
          component={ReorderScreen}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <FontAwesome5 name="bars" size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <FontAwesome5 name="cart-plus" size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({focused, color}) => {
              return <FontAwesome5 name="user" size={25} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
