import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    user: {
      imageUri: 'https://robohash.org/mail@ashallendesign.co.uk',
      name: 'Jason',
    },
    imageUri: 'https://placekitten.com/250/250',
    caption: 'Beautiful Cats #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://robohash.org/mail@ashallendesign.co.uk',
      name: 'Jason',
    },
    imageUri: 'https://picsum.photos/200',
    caption: 'Beautiful Cats #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://robohash.org/mail@ashallendesign.co.uk',
      name: 'Jason',
    },
    imageUri: 'https://picsum.photos/200/300/?blur=2',
    caption: 'Beautiful Cats #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    user: {
      imageUri: 'https://robohash.org/mail@ashallendesign.co.uk',
      name: 'Jason',
    },
    imageUri: 'https://picsum.photos/200/300/?blur=2',
    caption: 'Beautiful Cats #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => {
  return (
    <FlatList
      data={data}
      ListHeaderComponent={Stories}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;
