import React from 'react';
import { styles } from '../../styles';
import { View } from 'react-native';
import MyWorkTitle from './MyWorkTitle';
import MyWorkContents from './MyWorkContents';

const MyWorkList = ({navigation}) => {
  return (
    <View style={styles.myWorkContainer}>
      <MyWorkTitle/>
      <MyWorkContents navigation={navigation}/>
    </View>
  );
}

export default MyWorkList;