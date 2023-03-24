import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header, Highlight, GroupCard, ListEmpty, Button } from '@components/index';


import * as S from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <S.Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Tente cadastrar uma nova turma" 
          />
        )}
      />

      <Button 
        title="Criar nova turma"
      />
    </S.Container>
  );
}