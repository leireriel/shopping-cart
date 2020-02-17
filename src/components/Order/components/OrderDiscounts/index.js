import React, { memo } from 'react';
import { useSelector } from 'react-redux';


const OrderDiscounts = memo(() => {
  const products = useSelector(state => state.products);
  const arrOfProducts = Object.entries(products);

  let discountsPerProduct = [];

  for (const product of arrOfProducts) {
    const nameAndDiscount = [];
    const name = product[0];
    const discount = product[1].discount;

    nameAndDiscount.push(name, discount);
    discountsPerProduct.push(nameAndDiscount);
  };

  console.log(discountsPerProduct);

  return (
    <div className='summary-discounts wrapper-half border'>
      <h2>Discounts</h2>
      <ul>
        <li><span>2x1 Mug offer</span><span>-10€</span></li>
        <li><span>x3 Shirt offer</span><span>-3€</span></li>
        <li><span>Promo code</span><span>0€</span></li>
      </ul>
    </div>
  );
});

export default OrderDiscounts;
