import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components/native';
import {
  heightPercentageToDp,
  widthPercentageToDp,
} from 'utils/percentageToDp';

export const BackClickable = styled.TouchableOpacity`
  margin-left: ${widthPercentageToDp(2)}px;
`;

export const DetailsBody = styled.View`
  flex: 1;
`;

export const DetailsHeader = styled.View`
  padding: 0 ${widthPercentageToDp(5)}px;
  height: ${heightPercentageToDp(40)}px;
`;

export const PokemonName = styled.Text`
  text-transform: capitalize;
  color: ${({ theme }) => theme.whiteFA};
  font-family: ${({ theme }) => theme.font.bold};
  font-size: ${widthPercentageToDp(8)}px;
`;

export const PillTypeBox = styled.View`
  flex-direction: row;
  padding-top: ${heightPercentageToDp(2)}px;
`;

export const Pill = styled.View`
  background-color: red;
  border-radius: 100px;
  width: ${widthPercentageToDp(25)}px;
  background-color: ${({ theme }) => hexToRgba(theme.whiteFA, 0.1)};
  margin-right: ${widthPercentageToDp(3)}px;
`;

export const PillText = styled.Text`
  text-align: center;
  font-size: ${widthPercentageToDp(3.5)}px;
  padding: ${widthPercentageToDp(2)}px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.whiteFA};
`;
