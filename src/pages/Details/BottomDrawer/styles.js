import ViewPager from '@react-native-community/viewpager';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {
  heightPercentageToDp,
  widthPercentageToDp,
} from 'utils/percentageToDp';

export const PokemonImageBox = styled.View`
  top: ${heightPercentageToDp(-21)}px;
  align-self: center;
  position: absolute;
  width: 100%;
  height: ${heightPercentageToDp(25)}px;
`;

export const PokemonImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const DetailsDrawer = styled(Animated.View)`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const DrawerViewPager = styled(ViewPager)`
  flex: 1;
  margin: 0 ${widthPercentageToDp(5)}px 0 ${widthPercentageToDp(5)}px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: ${heightPercentageToDp(5)}px;
  margin: ${heightPercentageToDp(5)}px ${widthPercentageToDp(5)}px 0
    ${widthPercentageToDp(5)}px;
`;

export const Tab = styled.View``;

export const TabText = styled.Text`
  color: ${({ isActive, theme, pokemonType }) =>
    isActive ? theme.pokemon.type[pokemonType] : theme.grayC7};
  font-family: ${({ theme }) => theme.font.semiBold};
`;
