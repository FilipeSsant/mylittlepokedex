import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { heightPercentageToDp } from 'utils/percentageToDp';
import { DetailsDrawer, DrawerViewPager, Tab, Tabs, TabText } from './styles';

type Props = {
  pokemonData: any;
};

export const BottomDrawer: React.SFC<Props> = ({ pokemonData }) => {
  const { predominantType } = pokemonData;

  const [drawerAnim] = useState(new Animated.Value(0));
  const [actualPageIndex, onChangeDrawerPage] = useState(0);
  const tabsInfo = [
    {
      id: 1,
      name: 'About',
      onClick: () => {},
    },
    {
      id: 2,
      name: 'Base Stats',
      onClick: () => {},
    },
    {
      id: 3,
      name: 'Evolution',
      onClick: () => {},
    },
    {
      id: 4,
      name: 'Moves',
      onClick: () => {},
    },
  ];

  const onPageSelected = useCallback(
    (e) => {
      onChangeDrawerPage(e.nativeEvent.position);
    },
    [actualPageIndex]
  );

  const transformAnimation = useCallback(() => {
    return Animated.timing(drawerAnim, {
      toValue: 1,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [drawerAnim]);

  const drawerStyle = {
    transform: [
      {
        translateY: drawerAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [heightPercentageToDp(30), 0],
        }),
      },
    ],
  };

  useEffect(() => {
    transformAnimation();
  }, []);

  return (
    <DetailsDrawer style={drawerStyle}>
      <Tabs>
        {tabsInfo.map((tab, index) => (
          <Tab key={tab.id}>
            <TabText
              pokemonType={predominantType}
              isActive={actualPageIndex === index}
            >
              {tab.name}
            </TabText>
          </Tab>
        ))}
      </Tabs>
      <DrawerViewPager onPageSelected={onPageSelected}>
        <View key="1">
          <Text>About page</Text>
        </View>
        <View key="2">
          <Text>Base Stats page</Text>
        </View>
        <View key="3">
          <Text>Evolution page</Text>
        </View>
        <View key="4">
          <Text>Moves page</Text>
        </View>
      </DrawerViewPager>
    </DetailsDrawer>
  );
};
