import styled from 'styled-components/native';
import { widthPercentageToDp } from 'utils/percentageToDp';
import { BaseButtonProps } from '.';

type TextButtonProps = {
  fontType?: string;
};

const checkFontType = (theme, type) => {
  switch (type) {
    case 'light':
      return theme.colors.whiteFA;
    case 'dark':
      return theme.colors.defaultFont;
    default:
      return theme.colors.whiteFA;
  }
};

export const BaseButton = styled.TouchableOpacity<BaseButtonProps>`
  background-color: ${({ theme, type, disabled }) => {
    if (disabled) return theme.colors.grayD1;
    return type ? theme[type] : theme.colors.primary;
  }};
  justify-content: center;
  align-items: center;
  padding: ${widthPercentageToDp(3)}px;
  border-radius: 6px;
`;

export const TextButton = styled.Text<TextButtonProps>`
  font-size: ${widthPercentageToDp(4)}px;
  color: ${({ theme, fontType }) => checkFontType(theme, fontType)};
`;
