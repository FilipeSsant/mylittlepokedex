import { getAll } from 'api/pokemon.db';
import { ButtonStyled } from 'components/Button';
import { Input } from 'components/Input';
import { LoadingPokeball } from 'components/LoadingPokeball';
import { MinimalCard } from 'components/MinimalCard';
import React, { useCallback, useEffect, useState } from 'react';
import { Container, LoadingContainer } from 'styles/globalComponents';
import { ButtonBox, PokemonsBox, SearchBox, Title } from './styles';

export const Main = ({ navigation }) => {
  const [pokemons, setPokemons] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const limitDefault = 10;

  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(limitDefault);

  const getAllPokemons = useCallback(async (of = offset, lim = limit) => {
    await getAll(of, lim).then(async (res) => {
      setPokemons((prevState) => [...prevState, ...res]);
      setIsButtonLoading(false);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    resetAll();
    setIsLoading(true);
    getAllPokemons(1, limitDefault);
  }, []);

  const resetAll = async () => {
    setPokemons([]);
    setOffset(1);
    setLimit(limitDefault);
  };

  const loadMorePokemons = async () => {
    await setOffset(limit);
    await setLimit(limit + limitDefault);
    await getAllPokemons(limit, limit + limitDefault);
  };

  const renderCard = ({ item, index }) => {
    const pokemonId = index + 1;
    return (
      <MinimalCard
        id={pokemonId}
        name={item.name}
        types={item.types}
        navigation={navigation}
      />
    );
  };

  const footerComponent = () => {
    return (
      <ButtonBox>
        <ButtonStyled
          disabled={isButtonLoading}
          isLoading={isButtonLoading}
          title="Carregar mais"
          onPress={() => {
            setIsButtonLoading(true);
            loadMorePokemons();
          }}
        />
      </ButtonBox>
    );
  };

  return (
    <Container>
      <Title>Pokedex</Title>
      <SearchBox>
        <Input placeholder="Digite um pokémon" />
      </SearchBox>
      {isLoading ? (
        <LoadingContainer>
          <LoadingPokeball />
        </LoadingContainer>
      ) : (
        <PokemonsBox
          data={pokemons}
          keyExtractor={(item) => item.name}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderCard}
          ListFooterComponent={footerComponent}
          legacyImplementation
        />
      )}
    </Container>
  );
};
