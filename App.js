import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './component/home/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import Notifications from './component/home/Notifications';
import Search from './component/home/Search';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'md-home'
      } else if (route.name === 'Notifications') {
        iconName = 'ios-notifications-outline';
      } else if (route.name === 'Search') {
        iconName = 'ios-search';
      }
      return <Ionicons name={iconName} size={size} color={color}/>;
    },
  });

  const tabBarOptions = {
    activeTintColor: '#0A84FF',
    inactiveTintColor: '#8E8E93',
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar hidden/>
      <Tab.Navigator screenOptions={screenOptions}
                     tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Home"
                    component={HomeScreen}
        />
        <Tab.Screen name="Notifications"
                    component={Notifications}
        />
        <Tab.Screen name="Search"
                    component={Search}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}