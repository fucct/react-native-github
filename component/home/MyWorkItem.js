import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import { navigationArrow } from '../utils/constants';
import React from 'react';

const MyWorkItem = ({ item }) => {
  return (
    <TouchableOpacity key={item.id} style={{ ...styles.myWorkContent, }}>
      <View style={{ ...styles.iconContainer, backgroundColor: `${item.backgroundColor}`, }}>
        {item.icon}
      </View>
      <Text style={{ ...styles.text, fontSize: 17, fontWeight: '400' }}>{item.name}</Text>
      <View style={{ ...styles.iconContainer, marginLeft: 'auto' }}>
        {navigationArrow}
      </View>
    </TouchableOpacity>
  );
}

export default MyWorkItem;