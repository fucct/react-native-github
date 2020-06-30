import React from 'react';
import { Text, View } from 'react-native';
import UserIcon from './UserIcon';
import { styles } from '../../styles';
import { navigationArrow } from '../utils/constants';

function FavoriteContent({ isLast }) {
  return (
    <View style={{ ...styles.myWorkContent, }}>
      <UserIcon isCircle={false}/>
      <View style={{
        alignItems: 'center',
        borderBottomWidth: isLast ? 0 : 1,
        borderColor: '#48484A',
        marginLeft: 5,
        height: 55,
        flex: 1,
        flexDirection: 'row',
      }}>
        <Text style={{ ...styles.text, }}>fucct/react-native-github</Text>
        <View style={{ ...styles.iconContainer, marginLeft: 'auto' }}>
          {navigationArrow}
        </View>
      </View>
    </View>
  );
}

export default FavoriteContent;