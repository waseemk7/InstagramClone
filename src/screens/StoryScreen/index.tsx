import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import storiesData from '../../data/stories';

import styles from './styles';

const StoryScreen = () => {
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);
  const route = useRoute();

  useEffect(() => {
    const userId = route.params.userId;
    const userStories = storiesData.find(
      storyData => storyData.user.id === userId,
    );
    setUserStories(userStories);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (userStories && userStories.stories.length > activeStoryIndex - 1) {
      setActiveStory(userStories.stories[activeStoryIndex]);
    }
  }, [activeStoryIndex]);

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: activeStory.imageUri}}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default StoryScreen;
