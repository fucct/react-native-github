import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles';
import FavoriteTitle from './FavoriteTitle';
import FavoriteContents from './FavoriteContents';

function FavoriteList(props) {
  return (
    <View style={styles.myWorkContainer}>
      <FavoriteTitle/>
      <FavoriteContents/>
    </View>
  );
}

export default FavoriteList;