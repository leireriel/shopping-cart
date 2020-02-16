import { ADD_ONE, REMOVE_ONE, MODAL_OPEN, MODAL_CLOSE } from './types';

export const addOne = ({ product, price }) => ({ 
  type: ADD_ONE,
  product,
  price
});

export const removeOne = ({ product, price }) => ({ 
  type: REMOVE_ONE,
  product,
  price
});

export const modalOpen = payload => ({
  type: MODAL_OPEN,
  payload
});

export const modalClose = () => ({
  type: MODAL_CLOSE
});
