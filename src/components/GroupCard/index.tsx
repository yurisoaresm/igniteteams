import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

type Props = {
  title: string;
} & TouchableOpacityProps;

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  );
}
