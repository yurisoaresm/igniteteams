import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Input, Filter, Header, Button, Highlight, ListEmpty, ButtonIcon, PlayerCard } from '@components/index';
import { AppError } from '@utils/AppError';

import { addPlayerByGroup } from '@storage/players/addPlayerByGroup';
import { getPlayersByGroupAndTeam } from '@storage/players/getPlayersByGroupAndTeam';

import * as S from './styles';
import { PlayerStorageDTO } from '@storage/players/playerStorageDTO';

type RouteParams = {
  group: string;
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    try {
      if (newPlayerName.trim().length === 0) {
        throw new AppError('Por favor, insira um nome válido.');
      }

      const newPlayer = {
        name: newPlayerName,
        team: team === 'Time A' ? 'A' : 'B'
      }

      await addPlayerByGroup(newPlayer, group);

      // Remove focus from input
      newPlayerNameInputRef.current?.blur();

      // Clear input
      setNewPlayerName(''); 
      // Update list
      fetchPlayersByTeam(); 

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Jogador", error.message);
      } else {
        Alert.alert("Novo Jogador", "Não foi possível adicionar o jogador.");
      }
    }
    
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await getPlayersByGroupAndTeam(group, team === 'Time A' ? 'A' : 'B');

      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
    }
  }

  useEffect(() => {
    console.log("UseEffect")
    fetchPlayersByTeam();
  }, [team]);

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight 
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <S.NumberOfPlayers>
          {players.length}
        </S.NumberOfPlayers>

      </S.HeaderList>

      <FlatList 
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item.name}
            onRemove={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
        ListEmptyComponent={() => (
          <ListEmpty
            message="Não há pessoas neste time" 
          />
        )}
      />

      <Button 
        title="Excluir Turma"
        type="SECONDARY"
      />
    </S.Container>
  );
}
