import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {View} from 'react-native';

const Post = ({post: {user}}) => {
  return (
    <View>
      <Header imageUri={user.imageUri} name={user.name} />
      <Body />
      <Footer />
    </View>
  );
};

export default Post;
