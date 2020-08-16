import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StartPage from './pages/StartPage';
import UserSeach from './pages/UserSearch';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={StartPage}
        name="Home"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#6b49cb',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          },
        }}
      />
      <Stack.Screen
        component={UserSeach}
        name="SearchUser"
        options={{
          title: 'Search User',
          headerStyle: {
            backgroundColor: '#6b49cb',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
