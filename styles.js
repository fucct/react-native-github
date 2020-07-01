import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
  },
  homeContainer: {
    flex:1,
    paddingHorizontal: 20,
  },
  tinyLogo: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    marginVertical: 5,
    justifyContent: 'flex-start',
  },
  title:{
    fontSize:36,
    color: 'white',
    fontWeight: '600',
  },
  bodyContainer: {
    flex:9,
  },
  myWorkContainer: {
    flex:1,
    marginVertical: 30,
  },
  myWorkContents: {
    flex:8,
    backgroundColor: '#1C1C1E',
    borderRadius: 10,
    justifyContent: 'center'
  },
  myWorkContent: {
    height:33,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:5,
    marginVertical: 12,
  },
  iconContainer: {
    marginHorizontal: 10,
    padding: 5,
    width: 33,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myWorkTitleContainer: {
    flex:1,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  myWorkTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: '500',
  },
  favoriteContainer: {
    flex:1,
  },
});
