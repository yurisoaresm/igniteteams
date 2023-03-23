import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import * as S from './styles';

export function NewGroup() {
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
        />
      </S.Content>

    </S.Container>
  );
}
