import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../styles';

function UserIcon({isCircle}) {
  return (
    <TouchableWithoutFeedback onPress={() => alert("zz")}><Image
      style={{ ...styles.tinyLogo, borderRadius: isCircle? 100:10,}}
      source={{
        uri: 'https://avatars3.githubusercontent.com/u/48818566?s=460&u=810bc1adf556ca5d4590c5dfaf3b15f8d98ef8fb&v=4',
      }}/>
    </TouchableWithoutFeedback>
  );
}

export default UserIcon;