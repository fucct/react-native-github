import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import Home from './component/home/Home';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}


