import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import Home from './component/home/Home';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Home/>
      </SafeAreaView>
    </NavigationContainer>
  );
}


