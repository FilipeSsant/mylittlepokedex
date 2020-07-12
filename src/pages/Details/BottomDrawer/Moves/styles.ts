import styled from 'styled-components/native';
import {
  heightPercentageToDp,
  widthPercentageToDp,
} from 'utils/percentageToDp';
import { DetailsText } from '../styles';

export const MovesBox = styled.View`
  margin-top: ${heightPercentageToDp(1)}px;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

type PokemonMoveProps = {
  pokemonType: string;
};

export const PokemonMove = styled.View<PokemonMoveProps>`
  background-color: ${({ theme, pokemonType }) =>
    theme.pokemon.type[pokemonType]};
  border-radius: 6px;
  margin-right: ${widthPercentageToDp(1)}px;
  margin-bottom: ${heightPercentageToDp(1)}px;
  align-self: flex-start;
`;

export const PokemonMoveText = styled(DetailsText)`
  text-transform: capitalize;
  text-align: center;
  padding: ${widthPercentageToDp(1)}px ${widthPercentageToDp(5)}px;
  color: ${({ theme }) => theme.colors.whiteFA};
`;
