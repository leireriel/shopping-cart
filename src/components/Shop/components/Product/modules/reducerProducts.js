import { ADD_ONE, REMOVE_ONE } from './types';
import { getAllProductNames, getInitialState } from './utils';

const reducerProducts = (state = getInitialState(), action) => {
  const increment = () => state[action.product].amount + 1;
  const decrement = () => state[action.product].amount - 1;

  const canDecrement = () => state[action.product].amount > 0;

  const isAValidProduct = () => getAllProductNames().find((name) => name === action.product);

  let newAmount;

  const setNewState = newAmount => ({
    ...state,
    [action.product]: {
      amount: newAmount,
      priceTotal: action.price * newAmount
    }
  });

  const isAProductToAdd = () => {
    if (isAValidProduct()) {
      newAmount = increment();
      return setNewState(newAmount);
    }
    return state;
  };

  const isAProductToRemove = () => {
    if (isAValidProduct() && canDecrement()) {
      newAmount = decrement();
      return setNewState(newAmount);
    }
    return state;
  };

  switch(action.type) {
    case ADD_ONE:
      return isAProductToAdd();
    case REMOVE_ONE:
      return isAProductToRemove();
    default:
      return state;
  };
};

export default reducerProducts;
