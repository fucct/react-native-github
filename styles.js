import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    height:'20%',
    justifyContent: 'space-between',
  },
  userInfoContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex:1,
  },
  title:{
    fontSize:36,
    color: 'white',
    fontWeight: '500',
  },
  bodyContainer: {
    flex:1,
  },
  tinyLogo: {
    width: 35,
    height: 35,
    borderRadius: 100,
  }

});
