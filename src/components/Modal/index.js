import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { modalClose } from 'components/Shop/components/Product/modules/actions';
import { useSelector } from 'react-redux';
import 'styles/modal.scss';

const Modal = memo(() => {
  const dispatch = useDispatch();
  const modalState = useSelector(state => state.modal);

  return (
    <div className='modal-window'>
      <p>{modalState.open}</p>
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
