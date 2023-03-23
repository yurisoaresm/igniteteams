import { useState } from 'react';
import { FlatList } from 'react-native';

import { Input, Filter, Header, Button, Highlight, ListEmpty, ButtonIcon, PlayerCard } from '@components/index';

import * as S from './styles';

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight 
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon
          icon="add"
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
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item}
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
