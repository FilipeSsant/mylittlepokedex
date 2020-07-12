import React, { useRef, useEffect } from 'react';
import { DetailsText, PageContainer } from '../styles';
import {
  AditionalStatNumber,
  StatGraphicBar,
  StatGraphicBarBox,
  StatItem,
} from './styles';
import { Animated } from 'react-native';

type AboutPageProps = {
  pokemon: any;
  animate: boolean;
};

export const BaseStats: React.SFC<AboutPageProps> = ({
  pokemon,
  animate = false,
}) => {
  const { stats, predominantType } = pokemon;

  const graphicBarAnim = useRef(new Animated.Value(0)).current;
  const plusStatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (animate)
      Animated.sequence([
        Animated.timing(graphicBarAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(plusStatAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
  }, [animate]);

  const progressBarWidth = (actualWidth) =>
    graphicBarAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', `${actualWidth}%`],
      extrapolate: 'clamp',
    });

  const plusStatStyle = plusStatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <PageContainer>
      {stats.map((obj) => (
        <StatItem key={`${obj.base_stat}-${obj.stat.name}`}>
          <DetailsText topicWidth={32} topic>
            {obj.stat.name}
          </DetailsText>
          <DetailsText normalTextWidth={8}>{obj.base_stat}</DetailsText>
          <StatGraphicBarBox>
            <StatGraphicBar
              pokemonType={predominantType}
              style={{
                width: progressBarWidth(
                  obj.base_stat > 100 ? 100 : obj.base_stat
                ),
              }}
            />
          </StatGraphicBarBox>
          {obj.base_stat > 100 && (
            <AditionalStatNumber
              style={{ transform: [{ scale: plusStatStyle }] }}
            >
              +{obj.base_stat - 100}
            </AditionalStatNumber>
          )}
        </StatItem>
      ))}
    </PageContainer>
  );
};
