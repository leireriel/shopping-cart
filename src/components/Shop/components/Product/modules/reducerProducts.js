import { ADD_ONE, REMOVE_ONE } from './types';
import {
  isAValidProduct,
  getInitialState,
  canDecrement,
  increment,
  decrement,
  calculatePrice,
  calculateDiscount,
  getDiscountCopies
} from './utils';

const reducerProducts = (state = getInitialState(), action) => {
  let newAmount;
  let newPrice;
  let newDiscount;
  let discountCopies;

    /**
   * @name setNewStateWithDiscount
   * Sets new state of current product with discount
   * @param {number} newAmount
   * @param {number} newPrice
   * @param {number} newDiscount
   * @param {string} discountCopies
   * @returns {Object} State
   */
  const setNewStateWithDiscount = (newAmount, newPrice, newDiscount, discountCopies) => ({
    ...state,
    [action.product]: {
      amount: newAmount,
      priceTotal: newPrice,
      discount: newDiscount,
      discountCopies
    }
  });


  /**
   * @name setNewState
   * Sets new state of current product
   * @param {number} newAmount
   * @param {number} newPrice
   * @param {number} newDiscount
   * @returns {Object} State
   */
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


  /**
   * @name isAProductToAdd
   * Checks if the amount of products can be incremented, and starts the process
   * @returns {Object} State
   */
  const isAProductToAdd = () => {
    if (isAValidProduct(action.product)) {
      newAmount = increment(state, action.product);
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
    if (isAValidProduct(action.product) && canDecrement(state, action.product)) {
      newAmount = decrement(state, action.product);
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
