import { ADD_ONE, REMOVE_ONE } from 'components/Shop/constants';
import { getAllProductNames, getInitialState } from './utils';

const productsReducer = (state = getInitialState(), action) => {
  const setNewState = (product, newAmount) => ({
    ...state,
    [product]: {
      amount: newAmount,
      priceTotal: action.price * newAmount
    }
  });
  
  const increment = product => state[product].amount + 1;
  const decrement = product => state[product].amount - 1;
  
  const canIncrement = () => action.actionToPerform === ADD_ONE;
  const canDecrement = product =>
    action.actionToPerform === REMOVE_ONE && state[product].amount > 0;

  const isIncrementOrDecrement = product => {
    if (canIncrement()) {
      const newAmount = increment(product);
      return setNewState(product, newAmount);
    } else if (canDecrement(product)) {
      const newAmount = decrement(product);
      return setNewState(product, newAmount);
    }
    return state;
  };

  const nameOfProduct = () => getAllProductNames().find((name) => name === action.type)

  if (nameOfProduct()) {
    return isIncrementOrDecrement(nameOfProduct());
  } else {
    return state;
  }
};

export default productsReducer;
