import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const ProfilePicture = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePicture;
