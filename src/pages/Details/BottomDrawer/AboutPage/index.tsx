import React from 'react';
import { DetailsText, DetailsTitle } from '../styles';
import {
  BottomContent,
  CardBlock,
  CardWrapper,
  InfoAboutBlock,
  InfoAboutContainer,
  PageContainer,
} from './style';

type AboutPageProps = {};

export const AboutPage: React.SFC<AboutPageProps> = () => {
  return (
    <PageContainer>
      <CardWrapper>
        <CardBlock>
          <DetailsText topic>Height</DetailsText>
          <DetailsText>2"3.6" (0.70cm)</DetailsText>
        </CardBlock>
        <CardBlock>
          <DetailsText topic>Weight</DetailsText>
          <DetailsText>t5.2 lbs (6.9kg)</DetailsText>
        </CardBlock>
      </CardWrapper>
      <BottomContent>
        <DetailsTitle>Breeding</DetailsTitle>
        <InfoAboutContainer>
          <InfoAboutBlock>
            <DetailsText topic>Abilities</DetailsText>
            <DetailsText>Overgrow, Chlorophyl</DetailsText>
          </InfoAboutBlock>
          <InfoAboutBlock>
            <DetailsText topic>Species</DetailsText>
            <DetailsText>Seed</DetailsText>
          </InfoAboutBlock>
          <InfoAboutBlock>
            <DetailsText topic>Egg Groups</DetailsText>
            <DetailsText>Monster</DetailsText>
          </InfoAboutBlock>
          <InfoAboutBlock>
            <DetailsText topic>Egg Cycle</DetailsText>
            <DetailsText>Grass</DetailsText>
          </InfoAboutBlock>
        </InfoAboutContainer>
      </BottomContent>
    </PageContainer>
  );
};
