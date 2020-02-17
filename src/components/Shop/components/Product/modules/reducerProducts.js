import { ADD_ONE, REMOVE_ONE } from './types';
import {
  getAllProductNames,
  getInitialState,
  calculatePrice,
  calculateDiscount,
  getDiscountCopies
} from './utils';

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

  /**
   * @name calculateValuesAndSetState
   * Calls functions to calculate new price, discounts and set new state
   * @param {number} newAmount 
   * @returns {Object} State
   */
  const calculateValuesAndSetState = newAmount => {
    newPrice = calculatePrice(newAmount, action.price);
    newDiscount = calculateDiscount(newAmount, newPrice, action.product, action.price);
    if (newDiscount > 0) {
      discountCopies = getDiscountCopies(action.product);
      return setNewStateWithDiscount(newAmount, newPrice, newDiscount, discountCopies);
    } else {
      return setNewState(newAmount, newPrice, newDiscount);
    }
  };
  
  const increment = () => state[action.product].amount + 1;
  const decrement = () => state[action.product].amount - 1;

  /**
   * @name canDecrement
   * Checks if the current amount of items is bigger than 0
   * @returns {boolean}
   */
  const canDecrement = () => state[action.product].amount > 0;


  /**
   * @name isAValidProduct
   * Gets the names of all the products in the cart and compares if the name raised by the reducer matches any
   * @returns {string} Name of product
   */
  const isAValidProduct = () => getAllProductNames().find((name) => name === action.product);


  /**
   * @name isAProductToAdd
   * Checks if the amount of products can be incremented, and starts the process
   * @returns {Object} State
   */
  const isAProductToAdd = () => {
    if (isAValidProduct()) {
      newAmount = increment();
      return calculateValuesAndSetState(newAmount);
    }
    return state;
  };


  /**
   * @name isAProductToRemove
   * Checks if the amount of products can be decreased, and starts the process
   * @returns {Object} State
   */
  const isAProductToRemove = () => {
    if (isAValidProduct() && canDecrement()) {
      newAmount = decrement();
      return calculateValuesAndSetState(newAmount);
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
