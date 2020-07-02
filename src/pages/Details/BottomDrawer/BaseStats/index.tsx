import React from 'react';
import { DetailsText, PageContainer } from '../styles';
import {
  AditionalStatNumber,
  StatGraphicBar,
  StatGraphicBarBox,
  StatItem,
} from './styles';

type AboutPageProps = {
  pokemonType: string;
  stats: any;
};

export const BaseStats: React.SFC<AboutPageProps> = ({
  pokemonType,
  stats,
}) => {
  React.useEffect(() => {
    console.log('stats', stats);
  }, []);

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
              pokemonType={pokemonType}
              size={obj.base_stat > 100 ? 100 : obj.base_stat}
            />
          </StatGraphicBarBox>
          {obj.base_stat > 100 && (
            <AditionalStatNumber>+{obj.base_stat - 100}</AditionalStatNumber>
          )}
        </StatItem>
      ))}
    </PageContainer>
  );
};
