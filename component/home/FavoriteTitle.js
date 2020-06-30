import React from 'react';
import { styles } from '../../styles';
import { Text, TouchableOpacity, View } from 'react-native';

function FavoriteTitle(props) {
  return (
    <View style={styles.myWorkTitleContainer}>
      <Text style={styles.myWorkTitle}>Favorites</Text>
      <TouchableOpacity><Text style={{ ...styles.text, color: 'rgb(10, 132, 255)' }}>Edit</Text></TouchableOpacity>
    </View>
  );
}

export default FavoriteTitle;