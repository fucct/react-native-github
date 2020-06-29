import React from 'react';
import { styles } from '../../styles';
import { StatusBar } from 'expo-status-bar';
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import { ScrollView } from 'react-native';

function Home(props) {
  return (
    <ScrollView style={styles.homeContainer}>
      <StatusBar style="auto"/>
      <HomeHeader/>
      <HomeBody/>
    </ScrollView>
  );
}

export default Home;