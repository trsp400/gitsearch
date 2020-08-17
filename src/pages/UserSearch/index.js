import React, {useState, useEffect} from 'react';
import {
  Container,
  SearchButton,
  SearchUser,
  Search,
  List,
  Name,
  Bio,
  AvatarImage,
  ProfileButton,
  User,
  Buttons,
  DeleteUser,
} from './styles';
import {
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

const UserSearch = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [stateUsers, setStateUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const deleteUser = (login) => {
    const newArrayUsers = users.filter((users) => {
      return users.login !== login;
    });
    setUsers(newArrayUsers);
    saveToStorage(newArrayUsers);
  };

  const saveToStorage = async (data) => {
    await AsyncStorage.setItem('users', JSON.stringify(data));
  };

  const handleSubmit = async () => {
    setLoading(true);
    Keyboard.dismiss();
    try {
      const response = await api.get(`/users/${search}`);

      const data = {
        login: response.data.login,
        name: response.data.name || '',
        bio: response.data.bio || '',
        avatar: response.data.avatar_url || '',
      };
      if (users != null && users.length !== 0) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].login === response.data.login) {
            setLoading(false);
            Alert.alert('Usuário já cadastrado!');
            return null;
          }
        }
        setUsers([data, ...users]);

        setSearch('');
        setLoading(false);
      } else {
        setUsers([data, ...users]);

        setSearch('');
        setLoading(false);
      }
    } catch (error) {
      setSearch('');
      setLoading(false);
      Alert.alert('Oops!', 'Usuário não encontrado!');
    }
  };

  useEffect(() => {
    if (users.length > 1) {
      saveToStorage(users);
    }
  }, [users]);

  useEffect(() => {
    const retrieveUsers = async () => {
      await AsyncStorage.getItem('users')
        .then((res) => {
          if (res) {
            setUsers(JSON.parse(res));
          }
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    retrieveUsers();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Search>
          <SearchUser
            value={search}
            onChangeText={(text) => setSearch(text)}
            selectionColor="#6b49cb"
            autoCapitalize="none"
            keyboardType="default"
            onSubmitEditing={handleSubmit}
            icon={() => <Icon name="search" size={30} color="gray" />}
          />
          <SearchButton
            icon={() =>
              loading ? (
                <ActivityIndicator visible size="small" color="#FFF" />
              ) : (
                <Icon name="search" size={30} color="#FFF" />
              )
            }
            onPress={handleSubmit}
          />
        </Search>

        {users !== [null] ? (
          <List
            data={users}
            keyExtractor={(user) => user.login}
            renderItem={({item}) => (
              <User>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UserProfile', {
                      uri: `https://github.com/${item.login}`,
                    })
                  }>
                  <AvatarImage source={{uri: item.avatar}} />
                </TouchableOpacity>

                <Name selectable selectionColor="#6b49cb">
                  {item.name}
                </Name>
                <Bio selectable selectionColor="#6b49cb">
                  {item.bio}
                </Bio>

                <Buttons>
                  <ProfileButton
                    title="Ver Perfil"
                    onPress={() =>
                      navigation.navigate('UserProfile', {
                        uri: `https://github.com/${item.login}`,
                      })
                    }
                  />
                  <DeleteUser
                    icon={() => <Icon name="close" size={20} color="#FF6347" />}
                    onPress={() => deleteUser(item.login)}
                  />
                </Buttons>
              </User>
            )}
          />
        ) : null}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default UserSearch;
