import { Button, Header, Highlight, Input } from '@components/index';

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
