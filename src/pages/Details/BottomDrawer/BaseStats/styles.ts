import styled from 'styled-components/native';
import {
  heightPercentageToDp,
  widthPercentageToDp,
} from 'utils/percentageToDp';

export const StatItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${heightPercentageToDp(2)}px;
`;

export const StatGraphicBarBox = styled.View`
  background-color: ${({ theme }) => theme.grayF0};
  border-radius: 100px;
  margin-left: ${widthPercentageToDp(4)}px;
  height: ${heightPercentageToDp(0.8)}px;
  width: ${widthPercentageToDp(40)}px;
`;

type StatGraphicBarProps = {
  size: number;
  pokemonType: string;
};

export const StatGraphicBar = styled.View<StatGraphicBarProps>`
  flex: 1;
  background-color: ${({ theme, pokemonType }) =>
    theme.pokemon.type[pokemonType]};
  border-radius: 100px;
  width: ${({ size }) => `${size}%`};
`;

export const AditionalStatNumber = styled.Text`
  font-size: ${widthPercentageToDp(3)}px;
  margin-left: ${widthPercentageToDp(1)}px;
  color: ${({ theme }) => theme.green4F};
`;
