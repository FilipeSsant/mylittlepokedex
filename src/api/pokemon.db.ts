import api from './connection';

export const getUnique = async (id: number): Promise<any> => {
  return await api.get(`pokemon/${id}`).then((res) => {
    return res.data;
  });
};

export const getAll = async (offset: number, limit: number): Promise<any> => {
  const pokemonPromises = [];
  console.log('offset', offset, 'limit', limit);
  for (let i = offset; i <= limit + 1; i++) {
    const pokemons = await getUnique(i);
    pokemonPromises.push(pokemons);
  }
  return pokemonPromises;
};
