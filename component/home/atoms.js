import { atom, selector } from 'recoil';
import axios from 'axios';

export const favoriteListState = atom({
  key: 'favoriteList',
  default: [],
});

export const getRepositoryListState = selector({
  key: 'getFavoriteList',
  get: async ({ get }) => {
    const response = await axios.get(`https://api.github.com/users/fucct/repos`);
    return response.data.map(favorite => {
      const { id, full_name, owner } = favorite;
      const { avatar_url } = owner;

      return { id, full_name, avatar_url };
    });
  },
});