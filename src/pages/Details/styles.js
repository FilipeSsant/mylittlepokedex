import styled from 'styled-components/native';
import {
  widthPercentageToDp,
  heightPercentageToDp,
} from 'utils/percentageToDp';

export const Title = styled.Text`
  font-size: ${widthPercentageToDp(8)}px;
  font-family: ${({ theme }) => theme.font.bold};
`;

export const PokemonsBox = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: heightPercentageToDp(5),
  },
})``;

export const SearchBox = styled.View`
  height: ${heightPercentageToDp(10)}px;
  justify-content: center;
`;

export const ButtonBox = styled.View`
  padding-top: ${heightPercentageToDp(3)}px;
`;

export const ButtonLoadingBox = styled.View`
  justify-content: center;
  align-items: center;
`;
