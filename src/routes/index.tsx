import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Main } from 'pages/Main';
import { globalTheme } from 'styles/theme';

const Stack = createStackNavigator();

const navigatorOptions = {
  headerStyle: {
    backgroundColor: globalTheme.background,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: 'transparent',
};

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigatorOptions}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
