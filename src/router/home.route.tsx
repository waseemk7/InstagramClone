import * as React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/logo.png';

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
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
            <Image
              source={logo}
              resizeMode="contain"
              style={{width: 135, height: 50}}
            />
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
      <HomeStack.Screen
        name="Story"
        component={StoryScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
