import React from 'react';
import { styles } from '../../styles';
import { Text, View } from 'react-native';

function MyWorkTitle(props) {
  return (
    <View style={styles.myWorkTitleContainer}>
      <Text style={styles.myWorkTitle}>My Work</Text>
    </View>
  );
}

export default MyWorkTitle;