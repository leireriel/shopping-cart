import { ALL_PRODUCTS } from 'components/Shop/constants';

const NAMES_OF_PRODUCTS = [];

for (const product of ALL_PRODUCTS) {
  NAMES_OF_PRODUCTS.push(product.name.toUpperCase());
}

export default NAMES_OF_PRODUCTS;