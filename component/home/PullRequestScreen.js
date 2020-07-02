import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../../styles';

function PullRequestScreen(props) {
  return (
    <View>
      <Text style={{ ...styles.text, fontSize: 36, fontWeight: 'bold', margin: 10, }}>Pull Requests</Text>
      <TextInput placeholder='  &#128269; Search' placeholderTextColor='gray' style={{ margin: 10, borderRadius: 10, height: 35, backgroundColor: '#1C1C1E',}}/>
      <View>
      </View>
    </View>
  );
}

export default PullRequestScreen;