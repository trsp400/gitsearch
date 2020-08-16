import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import Routes from './routes';
import './config/ReactotronConfig';
s
const App = () => (
  <NavigationContainer>
    <PaperProvider>
      <Routes />
      <StatusBar backgroundColor="#6b49cb" />
    </PaperProvider>
  </NavigationContainer>
);

export default App;
