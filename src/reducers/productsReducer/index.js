import { ADD_ONE, REMOVE_ONE } from 'components/Shop/constants';
import initialState from './initialState';
import NAMES_OF_PRODUCTS from './constants';

const productsReducer = (state = initialState, action) => {
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

  switch(action.type) {
    case NAMES_OF_PRODUCTS.find((name) => name === action.type):
      return isIncrementOrDecrement(NAMES_OF_PRODUCTS.find((name) => name === action.type).toLowerCase());
    default:
      return state;
  }
};

export default productsReducer;
