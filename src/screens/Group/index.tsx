import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';

export default function Groups() {
  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />

      <GroupCard title='Galera do adoradores'/>
    </Container>
  );
}
