import React from 'react';
import {View} from 'react-native';

import Post from '../../components/Post';

import Stories from '../../components/Stories';

const HomeScreen = () => {
  return (
    <View>
      <Stories />
      <Post />
    </View>
  );
};

export default HomeScreen;
