import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button, Header, Highlight, Input } from '@components/index';
import { createGroup } from '@storage/groups/createGroup';

import * as S from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();
  
  async function handlePlayers() {
    try {
      await createGroup(group);
      navigation.navigate('players', { group });
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <S.Container>
      <Header showBackButton />
      
      <S.Content>
        <S.Icon />
        <Highlight 
          title="Nova Turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />

        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          onPress={handlePlayers}
        />
      </S.Content>

    </S.Container>
  );
}
