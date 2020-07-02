import React from 'react';
import { View } from 'react-native';
import { issueIcon, organizationIcon, pullRequestIcon, repositoryIcon } from '../utils/constants';
import MyWorkItem from './MyWorkItem';
import { styles } from '../../styles';

function MyWorkContents() {
  const MyWorkData = [
    {
      id: '1',
      name: 'Issues',
      icon: issueIcon,
      backgroundColor: '#30D158',
      isLast: false,
    },
    {
      id: '2',
      name: 'Pull Requests',
      icon: pullRequestIcon,
      backgroundColor: '#0A84FF',
      isLast: false,
    },
    {
      id: '3',
      name: 'Repositories',
      icon: repositoryIcon,
      backgroundColor: '#5E5CE6',
      isLast: false,
    },
    {
      id: '4',
      name: 'Organizations',
      icon: organizationIcon,
      backgroundColor: '#FF9F0A',
      isLast: true,
    },
  ]

  return (
    <View style={styles.myWorkContents}>
      {MyWorkData.map(item => <MyWorkItem key={item.id} item={item} />)}
    </View>
  );
}

export default MyWorkContents;