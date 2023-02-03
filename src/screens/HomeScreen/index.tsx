import React from 'react';
import {View} from 'react-native';

import Post from '../../components/Post';

import Stories from '../../components/Stories';

const post = {
  user: {
    imageUri: 'https://robohash.org/mail@ashallendesign.co.uk',
    name: 'Jason',
  },
  imageUri: 'https://placekitten.com/250/250',
  caption: 'Beautiful Cats #instagram',
  likesCount: 1234,
  postedAt: '6 minutes ago',
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
