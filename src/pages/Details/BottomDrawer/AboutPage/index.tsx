import React, { useState } from 'react';
import { DetailsText, DetailsTitle } from '../styles';
import {
  AppearsBox,
  BottomContent,
  CardBlock,
  CardWrapper,
  InfoAboutBlock,
  InfoAboutContainer,
  PageContainer,
  PokemonVersion,
  PokemonVersionText,
} from './style';

type AboutPageProps = {
  pokemon: any;
};

export const AboutPage: React.SFC<AboutPageProps> = ({ pokemon }) => {
  const { height, weight, abilities, game_indices } = pokemon;
  const [pokemonAbilities, setPokemonAbilities] = useState('');
  const pokemonHeight = height * 10;
  const pokemonWeight = weight / 10;

  const convertGameVersionString = (value) => {
    let baseString: string = value.toLowerCase();
    const regexTrace = /[-]/;
    if (regexTrace.test(baseString)) {
      baseString = baseString.split(regexTrace)[0];
    }
    return baseString;
  };

  React.useEffect(() => {
    setPokemonAbilities(
      abilities
        .map((obj) => {
          return obj.ability.name;
        })
        .join(', ')
    );
  }, []);

  return (
    <PageContainer>
      <CardWrapper>
        <CardBlock>
          <DetailsText topic>Height</DetailsText>
          <DetailsText>{`${pokemonHeight}cm`}</DetailsText>
        </CardBlock>
        <CardBlock>
          <DetailsText topic>Weight</DetailsText>
          <DetailsText>{`${pokemonWeight}kg`}</DetailsText>
        </CardBlock>
      </CardWrapper>
      <BottomContent>
        <DetailsTitle>Breeding</DetailsTitle>
        <InfoAboutContainer>
          <InfoAboutBlock>
            <DetailsText topic>Abilities</DetailsText>
            <DetailsText>{pokemonAbilities}</DetailsText>
          </InfoAboutBlock>
          <InfoAboutBlock style={{ flexDirection: 'column' }}>
            <DetailsText topic>Appears In</DetailsText>
            <AppearsBox>
              {game_indices.map((gameIndice) => (
                <PokemonVersion
                  version={convertGameVersionString(gameIndice.version.name)}
                  key={`${gameIndice.game_index}${gameIndice.version.name}`}
                >
                  <PokemonVersionText>
                    {gameIndice.version.name}
                  </PokemonVersionText>
                </PokemonVersion>
              ))}
            </AppearsBox>
          </InfoAboutBlock>
        </InfoAboutContainer>
      </BottomContent>
    </PageContainer>
  );
};
