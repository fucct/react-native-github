import React from 'react';
import { styles } from '../../styles';
import { View } from 'react-native';
import MyWorkList from './MyWorkList';
import FavoriteList from './FavoriteList';

function HomeBody(props) {
  return (
    <View style={styles.bodyContainer}>
      <MyWorkList/>
      <FavoriteList/>
    </View>
  );
}

export default HomeBody;