import React from 'react';
import { styles } from '../../styles';
import { StatusBar } from 'expo-status-bar';
import HomeBody from './HomeBody';
import { ScrollView } from 'react-native';
import HomeTitle from './HomeTitle';

function Home(props) {
  return (
    <ScrollView style={styles.homeContainer}
                indicatorStyle='white'
    >
      <StatusBar style="auto"/>
      <HomeTitle/>
      <HomeBody/>
    </ScrollView>
  );
}

export default Home;