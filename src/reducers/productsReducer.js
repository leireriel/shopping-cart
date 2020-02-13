import initialState from './initialState';
import { SHIRT, MUG, CAP, ADD_ONE, REMOVE_ONE } from 'constants/index';

const canIncrement = (actionToPerform) => actionToPerform === ADD_ONE;
const canDecrement = (state, action, product) =>
  action.actionToPerform === REMOVE_ONE && state[product].amount > 0;

const increment = (state, product) => state[product].amount + 1;
const decrement = (state, product) => state[product].amount - 1;

const setNewState = (state, action, product, newAmount) => ({
  ...state,
  [product]: {
    amount: newAmount,
    priceTotal: action.price * newAmount
  }
});

const isIncrementOrDecrement = (state, action, product) => {
  if (canIncrement(action.actionToPerform)) {
    const newAmount = increment(state, product);
    return setNewState(state, action, product, newAmount);
  } else if (canDecrement(state, action, product)) {
    const newAmount = decrement(state, product);
    return setNewState(state, action, product, newAmount);
  }
  return state;
};

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHIRT:
      return isIncrementOrDecrement(state, action, 'shirt');
    case MUG:
      return isIncrementOrDecrement(state, action, 'mug');
    case CAP:
      return isIncrementOrDecrement(state, action, 'cap');
    default:
      return state;
  }
};

export default productsReducer;
