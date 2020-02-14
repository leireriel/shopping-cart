import initialState from './initialState';
import { SHIRT, MUG, CAP, ADD_ONE, REMOVE_ONE } from 'constants/index';

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
    case SHIRT:
      return isIncrementOrDecrement('shirt');
    case MUG:
      return isIncrementOrDecrement('mug');
    case CAP:
      return isIncrementOrDecrement('cap');
    default:
      return state;
  }
};

export default productsReducer;
