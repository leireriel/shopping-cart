import { ALL_PRODUCTS } from 'components/Shop/components/ProductsList/data';
import { FIVE_PERCENT } from './constants';

export const getAllProductNames = () => {
  let listOfNames = [];

  for (const product of ALL_PRODUCTS) {
    listOfNames.push(product.name);
  }

  return listOfNames;
};

// TODO: I create the initial state dinamically and the product names, in order to make the app able to grow easy :)
export const getInitialState = () => {
  let state = {};

  for (const name of getAllProductNames()) {
    state[name] = {
      amount: 0,
      priceTotal: 0,
      discount: 0
    };
  }

  return state;
};

export const fivePercent = price => price * FIVE_PERCENT;

export const twoForOne = (amount, priceUnit) => {
  const integerPartOfAmount = Math.trunc(amount / 2);
  return integerPartOfAmount * priceUnit;
};
