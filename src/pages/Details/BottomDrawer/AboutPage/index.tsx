import React, { useState } from 'react';
import { DetailsText, DetailsTitle } from '../styles';
import {
  BottomContent,
  CardBlock,
  CardWrapper,
  InfoAboutBlock,
  InfoAboutContainer,
  PageContainer,
} from './style';

type AboutPageProps = {
  pokemon: any;
};

export const AboutPage: React.SFC<AboutPageProps> = ({ pokemon }) => {
  const { height, weight, abilities } = pokemon;
  const [pokemonAbilities, setPokemonAbilities] = useState('');
  const pokemonHeight = height * 10;
  const pokemonWeight = weight / 10;

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
        </InfoAboutContainer>
      </BottomContent>
    </PageContainer>
  );
};
