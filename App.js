import * as React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { globalTheme } from 'styles/theme';
import { Routes } from 'routes';
import { StatusBar } from 'react-native';
import { setCustomText } from 'react-native-global-props';

const customTextProps = {
  style: {
    fontFamily: 'OpenSans-Regular',
    color: globalTheme.black0D,
  },
};

setCustomText(customTextProps);

export const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={globalTheme.background}
      />
      <ThemeProvider theme={globalTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};
