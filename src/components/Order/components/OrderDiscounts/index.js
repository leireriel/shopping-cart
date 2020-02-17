import React, { memo } from 'react';
import { useSelector } from 'react-redux';

/*
In a production development, I would take the currency (in this case, '€')
from a market environment variable set by country
*/

const OrderDiscounts = memo(() => {
  const discountCopiesShirt = useSelector(state => state.products.Shirt?.discountCopies);
  const discountCopiesMug = useSelector(state => state.products.Mug?.discountCopies);
  const discountShirt = useSelector(state => state.products.Shirt.discount);
  const discountMug = useSelector(state => state.products.Mug.discount);
  
  var shortid = require('shortid');

  /**
   * @name renderDiscount
   * Renders product and its discount
   * @param {string} copies
   * @param {number} amount
   * @returns {JSX}
   */
  const renderDiscount = (copies, amount) => (
    <li key={shortid.generate()}>
      <span>{copies}</span>
      <span>-{amount}€</span>
    </li>
  );

  return (
    <>
      {(discountCopiesShirt || discountCopiesMug) && (
        <div className='summary-discounts wrapper-half border'>
          <h2>Discounts</h2>
          <ul>
            {discountCopiesShirt && renderDiscount(discountCopiesShirt, discountShirt)}
            {discountCopiesMug && renderDiscount(discountCopiesMug, discountMug)}
          </ul>
        </div>
      )}
    </>
  );
});

export default OrderDiscounts;
