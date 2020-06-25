import { MaterialCommunityIcons } from '@expo/vector-icons';
import hexToRgba from 'hex-to-rgba';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container } from 'styles/globalComponents';
import { globalTheme } from 'styles/theme';
import { BackClickable } from './styles';

type DetailsProps = {
  route: any;
  navigation: any;
};

export const Details: React.SFC<DetailsProps> = ({
  navigation,
  route: { params },
}) => {
  const { name, predominantType } = params;
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: hexToRgba(
          globalTheme.pokemon.type[predominantType],
          0.9
        ),
        elevation: 0,
        shadowOpacity: 0,
      },
      headerLeft: () => {
        return (
          <BackClickable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              color={globalTheme.whiteFA}
              size={35}
            />
          </BackClickable>
        );
      },
    });
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={hexToRgba(
          globalTheme.pokemon.type[predominantType],
          0.9
        )}
        barStyle="light-content"
        showHideTransition="slide "
      />
      <Container backgroundType={predominantType}></Container>
    </>
  );
};
