import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { modalClose } from 'components/Shop/components/Product/modules/actions';
import 'styles/modal.scss';

const Modal = memo(({ name, code, price, currency, description }) => {
  const dispatch = useDispatch();
  console.log('modalfr')

  return (
    <div className='modal-window'>
      <p>ffdssfsfsdf</p>
      <button onClick={() => dispatch(modalClose())}>cerrar</button>
    </div>
  );
});

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Modal;
