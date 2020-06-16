import React, { useState, useMemo, useCallback } from 'react';
import { BaseInput } from './styles';
import { PrivateValueStore } from '@react-navigation/native';
type Props = any;

export const Input: React.SFC<Props> = (props) => {
  return <BaseInput {...props} />;
};
