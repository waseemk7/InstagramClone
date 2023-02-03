import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {TouchableWithoutFeedback} from 'react-native';

const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);

  const onLikedPressed = () => {
    const amount = isLiked ? -1 : 1;
    setLikesCount(likesCount + amount);
    setIsLiked(!isLiked);
  };
  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.conatiner}>
      <View style={styles.iconsContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikedPressed}>
            {isLiked ? (
              <ADIcon name="heart" size={25} color={'#e73838'} />
            ) : (
              <ADIcon name="hearto" size={25} color={'#545454'} />
            )}
          </TouchableWithoutFeedback>
          <FontistoIcon name="comment" size={23} color={'#545454'} />
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={'#545454'}
          />
        </View>
        <FAIcon name="bookmark-o" size={25} color={'#545454'} />
      </View>
      <Text style={styles.likes}>{likesCount} likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
