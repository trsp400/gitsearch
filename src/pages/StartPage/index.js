import React from 'react';
import {StatusBar} from 'react-native';

import {Container, UserButton, RepoButton, Title} from './styles';

const StartPage = ({navigation}) => {
  return (
    <Container>
      <Title>Select an option</Title>
      <UserButton
        title="Search User"
        onPress={() => navigation.navigate('SearchUser')}
      />
      <RepoButton title="Search Repository" />
    </Container>
  );
};

export default StartPage;
