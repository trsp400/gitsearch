import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({host: '192.168.1.71'})
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  tron.clear();
  console.tron = tron;
}
