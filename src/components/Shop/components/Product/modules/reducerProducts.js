import { getAllProductNames, getInitialState } from './utils';
import { ADD_ONE, REMOVE_ONE } from './types';
import { SHIRT_DISCOUNT } from './constants';

const reducerProducts = (state = getInitialState(), action) => {
  let newAmount;
  let newPrice;
  let newDiscount;

  const setNewState = (newAmount, newPrice, newDiscount) => ({
    ...state,
    [action.product]: {
      amount: newAmount,
      priceTotal: newPrice,
      discount: newDiscount
    }
  });
  
  const calculateDiscount = (amount, price) => {
    let discount;
  
    if (action.product === 'Shirt' && amount >= 3) {
      discount = price * SHIRT_DISCOUNT;
    } else if (action.product === 'Mug') {
      const integerPartOfAmount = Math.trunc(amount / 2);
      discount = integerPartOfAmount * action.price;
    } else {
      discount = 0;
    }
  
    return discount;
  };

  const calculatePrice = amount => amount * action.price;

  const increment = () => state[action.product].amount + 1;
  const decrement = () => state[action.product].amount - 1;

  const canDecrement = () => state[action.product].amount > 0;

  const isAValidProduct = () => getAllProductNames().find((name) => name === action.product);

  const isAProductToAdd = () => {
    if (isAValidProduct()) {
      newAmount = increment();
      newPrice = calculatePrice(newAmount);
      newDiscount = calculateDiscount(newAmount, newPrice);
      return setNewState(newAmount, newPrice, newDiscount);
    }
    return state;
  };

  const isAProductToRemove = () => {
    if (isAValidProduct() && canDecrement()) {
      newAmount = decrement();
      newPrice = calculatePrice(newAmount);
      newDiscount = calculateDiscount(newAmount, newPrice);
      return setNewState(newAmount, newPrice, newDiscount);
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
