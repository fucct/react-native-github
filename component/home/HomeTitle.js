import React from 'react';
import { styles } from '../../styles';
import { Text, View } from 'react-native';

function HomeTitle(props) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

export default HomeTitle;