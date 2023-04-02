import { Button, Header, Highlight, Input } from '@components/index';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export function NewGroup() {
  const navigation = useNavigation();

  function handlePlayers() {
    navigation.navigate('players', { group: 'Group 1' });
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
        />

        <Button 
          title="Criar"
          onPress={handlePlayers}
        />
      </S.Content>

    </S.Container>
  );
}
