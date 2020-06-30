import { LoadingPokeball } from 'components/LoadingPokeball';
import React from 'react';
import { globalTheme } from 'styles/theme';
import { BaseButton, TextButton } from './styles';

export type BaseButtonProps = {
  title: string;
  onPress: any;
  type?: string;
  fontColor?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

export const ButtonStyled: React.SFC<BaseButtonProps> = ({
  title,
  type,
  fontColor,
  onPress,
  isLoading = false,
  disabled = false,
}) => {
  const checkFontType = (type) => {
    switch (type) {
      case 'light':
        return globalTheme.whiteFA;
      case 'dark':
        return globalTheme.defaultFont;
      default:
        return globalTheme.whiteFA;
    }
  };

  return (
    <BaseButton disabled={disabled} type={type} onPress={() => onPress()}>
      {isLoading ? (
        <LoadingPokeball size={25} color={checkFontType(type)} />
      ) : (
        <TextButton fontColor={fontColor}>{title}</TextButton>
      )}
    </BaseButton>
  );
};
