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
    const pokemon = await getUnique(i);
    if (pokemon.species) {
      const { url } = pokemon.species;
      await api
        .get(url)
        .then((res) => pokemonPromises.push({ ...res.data, ...pokemon }));
    }
  }
  return pokemonPromises;
};
