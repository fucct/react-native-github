import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.headerContainer}>
        <View style={styles.userInfoContainer}>
          <Image style={styles.tinyLogo}
                 source={{
                   uri: 'https://reactnative.dev/img/tiny_logo.png',
                 }}/>
          <AntDesign name="pluscircleo" size={20} color="#007AFF"/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.bodyContainer}></View>
      </View>
    </SafeAreaView>
  );
}


