import React from 'react';
import { styles } from '../../styles';
import { View } from 'react-native';
import MyWorkList from './MyWorkList';
import FavoriteList from './FavoriteList';
import RecentList from './RecentList';

function HomeBody({ navigation }) {
  return (
    <View style={styles.bodyContainer}>
      <MyWorkList navigation={navigation}/>
      <FavoriteList/>
      <RecentList/>
    </View>
  );
}

export default HomeBody;