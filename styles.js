import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '200',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  homeContainer: {
    flex:1,
    marginHorizontal: 20,
  },
  headerContainer: {
    height:'20%',
    justifyContent: 'flex-start',
  },
  userInfoContainer: {
    flex:3,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  titleContainer: {
    flex:5,
  },
  title:{
    fontSize:36,
    color: 'white',
    fontWeight: '500',
  },
  bodyContainer: {
    flex:1,
  },
  myWorkContainer: {
    flex:1,
  },
  myWorkContents: {
    flex:8,
    backgroundColor: '#1C1C1E',
    borderRadius: 20,
  },
  myWorkContent: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:5,
  },
  iconContainer: {
    marginHorizontal: 10,
    padding: 5,
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myWorkTitleContainer: {
    flex:1,
    marginBottom: 10,
  },
  myWorkTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
  favoriteContainer: {
    flex:1,
  },
});
