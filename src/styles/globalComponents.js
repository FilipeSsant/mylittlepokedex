import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components/native';
import { widthPercentageToDp } from 'utils/percentageToDp';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ backgroundType, theme }) =>
    backgroundType
      ? hexToRgba(theme.pokemon.type[backgroundType], 0.9)
      : theme.background};
  padding: 0 ${widthPercentageToDp(5)}px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
