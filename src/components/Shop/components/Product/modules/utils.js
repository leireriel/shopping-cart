import { ALL_PRODUCTS } from 'components/Shop/components/ProductsList/data';
import {
  FIVE_PERCENT,
  SHIRT_OFFER,
  MUG_OFFER,
  GENERIC_OFFER
} from './constants';

/**
 * @name _fivePercent
 * Calculates the price total with 5% discount
 * @private
 * @param {number} price 
 * @returns {number}
 */
const _fivePercent = price => price * FIVE_PERCENT;


/**
 * @name _twoForOne
 * Calculates the price total with offer 2x1
 * @private
 * @param {number} amount 
 * @param {number} priceUnit 
 * @returns {number}
 */
const _twoForOne = (amount, priceUnit) => {
  const integerPartOfAmount = Math.trunc(amount / 2);
  return integerPartOfAmount * priceUnit;
};


/**
 * @name calculatePrice
 * Calculates the price total without discounts
 * @param {number} amount
 * @param {number} priceUnit
 * @returns {number}
 */
export const calculatePrice = (amount, priceUnit) => amount * priceUnit;


/**
 * @name calculateDiscount
 * Calculates total discount of certain products
 * @param {number} amount 
 * @param {number} price 
 * @param {string} product 
 * @param {number} priceUnit 
 * @returns {number}
 */
export const calculateDiscount = (amount, price, product, priceUnit) => {
  let discount;
  
  if (product === 'Shirt' && amount >= 3) {
    discount = _fivePercent(price);
  } else if (product === 'Mug') {
    discount = _twoForOne(amount, priceUnit);
  } else {
    discount = 0;
  }
  
  return discount;
};


/**
 * @name getDiscountCopies
 * Returns copies for discount of certain products
 * @param {string} product 
 * @returns {string}
 */
export const getDiscountCopies = product => {
  let copy;

  if (product === 'Shirt') {
    copy = SHIRT_OFFER;
  } else if (product === 'Mug') {
    copy = MUG_OFFER;
  } else {
    copy = GENERIC_OFFER;
  }
  
  return copy;
};


/**
 * @name increment
 * Increments the current amount of items
 * @param {Object} state
 * @param {string} product
 * @returns {number}
 */
export const increment = (state, product) => state[product].amount + 1;


/**
 * @name decrement
 * Decrements the current amount of items
 * @param {Object} state
 * @param {string} product
 * @returns {number}
 */
export const decrement = (state, product) => state[product].amount - 1;


/**
 * @name canDecrement
 * Checks if the current amount of items is bigger than 0
 * @param {Object} state
 * @param {string} product
 * @returns {boolean}
 */
export const canDecrement = (state, product) => state[product].amount > 0;


/**
 * @name _getAllProductNames
 * Uses the array of products (in this case is an object that I created, but could be a response from an API).
 * Then it extracts all product names and pushes them to a new array.
 * This way we can generate dinamically the set of products
 * @private
 * @returns {Array}
 */
const _getAllProductNames = () => {
  let listOfNames = [];

  for (const product of ALL_PRODUCTS) {
    listOfNames.push(product.name);
  }

  return listOfNames;
};


/**
 * @name isAValidProduct
 * Gets the names of all the products in the cart and compares if the name raised by the reducer matches any
 * @param {string} product 
 * @returns {string} Name of product
 */
export const isAValidProduct = product => _getAllProductNames().find((name) => name === product);


/**
 * @name getInitialState
 * Generates the initial state dinamically depending on the products that the app has in the moment.
 * It is perfect to make the app able to grow easy :)
 * @returns {Object}
 */
export const getInitialState = () => {
  let state = {};

  for (const name of _getAllProductNames()) {
    state[name] = {
      amount: 0,
      priceTotal: 0,
      discount: 0
    };
  }

  return state;
};
