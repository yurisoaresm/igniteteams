import { Button, Header, Highlight, Input } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import { createGroup } from '@storage/groups/createGroup';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert } from 'react-native';

import * as S from './styles';

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handlePlayers() {
    try {
      if (group.trim().length === 0) {
        throw new AppError('O nome da turma não pode ser vazio.');
      }

      await createGroup(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
      }
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

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" onPress={handlePlayers} />
      </S.Content>
    </S.Container>
  );
}
