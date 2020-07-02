import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components/native';
import {
  heightPercentageToDp,
  widthPercentageToDp,
} from 'utils/percentageToDp';

type PokemonVersionProps = {
  version: string;
};

export const CardWrapper = styled.View`
  background-color: ${({ theme }) => theme.secondaryBackground};
  width: ${widthPercentageToDp(90)}px;
  height: ${heightPercentageToDp(10)}px;
  border-radius: 6px;
  flex-direction: row;
`;

export const CardBlock = styled.View`
  width: ${widthPercentageToDp(50 - 5)}px;
  padding: ${widthPercentageToDp(5)}px;
`;

export const BottomContent = styled.View`
  width: 100%;
  margin-top: ${heightPercentageToDp(3)}px;
`;

export const InfoAboutContainer = styled.View`
  margin-top: ${heightPercentageToDp(2)}px;
`;

export const InfoAboutBlock = styled.View`
  flex-direction: row;
  padding-bottom: ${heightPercentageToDp(1)}px;
`;

export const AppearsBox = styled.View`
  margin-top: ${heightPercentageToDp(1)}px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PokemonVersion = styled.View<PokemonVersionProps>`
  background-color: ${({ theme, version }) =>
    hexToRgba(theme.pokemon.generation[version], 0.7)};
  border-radius: 6px;
  margin-right: ${widthPercentageToDp(1)}px;
  margin-bottom: ${heightPercentageToDp(1)}px;
  align-self: flex-start;
`;

export const PokemonVersionText = styled.Text`
  text-transform: capitalize;
  text-align: center;
  padding: ${widthPercentageToDp(1)}px ${widthPercentageToDp(5)}px;
`;
