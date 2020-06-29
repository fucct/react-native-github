import React from 'react';
import { styles } from '../../styles';
import { Text, View } from 'react-native';

function FavoriteTitle(props) {
  return (
    <View style={styles.myWorkTitleContainer}>
      <Text style={styles.myWorkTitle}>Favorite</Text>
    </View>
  );
}

export default FavoriteTitle;