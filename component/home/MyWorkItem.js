import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import { navigationArrow } from '../utils/constants';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

const MyWorkItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{ ...styles.myWorkContent, }}
                      onPress={() => navigation.navigate(item.name)}
    >
      <View style={{ ...styles.iconContainer, flex:1,}}>
        <View style={{paddingTop: 2, width:33, height:33, alignItems: 'center', justifyContent: 'center', backgroundColor: `${item.backgroundColor}`, borderRadius: 5,}}>
        {item.icon}
        </View>
      </View>
      <View style={{flex: 9, height: 40, flexDirection: 'row', borderBottomWidth: item.isLast? 0: 1, borderBottomColor: '#48484A', alignItems: 'center' }}>
      <Text style={{ ...styles.text, fontSize: 17, fontWeight: '400' }}>{item.name}</Text>
      <View style={{ ...styles.iconContainer, marginLeft: 'auto' }}>
        {navigationArrow}
      </View>
      </View>
    </TouchableOpacity>
  );
}

export default MyWorkItem;