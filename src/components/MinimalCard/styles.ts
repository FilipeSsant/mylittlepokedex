import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components/native';
import {
  heightPercentageToDp,
  widthPercentageToDp,
} from 'utils/percentageToDp';

type BackgroundColorProps = {
  type?: string;
};

export const Card = styled.TouchableOpacity<BackgroundColorProps>`
  background-color: ${({ theme, type }) =>
    hexToRgba(theme.pokemon.type[type], 0.9)};
  margin: ${widthPercentageToDp(1)}px;
  width: ${widthPercentageToDp(43)}px;
  height: ${heightPercentageToDp(18)}px;
  border-radius: 20px;
  flex-direction: row;
`;

export const InfoBox = styled.View`
  padding: ${widthPercentageToDp(3)}px;
  padding-right: 0;
  opacity: 1;
`;

export const TitleBox = styled.Text`
  font-family: ${({ theme }) => theme.font.bold};
  font-size: ${widthPercentageToDp(4)}px;
  text-transform: capitalize;
`;

export const PillBox = styled.View`
  width: ${widthPercentageToDp(20)}px;
  padding-top: ${heightPercentageToDp(1)}px;
`;

export const Pill = styled.View<BackgroundColorProps>`
  margin: ${heightPercentageToDp(0.3)}px 0;
  border-radius: 100px;
  background-color: ${({ theme, type }) =>
    hexToRgba(theme.pokemon.type[type])}};
`;

export const PillText = styled.Text`
  font-size: ${widthPercentageToDp(3.8)}px;
  padding: ${widthPercentageToDp(1)}px;
  padding-left: ${widthPercentageToDp(3)}px;
`;

export const ImageBox = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding: ${widthPercentageToDp(2)}px;
`;

export const PokemonImage = styled.Image`
  flex: 1;
  width: ${widthPercentageToDp(15)}px;
`;

export const IconBox = styled.View`
  position: absolute;
  bottom: -20px;
  right: -30px;
  opacity: 0.1;
`;
