import React from 'react';
import {View} from 'react-native';

import Post from '../../components/Post';

import Stories from '../../components/Stories';

const post = {
  user: {
    imageUri: 'https://robohash.org/mail@ashallendesign.co.uk',
    name: 'Sushil',
  },
};

const HomeScreen = () => {
  return (
    <View>
      <Stories />
      <Post post={post} />
    </View>
  );
};

export default HomeScreen;
