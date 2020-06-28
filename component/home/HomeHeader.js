import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles';
import UserInfo from './UserInfo';
import HomeTitle from './HomeTitle';

function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <UserInfo/>
      <HomeTitle/>
    </View>
  )
    ;
}

export default HomeHeader;