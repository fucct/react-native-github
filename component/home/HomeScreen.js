import React from 'react';
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack';
import UserIcon from './UserIcon';
import AddButton from './AddButton';

const Stack = createStackNavigator();

function HomeScreen(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}
                    options={{
                      headerLeft: () => <UserIcon isCircle={true}/>,
                      headerRight: () => <AddButton/>,
                    }}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
