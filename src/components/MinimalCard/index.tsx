import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { globalTheme } from 'styles/theme';
import {
  Card,
  IconBox,
  ImageBox,
  InfoBox,
  Pill,
  PillBox,
  PillText,
  PokemonImage,
  TitleBox,
} from './styles';

type Pokemon = {
  id: number;
  name: string;
  types: any;
  navigation: any;
};

export const MinimalCard: React.memo<Pokemon> = ({
  id,
  pokemon,
  navigation,
}) => {
  const { types, name } = pokemon;
  const predominantType = types[0].type.name;
  return (
    <Card
      activeOpacity={0.7}
      type={predominantType}
      onPress={() =>
        navigation.navigate('Details', {
          pokemon: {
            ...pokemon,
            uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
          },
          predominantType,
        })
      }
    >
      <IconBox>
        <MaterialCommunityIcons
          name="pokeball"
          color={globalTheme.grayF2}
          size={140}
        />
      </IconBox>
      <InfoBox>
        <TitleBox>{name}</TitleBox>
        <PillBox>
          {types &&
            types.map((obj) => (
              <Pill type={predominantType} key={`${name}${obj.type.name}`}>
                <PillText>{obj.type.name}</PillText>
              </Pill>
            ))}
        </PillBox>
      </InfoBox>
      <ImageBox>
        <PokemonImage
          resizeMode="contain"
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
          }}
        />
      </ImageBox>
    </Card>
  );
};
