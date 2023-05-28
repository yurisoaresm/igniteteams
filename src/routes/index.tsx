import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { AppRoutes } from './app.routes';

export function Routes() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_700 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
