import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { modalClose, addOne } from 'components/Shop/components/Product/modules/actions';
import { useSelector } from 'react-redux';
import IconClose from 'img/close_icon.svg';
import 'styles/modal.scss';

const Modal = memo(() => {
  const dispatch = useDispatch();
  const modalCopies = useSelector(state => state.modal.copies);

  //Falta meter modal type product en redux

  return (
    <div className='modal-window'>
      <img
        onClick={() => dispatch(modalClose())}
        className="modal-close"
        src={IconClose}
        alt="Close modal"
      />
      <div className='modal-content'>
        <div className='modal-image'>
          <img className='image' src={modalCopies.imgSrc} alt={modalCopies.imgAlt} />
        </div>
        <div className='modal-text'>
          <h1>{modalCopies.titleLeft}</h1>
          <p>{modalCopies.price + modalCopies.currency}</p>
          <h2>{modalCopies.description}</h2>
          <p>{modalCopies.footer}</p>
          <button onClick={() => dispatch(addOne({ product:modalCopies.titleLeft, price:modalCopies.price }))}>
            {modalCopies.buttonText}
          </button>
        </div>
      </div>
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
