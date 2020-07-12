import { MaterialCommunityIcons } from '@expo/vector-icons';
import ViewPager from '@react-native-community/viewpager';
import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';
import { globalTheme } from 'styles/theme';
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

export const PokeballIcon = styled(MaterialCommunityIcons).attrs({
  name: 'pokeball',
  color: globalTheme.whiteFA,
  size: 250,
})`
  z-index: 1;
  position: absolute;
  align-self: center;
  opacity: 0.2;
`;

export const PokemonImage = styled.Image`
  z-index: 2;
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
`;

export const Tabs = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  height: ${heightPercentageToDp(5)}px;
  margin: ${heightPercentageToDp(5)}px ${widthPercentageToDp(5)}px 0
    ${widthPercentageToDp(5)}px;
  z-index: 3;
`;

export const Tab = styled.TouchableOpacity``;

type TabTextProps = {
  isActive?: boolean;
  pokemonType?: string;
};

export const TabText = styled.Text<TabTextProps>`
  color: ${({ isActive, theme, pokemonType }) =>
    isActive ? theme.pokemon.type[pokemonType] : theme.grayC7};
  font-family: ${({ theme }) => theme.font.semiBold};
`;

// texts

type DetailsTextProps = {
  topic?: boolean;
  topicWidth?: number;
  normalTextWidth?: number;
};

export const DetailsText = styled.Text<DetailsTextProps>`
  font-size: ${widthPercentageToDp(3.5)}px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.defaultFont};
  ${({ topic, topicWidth }) =>
    topic &&
    css`
      width: ${widthPercentageToDp(topicWidth || 30)}px;
      font-family: 'OpenSans-Bold';
    `}
  ${({ normalTextWidth }) =>
    normalTextWidth &&
    css`
      width: ${widthPercentageToDp(normalTextWidth)}px;
    `}
`;

export const DetailsTitle = styled.Text`
  font-size: ${widthPercentageToDp(4.5)}px;
  color: ${({ theme }) => theme.defaultFont};
  font-family: 'OpenSans-Bold';
`;

// shared components

export const PageContainer = styled.ScrollView.attrs({
  containerContentStyle: {
    alignItems: 'center',
  },
})`
  flex: 1;
  width: 100%;
  padding: 0 ${widthPercentageToDp(5)}px;
  flex-direction: column;
`;
