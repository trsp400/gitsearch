import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const UserProfile = ({route, navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size={70} color="#6b49cb" />
      ) : (
        <WebView source={{uri: route.params.uri}} style={{flex: 1}} />
      )}
    </View>
  );
};

export default UserProfile;
