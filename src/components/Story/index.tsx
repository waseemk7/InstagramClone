import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from '../Story/styles';

const Story = ({imageUri, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Story;
