import styled, { css } from 'styled-components/native';
import {
  widthPercentageToDp,
  heightPercentageToDp,
} from 'utils/percentageToDp';

const checkFontType = (theme, type) => {
  switch (type) {
    case 'light':
      return theme.whiteFA;
    case 'dark':
      return theme.black0D;
    default:
      return theme.whiteFA;
  }
};

export const BaseButton = styled.TouchableOpacity`
  background-color: ${({ theme, type, disabled }) => {
    if (disabled) return theme.grayD1;
    return type ? theme[type] : theme.primary;
  }};
  justify-content: center;
  align-items: center;
  padding: ${widthPercentageToDp(3)}px;
  border-radius: 6px;
`;

export const TextButton = styled.Text`
  font-size: ${widthPercentageToDp(4)}px;
  color: ${({ theme, fontType }) => checkFontType(theme, fontType)};
`;
