import React, { memo } from 'react';
import { useSelector } from 'react-redux';

const OrderDiscounts = memo(() => {
  const discountCopiesShirt = useSelector(state => state.products.Shirt?.discountCopies);
  const discountCopiesMug = useSelector(state => state.products.Mug?.discountCopies);
  const discountShirt = useSelector(state => state.products.Shirt.discount);
  const discountMug = useSelector(state => state.products.Mug.discount);
  
  const renderDiscount = (copies, amount) => {
    return (
      <li key='0'>
        <span>{copies}</span>
        <span>-{amount}€</span>
      </li>
    );
  };

  // TODO el € lo cogería de una variable de entorno de mercado (por país)

  return (
    <div className='summary-discounts wrapper-half border'>
      <h2>Discounts</h2>
      <ul>
        {discountCopiesShirt && renderDiscount(discountCopiesShirt, discountShirt)}
        {discountCopiesMug && renderDiscount(discountCopiesMug, discountMug)}
      </ul>
    </div>
  );
});

export default OrderDiscounts;
