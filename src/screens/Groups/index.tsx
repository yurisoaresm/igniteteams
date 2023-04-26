import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header, Highlight, GroupCard, ListEmpty, Button, Loading } from '@components/index';


import * as S from './styles';
import { getAllGroups } from '@storage/groups/getAllGroups';

export function Groups() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  
  // Navigate to new group screen
  function handleNewGroup() {
    navigation.navigate('new');
  }

  // Fetch all groups from storage
  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await getAllGroups();
      setGroups(data);

    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
    } finally {
      setIsLoading(false);
    }
  }

  // Navigate to players screen of the group
  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  // Execute fetchGroups function when component is focused
  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <S.Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      {
        isLoading ? <Loading /> :
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item} 
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => (
            <ListEmpty 
              message="Tente cadastrar uma nova turma" 
            />
          )}
        />
      }
      <Button 
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </S.Container>
  );
}
