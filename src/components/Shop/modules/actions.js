import { ADD_ONE, REMOVE_ONE } from 'components/Shop/modules/types';

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
