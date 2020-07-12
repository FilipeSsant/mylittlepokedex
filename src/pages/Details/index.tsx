import { MaterialCommunityIcons } from '@expo/vector-icons';
import hexToRgba from 'hex-to-rgba';
import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Container } from 'styles/globalComponents';
import { globalTheme } from 'styles/theme';
import { BottomDrawer } from './BottomDrawer';
import {
  BackClickable,
  DetailsBody,
  DetailsHeader,
  Pill,
  PillText,
  PillTypeBox,
  PokemonName,
} from './styles';

type DetailsProps = {
  route: any;
  navigation: any;
};

export const Details: React.SFC<DetailsProps> = ({
  navigation,
  route: { params },
}) => {
  const { name, types, predominantType } = params;

  const setHeaderConfiguration = useCallback(async () => {
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
  }, [navigation]);

  useEffect(() => {
    setHeaderConfiguration();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={hexToRgba(
          globalTheme.pokemon.type[predominantType],
          0.9
        )}
        barStyle="light-content"
      />
      <Container backgroundType={predominantType} noPadding>
        <DetailsBody>
          <DetailsHeader>
            <PokemonName>{name}</PokemonName>
            <PillTypeBox>
              {types &&
                types.map((obj) => (
                  <Pill key={`${name}${obj.type.name}`}>
                    <PillText>{obj.type.name}</PillText>
                  </Pill>
                ))}
            </PillTypeBox>
          </DetailsHeader>
          <BottomDrawer data={params} />
        </DetailsBody>
      </Container>
    </>
  );
};
