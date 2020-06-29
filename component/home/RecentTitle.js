import React from 'react';
import { styles } from '../../styles';
import { Text, View } from 'react-native';

function RecentTitle(props) {
  return (
    <View style={styles.myWorkTitleContainer}>
      <Text style={styles.myWorkTitle}>Recent</Text>
    </View>
  );
}

export default RecentTitle;