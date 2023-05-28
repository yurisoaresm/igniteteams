import { TouchableOpacityProps } from 'react-native';

import { Container, Title, FilterStyleProps } from './styles';

type Props = {
  title: string;
} & TouchableOpacityProps &
  FilterStyleProps;

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
