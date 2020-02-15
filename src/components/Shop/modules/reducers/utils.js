import { ALL_PRODUCTS } from 'components/Shop/constants';

export const getAllProductNames = () => {
  let listOfNames = [];

  for (const product of ALL_PRODUCTS) {
    listOfNames.push(product.name);
  }

  return listOfNames;
};

// I create the initial state dinamically and the product names, in order to make the app able to grow easy :)
export const getInitialState = () => {
  let state = {};

  for (const name of getAllProductNames()) {
    state[name] = {amount: 0, priceTotal: 0};
  }

  return state;
};
