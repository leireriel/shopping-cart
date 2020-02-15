import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addOne, removeOne } from 'components/Shop/components/Product/modules/actions';

const Quantity = memo(({ name, price, productsState }) => {
  const dispatch = useDispatch();

  return (
  <div className='col-quantity'>
    <button onClick={() => dispatch(removeOne({ product:name, price }))} className='count'>
      -
    </button>
    <input type='text' className='product-quantity' value={productsState[name].amount} readOnly />
    <button onClick={() => dispatch(addOne({ product:name, price }))} className='count'>
      +
    </button>
  </div>
  );
});

Quantity.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productsState: PropTypes.object.isRequired
}

export default Quantity;
