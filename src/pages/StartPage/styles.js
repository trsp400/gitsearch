import styled from 'styled-components/native';
import {Button} from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const UserButton = styled(Button).attrs({
  raised: true,
  containerStyle: {
    borderColor: '#6b49cb',
    width: 250,
    marginTop: 15,
  },
  buttonStyle: {
    padding: 10,
  },
  titleStyle: {
    color: '#6b49cb',
  },
  type: 'outline',
})``;

export const RepoButton = styled(Button).attrs({
  raised: true,
  buttonStyle: {
    backgroundColor: '#6b49cb',
    padding: 10,
  },
  containerStyle: {
    borderStyle: 'solid',
    borderColor: '#000',
    width: 250,
    margin: 15,
  },
  titleStyle: {
    color: '#FFF',
  },
  type: 'solid',
})``;

export const Title = styled.Text`
  font-size: 25px;
`;
