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

const _fivePercent = price => price * FIVE_PERCENT;

const _twoForOne = (amount, priceUnit) => {
  const integerPartOfAmount = Math.trunc(amount / 2);
  return integerPartOfAmount * priceUnit;
};

export const calculatePrice = (amount, priceUnit) => amount * priceUnit;

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
