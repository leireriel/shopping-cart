import React, { memo } from 'react';
import Title from 'components/Title';

const Order = memo(() => (
  <aside className='summary'>

    <Title text='Order Summary' />

    {/* ul: componente OrderSummary */}
    <ul className='summary-items wrapper border'>
      <li>
        <span className='summary-items-number'>11 Items</span>
        <span className='summary-items-price'>120<span className='currency'>€</span></span>
      </li>
    </ul>

    {/* div: componente OrderDiscounts */}
    <div className='summary-discounts wrapper-half border'>
      <h2>Discounts</h2>
      <ul>
        <li><span>2x1 Mug offer</span><span>-10€</span></li>
        <li><span>x3 Shirt offer</span><span>-3€</span></li>
        <li><span>Promo code</span><span>0€</span></li>
      </ul>
    </div>

    {/* div: componente OrderTotal */}
    <div className='summary-total wrapper'>
      <ul>
        <li>
          <span className='summary-total-cost'>Total cost</span>
          <span className='summary-total-price'>107€</span>
        </li>
      </ul>
      <button type='submit'>Checkout</button>
    </div>

  </aside>
));

export default Order;
