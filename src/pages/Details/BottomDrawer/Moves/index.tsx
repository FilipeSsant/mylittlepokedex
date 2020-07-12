import React, { useState, useEffect } from 'react';
import { PageContainer } from '../styles';
import { MovesBox, PokemonMove, PokemonMoveText } from './styles';

type MovesPageProps = {
  pokemon: any;
};

export const Moves: React.SFC<MovesPageProps> = ({ pokemon }) => {
  const { moves, predominantType } = pokemon;
  const [movesList, setMovesList] = useState([]);

  const getMovesList = async () => {
    moves.map(
      async (obj) =>
        await setMovesList((prevState) => [
          ...prevState,
          { name: obj.move.name, url: obj.move.url },
        ])
    );
  };

  useEffect(() => {
    getMovesList();
  }, []);

  return (
    <PageContainer>
      <MovesBox>
        {movesList.map((move) => (
          <PokemonMove key={move.url} pokemonType={predominantType}>
            <PokemonMoveText>{move.name}</PokemonMoveText>
          </PokemonMove>
        ))}
      </MovesBox>
    </PageContainer>
  );
};
