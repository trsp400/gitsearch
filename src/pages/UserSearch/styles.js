import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Searchbar from 'react-native-paper/src/components/Searchbar';
import Avatar from 'react-native-paper/src/components/Avatar/AvatarImage';
import {Button} from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 25px;
`;

export const Search = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
  height: 50px;
`;

export const SearchButton = styled(Button).attrs({
  buttonStyle: {
    backgroundColor: '#6b49cb',
    padding: 10,
    height: 50,
  },
  containerStyle: {
    width: 50,
    marginLeft: 10,
    height: 50,
  },
  titleStyle: {
    color: '#FFF',
  },
})``;

export const SearchUser = styled(Searchbar).attrs({
  placeholder: 'Type an username',
  style: {
    width: 550,
  },
  inputStyle: {
    width: 550,
  },
})`
  width: 300px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  padding: 7px;
  border-color: #6b49cb;
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Name = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
`;
export const Bio = styled.Text`
  font-size: 12px;
  padding: 7px;
  text-align: center;
`;
export const AvatarImage = styled(Avatar).attrs({})`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-self: center;
  background: #6b49cb;
`;

export const Buttons = styled.View`
  /* flex: 1; */
  flex-direction: row;
`;

export const ProfileButton = styled(Button).attrs({
  raised: true,
  containerStyle: {
    borderColor: '#6b49cb',
    width: 150,
  },
  buttonStyle: {
    borderColor: '#6b49cb',
  },
  titleStyle: {
    color: '#6b49cb',
  },
  type: 'outline',
})``;

export const DeleteUser = styled(Button).attrs({
  // raised: true,
  containerStyle: {
    borderColor: '#FF6347',
    width: 40,
    marginLeft: 5,
  },
  buttonStyle: {
    borderColor: '#FF6347',
  },
  titleStyle: {
    color: '#FF6347',
  },
  type: 'outline',
})``;
