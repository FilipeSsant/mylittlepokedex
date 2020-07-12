import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from 'routes';
import { ThemeProvider } from 'styled-components/native';
import { globalTheme } from 'styles/theme';

type Props = any;

export const App: React.SFC<Props> = () => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  let [fontsLoaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
  }
};
