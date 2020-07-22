import React, { useCallback, useState, useRef } from 'react';
import { Text, View } from 'react-native';
import { AboutPage } from './AboutPage';
import { BaseStats } from './BaseStats';
import {
  DetailsDrawer,
  DrawerViewPager,
  PokeballIcon,
  PokemonImage,
  PokemonImageBox,
  Tab,
  Tabs,
  TabText,
} from './styles';
import { SharedElement } from 'react-navigation-shared-element';
import { ViewPagerProps } from '@react-native-community/viewpager';
import { Moves } from './Moves';

type Props = {
  data: any;
};

export const BottomDrawer: React.SFC<Props> = ({ data }) => {
  const { uri, name, predominantType } = data;

  const viewPagerRef = useRef<ViewPagerProps>();

  const [actualPageIndex, onChangeDrawerPage] = useState(0);

  const tabsInfo = [
    {
      id: 1,
      name: 'About',
      slideRef: 0,
    },
    {
      id: 2,
      name: 'Base Stats',
      slideRef: 1,
    },
  ];

  const onPageSelected = useCallback(
    (e) => {
      onChangeDrawerPage(e.nativeEvent.position);
    },
    [actualPageIndex]
  );

  return (
    <DetailsDrawer>
      <PokemonImageBox>
        <SharedElement style={{ zIndex: 2 }} id={`item.${name}.photo`}>
          <PokemonImage resizeMode="contain" source={{ uri }} />
        </SharedElement>
        <PokeballIcon />
      </PokemonImageBox>
      <Tabs>
        {tabsInfo.map((tab, index) => (
          <Tab
            key={tab.id}
            onPress={() => {
              if (viewPagerRef) viewPagerRef.current.setPage(tab.slideRef);
            }}
          >
            <TabText
              pokemonType={predominantType}
              isActive={actualPageIndex === index}
            >
              {tab.name}
            </TabText>
          </Tab>
        ))}
      </Tabs>
      <DrawerViewPager ref={viewPagerRef} onPageSelected={onPageSelected}>
        <View key="1">
          <AboutPage pokemon={data} />
        </View>
        <View key="2">
          <BaseStats animate={actualPageIndex === 1} pokemon={data} />
        </View>
      </DrawerViewPager>
    </DetailsDrawer>
  );
};
