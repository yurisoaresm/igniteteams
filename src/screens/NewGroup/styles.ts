import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700}; 
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  name: 'group',
  size: 56,
  color: theme.COLORS.BLUE_700
}))`
  align-self: center;
`;
