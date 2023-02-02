import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';

const data = [
  {
    imageUri: 'https://placekitten.com/250/250',
    name: 'Maria',
  },
  {
    imageUri:
      'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    name: 'Kevin',
  },
  {
    imageUri: 'https://robohash.org/mail@ashallendesign.co.uk',
    name: 'Roboto',
  },
  {
    imageUri: 'https://placebear.com/250/250',
    name: 'Gyrills',
  },
  {
    imageUri: 'https://placekitten.com/250/250',
    name: 'Antony',
  },
  {
    imageUri:
      'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    name: 'Rohan',
  },
  {
    imageUri: 'https://robohash.org/mail@ashallendesign.co.uk',
    name: 'Sushil',
  },
  {
    imageUri: 'https://placebear.com/250/250',
    name: 'Shubham',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Stories;
