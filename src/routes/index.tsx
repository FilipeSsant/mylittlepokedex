import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Details } from 'pages/Details';
import { Main } from 'pages/Main';
import * as React from 'react';
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
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
