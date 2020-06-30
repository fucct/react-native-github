import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles';
import FavoriteContent from './FavoriteContent';

function FavoriteContents(props) {

  return (
    <View style={{...styles.myWorkContents, }}>
      <FavoriteContent />
      <FavoriteContent isLast={true}/>
    </View>
  );
}

export default FavoriteContents;