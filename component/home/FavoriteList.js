import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles';

function FavoriteList(props) {
  return (
    <View style={styles.favoriteContainer}>
      <Text style={{...styles.text, fontSize: 28, fontWeight:'400',}}>Favorite</Text>
    </View>
  );
}

export default FavoriteList;