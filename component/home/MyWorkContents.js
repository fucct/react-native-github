import React from 'react';
import { FlatList, View } from 'react-native';
import { issueIcon, organizationIcon, pullRequestIcon, repositoryIcon } from '../utils/constants';
import MyWorkItem from './MyWorkItem';
import { styles } from '../../styles';

function MyWorkContents(props) {
  const MyWorkData = [
    {
      id: '1',
      name: 'Issues',
      icon: issueIcon,
      backgroundColor: '#30D158',
    },
    {
      id: '2',
      name: 'Pull Requests',
      icon: pullRequestIcon,
      backgroundColor: '#0A84FF',
    },
    {
      id: '3',
      name: 'Repositories',
      icon: repositoryIcon,
      backgroundColor: '#5E5CE6',
    },
    {
      id: '4',
      name: 'Organizations',
      icon: organizationIcon,
      backgroundColor: '#FF9F0A',
    },
  ]

  return (
    <View style={styles.myWorkContents}>
      <FlatList
        data={MyWorkData}
        renderItem={({ item }) => <MyWorkItem item={item}/>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View
          style={{ width: '100%', height: 1, backgroundColor: 'rgb(38,38,40)', marginLeft: 60 }}/>}
      />
    </View>
  );
}

export default MyWorkContents;