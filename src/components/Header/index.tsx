import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, BackButton, BackIcon } from './styles';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoHome}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
}
