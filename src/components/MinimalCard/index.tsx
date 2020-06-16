import * as React from 'react';
import {
  Card,
  InfoBox,
  TitleBox,
  PillBox,
  Pill,
  PillText,
  ImageBox,
  PokemonImage,
  IconBox,
} from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalTheme } from 'styles/theme';

type Pokemon = {
  id: number;
  name: string;
  types: any;
};

export const MinimalCard: React.SFC<Pokemon> = ({ id, name, types }) => {
  const predominantType = types[0].type.name;
  return (
    <Card type={predominantType}>
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
