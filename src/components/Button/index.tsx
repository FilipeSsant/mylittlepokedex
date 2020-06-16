import React, { useState, useMemo, useCallback } from 'react';
import { BaseButton, TextButton } from './styles';
import { LoadingPokeball } from 'components/LoadingPokeball';
import { globalTheme } from 'styles/theme';

type Props = {
  title: string;
  onPress: any;
  type?: string;
  fontColor?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

export const ButtonStyled: React.SFC<Props> = ({
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
        return globalTheme.black0D;
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
