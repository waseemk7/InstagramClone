import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import {View} from 'react-native';

const Post = () => {
  return (
    <View>
      <Header />
      <Body />
      <Footer />
    </View>
  );
};

export default Post;
