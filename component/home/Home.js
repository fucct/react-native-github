import React from 'react';
import { styles } from '../../styles';
import { StatusBar } from 'expo-status-bar';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import { View } from 'react-native';

function Home(props) {
  return (
    <View style={styles.homeContainer}>
      <StatusBar style="auto"/>
      <HomeHeader/>
      <HomeBody/>
    </View>
  );
}

export default Home;