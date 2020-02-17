import { ADD_ONE, REMOVE_ONE } from './types';
import { getAllProductNames, getInitialState, calculatePrice, calculateDiscount } from './utils';
import { SHIRT_OFFER, MUG_OFFER } from './constants';

const reducerProducts = (state = getInitialState(), action) => {
  let newAmount;
  let newPrice;
  let newDiscount;
  let discountCopies;

  const setNewStateWithDiscount = (newAmount, newPrice, newDiscount, discountCopies) => ({
    ...state,
    [action.product]: {
      amount: newAmount,
      priceTotal: newPrice,
      discount: newDiscount,
      discountCopies
    }
  });

  const setNewState = (newAmount, newPrice, newDiscount) => ({
    ...state,
    [action.product]: {
      amount: newAmount,
      priceTotal: newPrice,
      discount: newDiscount
    }
  });

  const increment = () => state[action.product].amount + 1;
  const decrement = () => state[action.product].amount - 1;

  const canDecrement = () => state[action.product].amount > 0;

  const isAValidProduct = () => getAllProductNames().find((name) => name === action.product);

  const isAProductToAdd = () => {
    if (isAValidProduct()) {
      newAmount = increment();
      newPrice = calculatePrice(newAmount, action.price);
      newDiscount = calculateDiscount(newAmount, newPrice, action.product, action.price);
      if (newDiscount > 0) {
        discountCopies = 'a';
        return setNewStateWithDiscount(newAmount, newPrice, newDiscount, discountCopies);
      } else {
        return setNewState(newAmount, newPrice, newDiscount);
      }
    }
    return state;
  };

  const isAProductToRemove = () => {
    if (isAValidProduct() && canDecrement()) {
      newAmount = decrement();
      newPrice = calculatePrice(newAmount, action.price);
      newDiscount = calculateDiscount(newAmount, newPrice, action.product, action.price);
      if (newDiscount > 0) {
        discountCopies = 'a';
        return setNewStateWithDiscount(newAmount, newPrice, newDiscount, discountCopies);
      } else {
        return setNewState(newAmount, newPrice, newDiscount);
      }
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
