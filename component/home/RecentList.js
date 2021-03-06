import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles';
import RecentTitle from './RecentTitle';
import RecentContents from './RecentContents';

function FavoriteList(props) {
  return (
    <View style={{...styles.myWorkContainer, marginBottom: 50}}>
      <RecentTitle/>
      <RecentContents/>
    </View>
  );
}

export default FavoriteList;