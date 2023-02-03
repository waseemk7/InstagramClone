import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import logo from './src/assets/images/logo.png';

import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeft: () => (
            <Feather name="camera" size={25} color={'#000000'} />
          ),
          headerTitle: () => (
            <Image source={logo} resizeMode="contain" style={{width: 125, marginTop: -105}} />
          ),
          headerRight: () => (
            <IoniconsIcon
              name="paper-plane-outline"
              size={25}
              color={'#000000'}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <Foundation name="home" size={size} color={color} />;
            }
            if (route.name === 'Discovery') {
              return <Feather name="search" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return <Feather name="plus-square" size={size} color={color} />;
            }
            if (route.name === 'Notifications') {
              return <AntDesign name="hearto" size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return (
                <IoniconsIcon name="person-outline" size={size} color={color} />
              );
            }
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
