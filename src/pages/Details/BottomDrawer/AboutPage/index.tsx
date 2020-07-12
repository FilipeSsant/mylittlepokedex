import React, { useState } from 'react';
import { DetailsText, DetailsTitle, PageContainer } from '../styles';
import {
  TopContent,
  TopText,
  BottomContent,
  CardBlock,
  CardWrapper,
  InfoAboutBlock,
  InfoAboutContainer,
  GenderBlock,
  FemaleIcon,
  MaleIcon,
} from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type AboutPageProps = {
  pokemon: any;
};

export const AboutPage: React.SFC<AboutPageProps> = ({ pokemon }) => {
  const {
    height,
    weight,
    abilities,
    egg_groups,
    flavor_text_entries,
    gender_rate,
  } = pokemon;
  const [pokemonAbilities, setPokemonAbilities] = useState('');
  const [eggGroups, setEggGroups] = useState('');
  const pokemonHeight = height * 10;
  const pokemonWeight = weight / 10;

  // gender_rate: chance to be female in eighten
  const genderRate = {
    male: `${((8 - gender_rate) / 8) * 100}%`,
    female: `${(gender_rate / 8) * 100}%`,
  };

  React.useEffect(() => {
    setPokemonAbilities(
      abilities
        .map((obj) => {
          return obj.ability.name;
        })
        .join(', ')
    );
    setEggGroups(
      egg_groups
        .map((obj) => {
          return obj.name;
        })
        .join(', ')
    );
  }, []);

  return (
    <PageContainer>
      <TopContent>
        <TopText>
          {flavor_text_entries[0].flavor_text.replace(/\n/g, ' ')}
        </TopText>
      </TopContent>
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
          <InfoAboutBlock>
            <DetailsText topic>Gender rate</DetailsText>
            <GenderBlock>
              <FemaleIcon />
              <DetailsText>{genderRate.female}</DetailsText>
            </GenderBlock>
            <GenderBlock>
              <MaleIcon />
              <DetailsText>{genderRate.male}</DetailsText>
            </GenderBlock>
          </InfoAboutBlock>
          <InfoAboutBlock>
            <DetailsText topic>Egg groups</DetailsText>
            <DetailsText>{eggGroups}</DetailsText>
          </InfoAboutBlock>
        </InfoAboutContainer>
      </BottomContent>
    </PageContainer>
  );
};
