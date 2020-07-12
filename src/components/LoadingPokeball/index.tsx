import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalTheme } from 'styles/theme';
import { Animated } from 'react-native';
import { IconBox } from './styles';

type Props = { size?: number; color?: string };

export const LoadingPokeball: React.SFC<Props> = ({
  size = 140,
  color = globalTheme.grayF2,
}) => {
  const [rotateAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const loadingStyle = {
    transform: [
      {
        rotate: rotateAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  };

  return (
    <IconBox style={loadingStyle}>
      <MaterialCommunityIcons name="pokeball" color={color} size={size} />
    </IconBox>
  );
};
