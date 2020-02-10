import { ADD_ONE, REMOVE_ONE } from 'constants/index';

export const addOne = item => ({
  type: ADD_ONE,
  item
});

export const removeOne = item => ({
  type: REMOVE_ONE,
  item
});
