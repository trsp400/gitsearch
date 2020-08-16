import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import UserSeach from './pages/UserSearch';
import UserProfile from './pages/UserProfile';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="UserSeach">
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
      <Stack.Screen
        component={UserProfile}
        name="UserProfile"
        options={{
          title: 'User Profile',
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
