import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from '../../styles';
import { useRecoilValue } from 'recoil';
import { getRepositoryListState } from './atoms';

function Repositories(props) {
  const repositories = useRecoilValue(getRepositoryListState);

  const renderItem = item => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', height: 70 }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ ...styles.tinyLogo }}
            source={{
              uri: item.avatar_url,
            }}
          />
        </View>
        <View style={{ flex: 8, marginHorizontal: 15 }}>
          <Text style={styles.text}>{item.full_name}</Text>
        </View>
      </View>
    );
  }


  return (
    <View style={{ flex: 1 }}>
      <FlatList data={repositories}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View
                  style={{ height: 1, flex: 1, backgroundColor: '#1C1C1E' }}/>}
                refreshing={false}
                onRefresh={() => alert("zz")}
                scrollsToTop={true}
      />
    </View>
  );
}

export default Repositories;