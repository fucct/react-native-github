import React from 'react';
import { styles } from '../../styles';
import { Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

const MyWorkList = () => {
  return (
    <View style={styles.myWorkContainer}>
      <View style={styles.myWorkTitleContainer}>
        <Text style={styles.myWorkTitle}>My Work</Text>
      </View>
      <View style={styles.myWorkContents}>
        <View style={styles.myWorkContent}>
          <View style={styles.iconContainer}>
            <Octicons name="issue-opened" size={28} color='white'/>
          </View>
          <Text style={{ ...styles.text }}>Issue</Text>
          <View style={{ ...styles.iconContainer, backgroundColor: '#1c1c1e', marginLeft: 'auto' }}>
            <Octicons name="chevron-right" size={24} color="gray"/>
          </View>
        </View>
        <View style={styles.myWorkContent}>
          <View style={{ ...styles.iconContainer, backgroundColor: '#0A84FF' }}>
            <Octicons name="git-pull-request" size={28} color='white'/>
          </View>
          <Text style={{ ...styles.text }}>Pull Requests</Text>
          <View style={{ ...styles.iconContainer, backgroundColor: '#1c1c1e', marginLeft: 'auto' }}>
            <Octicons name="chevron-right" size={24} color="gray"/>
          </View>
        </View>
        <View style={styles.myWorkContent}>
          <View style={{ ...styles.iconContainer, backgroundColor: '#5E5CE6' }}>
            <Octicons name="repo" size={28} color='white'/>
          </View>
          <Text style={{ ...styles.text }}>Repositories</Text>
          <View style={{ ...styles.iconContainer, backgroundColor: '#1c1c1e', marginLeft: 'auto' }}>
            <Octicons name="chevron-right" size={24} color="gray"/>
          </View>
        </View>
        <View style={styles.myWorkContent}>
          <View style={{ ...styles.iconContainer, backgroundColor: '#FF9F0A' }}>
            <Octicons name="organization" size={28} color='white'/>
          </View>
          <Text style={{ ...styles.text }}>Organizations</Text>
          <View style={{ ...styles.iconContainer, backgroundColor: '#1c1c1e', marginLeft: 'auto' }}>
            <Octicons name="chevron-right" size={24} color="gray"/>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MyWorkList;