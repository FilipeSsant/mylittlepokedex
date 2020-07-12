import hexToRgba from 'hex-to-rgba';
import styled, { css } from 'styled-components/native';
import { widthPercentageToDp } from 'utils/percentageToDp';

type ContainerProps = {
  backgroundType?: string;
  noPadding?: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ backgroundType, theme }) =>
    backgroundType
      ? hexToRgba(theme.pokemon.type[backgroundType], 0.9)
      : theme.colors.background};
  padding: 0 ${widthPercentageToDp(5)}px;
  ${({ noPadding }) =>
    noPadding &&
    css`
      padding: 0;
    `}
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
