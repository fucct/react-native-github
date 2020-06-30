import React from 'react';
import { styles } from '../../styles';
import { View } from 'react-native';
import MyWorkTitle from './MyWorkTitle';
import MyWorkContents from './MyWorkContents';

const MyWorkList = () => {
  return (
    <View style={styles.myWorkContainer}>
      <MyWorkTitle/>
      <MyWorkContents/>
    </View>
  );
}

export default MyWorkList;