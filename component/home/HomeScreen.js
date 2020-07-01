import React from 'react';
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack';
import UserIcon from './UserIcon';
import AddButton from './AddButton';
import Repositories from './Repositories';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}
                    options={{
                      headerLeft: () => <UserIcon isCircle={true}/>,
                      headerRight: () => <AddButton/>,
                    }}
      />
      <Stack.Screen name="Repositories" component={Repositories}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
