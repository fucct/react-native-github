import React from 'react';
import { styles } from '../../styles';
import { Image, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function UserInfo(props) {
  return (
    <View style={styles.userInfoContainer}>
      <Image style={styles.tinyLogo}
             source={{
               uri: 'https://avatars3.githubusercontent.com/u/48818566?s=460&u=810bc1adf556ca5d4590c5dfaf3b15f8d98ef8fb&v=4',
             }}/>
      <AntDesign name="pluscircleo" size={20} color='dodgerblue'/>
    </View>
  );
}

export default UserInfo;