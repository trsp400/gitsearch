import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';
import './config/ReactotronConfig';

const App = () => (
  <NavigationContainer>
    <Routes />
    <StatusBar backgroundColor="#6b49cb" />
  </NavigationContainer>
);

export default App;
