import React from 'react';
import { styles } from '../../styles';
import { View } from 'react-native';
import MyWorkList from './MyWorkList';

function HomeBody(props) {
  return (
    <View style={styles.bodyContainer}>
      <MyWorkList/>
      <View style={styles.favoriteContainer}></View>
    </View>
  );
}

export default HomeBody;